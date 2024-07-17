import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string().email(),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    phone: z.string({ required_error: 'Phone number is required' }),
    address: z.string({ required_error: 'Address is required' }),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
