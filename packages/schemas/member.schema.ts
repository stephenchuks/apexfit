import { z } from "zod";

export const MemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  joinDate: z.string(),
  // add more fields as needed
});

export type Member = z.infer<typeof MemberSchema>;
