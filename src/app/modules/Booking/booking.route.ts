import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(BookingValidation.bookingValidationSchema),
  BookingController.createBooking,
);

router.get('/', BookingController.getAllBookings);

router.get('/:id', BookingController.getSingleBooking);

router.get('/my-bookings');

router.put(
  '/return',
  validateRequest(BookingValidation.returnCarValidationSchema),
  BookingController.updateBooking,
);

router.delete('/:id', BookingController.deleteBooking);

export const BookingRoutes = router;
