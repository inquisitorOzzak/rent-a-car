import { defineCollection, z } from 'astro:content';

const carsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    car: z.object({
      model: z.string(),
      features: z.array(z.string()),
      specs: z.object({
        production_year: z.number(),
        colour: z.string(),
        engine: z.string(),
        power_hp: z.number(),
        torque_nm: z.number(),
        weight_kg: z.number(),
        acceleration_0_100_kmh: z.string(),
        drive: z.string(),
      }),
      technical_specs: z.object({
        power_kw: z.number(),
        fuel_type: z.string(),
        fuel_consumption_l_per_100km: z.number(),
        doors: z.number(),
        seats: z.number(),
        transmission: z.string(),
      }),
      rental_terms: z.object({
        insurance: z.string(),
        included_km_per_day: z.number(),
        additional_cost_per_km: z.string(),
        security_deposit: z.string(),
        minimum_driver_age: z.number(),
        minimum_experience_years: z.number(),
        minimum_rental_period_days: z.number(),
        pickup_locations: z.array(z.string()),
      }),
      price_list: z.array(z.object({
        from: z.string(),
        price_per_day: z.string(),
      })),
    }),
  }),
});

export const collections = {
  cars: carsCollection,
};