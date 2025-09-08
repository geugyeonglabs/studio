'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
)

export const addNewsletterEmail = async (email: FormDataEntryValue | null) => {
  const { error } = await supabase.from('newsletter').insert({ email })

  console.error(error)
}
