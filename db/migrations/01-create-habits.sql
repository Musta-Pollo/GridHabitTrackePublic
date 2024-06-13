-- Create table habits based on this:

-- export const HabitsSchema = z.object({
--   habit_type: habit_typeSchema,
--   period: periodSchema,
--   id: z.string().uuid(),
--   amount: z.number().int().gte(1).lte(10000),
--   time: z.coerce.date(),
--   monday: z.boolean(),
--   tuesday: z.boolean(),
--   wednesday: z.boolean(),
--   thursday: z.boolean(),
--   friday: z.boolean(),
--   saturday: z.boolean(),
--   sunday: z.boolean(),
--   name: z.string(),
--   icon: z.string(),
--   color: z.string(),
--   team_id: z.string().uuid().nullable(),
--   user_id: z.string().uuid().nullable(),
--   electric_user_id: z.string().uuid().nullable(),
-- });
-- export const habit_typeSchema = z.enum(["Personal", "Team"]);
-- export const periodSchema = z.enum(["Week", "Month"]);

-- Create enums
CREATE TYPE habit_type AS ENUM ('Personal', 'Team');
CREATE TYPE period AS ENUM ('Week', 'Month');

-- Create habit table

CREATE TABLE habits (
    id UUID PRIMARY KEY NOT NULL,
    habit_type habit_type,
    period period,
    amount INTEGER,
    time TIME,
    monday BOOLEAN,
    tuesday BOOLEAN,
    wednesday BOOLEAN,
    thursday BOOLEAN,
    friday BOOLEAN,
    saturday BOOLEAN,
    sunday BOOLEAN,
    name TEXT,
    icon TEXT,
    color TEXT,
    team_id UUID,
    user_id UUID,
    electric_user_id UUID
);
