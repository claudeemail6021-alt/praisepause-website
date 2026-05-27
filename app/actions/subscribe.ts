'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export type SubscribeResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function subscribeEmail(
  prevState: SubscribeResult | null,
  formData: FormData
): Promise<SubscribeResult> {
  const email = (formData.get('email') as string)?.trim().toLowerCase();
  const name  = (formData.get('name')  as string)?.trim() || null;

  // Basic validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  // Guard: env vars not yet configured (local dev without .env.local)
  if (!supabaseUrl || supabaseUrl.includes('your-project-id')) {
    console.warn('[PraisePause] Supabase not configured — skipping DB write. Add .env.local to enable.');
    return {
      success: true,
      message: "You're on the list! Check your inbox for your 5 Worship Pauses PDF. 🙌",
    };
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { error } = await supabase
      .from('email_subscribers')
      .insert({ email, name, source: 'lead-magnet-pdf' });

    if (error) {
      // Duplicate email — treat as success so we don't leak whether the email is registered
      if (error.code === '23505') {
        return {
          success: true,
          message: "You're already on the list! Keep watching your inbox. 🙏",
        };
      }
      console.error('[PraisePause] Supabase insert error:', error);
      return { success: false, error: 'Something went wrong. Please try again.' };
    }

    return {
      success: true,
      message: "You're in! Your free 5 Worship Pauses PDF is on its way. 🎉",
    };
  } catch (err) {
    console.error('[PraisePause] Subscribe action error:', err);
    return { success: false, error: 'Unexpected error. Please try again shortly.' };
  }
}
