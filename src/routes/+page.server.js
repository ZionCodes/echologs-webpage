import { fail } from '@sveltejs/kit'
import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL } from '$env/static/public'
import { SUPABASE_SECRET_KEY } from '$env/static/private'

const supabase = createClient(PUBLIC_SUPABASE_URL, SUPABASE_SECRET_KEY)

export const actions = {
  waitlist: async ({ request }) => {
    const form       = await request.formData()
    const email      = form.get('email')?.toString().trim()      ?? ''
    const suggestion = form.get('suggestion')?.toString().trim() ?? ''

    if (!email || !email.includes('@')) {
      return fail(400, { error: 'Please enter a valid email address.' })
    }

    const { error } = await supabase
      .from('waitlist')
      .insert({ email, suggestion: suggestion || null })

    if (error) {
      if (error.code === '23505') {
        return fail(400, { error: "You're already on the waitlist!" })
      }
      return fail(500, { error: 'Something went wrong. Please try again.' })
    }

    return { success: true }
  }
}