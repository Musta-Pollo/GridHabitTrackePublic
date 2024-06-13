-- Create table completions based on this:
-- export const Habits_completersSchema = z.object({
--   id: z.string().uuid(),
--   user_id: z.string().uuid(),
--   habit_id: z.string().uuid(),
--   electric_user_id: z.string().uuid(),
-- });

-- export type Habits_completers = z.infer<typeof Habits_completersSchema>;
-- where habit_id is a foreign key to habits.id

CREATE TABLE habits_completions (
    id UUID PRIMARY KEY NOT NULL,
    user_id UUID NOT NULL,
    habit_id UUID NOT NULL,
    electric_user_id UUID NOT NULL,
    FOREIGN KEY (habit_id) REFERENCES habits(id)
);

ALTER TABLE habits_completions ENABLE ELECTRIC;