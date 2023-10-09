import z from "zod"


export const emailOrFormSchema = z.object({
  emailOrPhone: z
    .string()
    .email({ message: "Invalid email or phone number" })
    .or(z.string().regex(/^\d+$/).min(9))
})

export type EmailOrFormSchema = z.TypeOf<typeof emailOrFormSchema>