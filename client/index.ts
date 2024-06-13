// @ts-nocheck

import {
  DbSchema,
  ElectricClient,
  Relation,
  type HKT,
  type TableSchema,
} from "electric-sql/client/model";
import { z } from "zod";
import migrations from "./migrations";
import type { Prisma } from "./prismaClient";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const Habit_completionsScalarFieldEnumSchema = z.enum([
  "id",
  "user_id",
  "habit_id",
  "date",
  "electric_user_id",
]);

export const HabitsScalarFieldEnumSchema = z.enum([
  "id",
  "amount",
  "time",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "name",
  "icon",
  "color",
  "habit_type",
  "period",
  "team_id",
  "user_id",
  "electric_user_id",
]);

export const Habits_completersScalarFieldEnumSchema = z.enum([
  "id",
  "user_id",
  "habit_id",
]);

export const ProfilesScalarFieldEnumSchema = z.enum([
  "id",
  "email",
  "nickname",
  "user_id",
  "electric_user_id",
]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const TeamsScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "user_id",
  "link_pswd",
  "link_exp",
]);

export const Teams_usersScalarFieldEnumSchema = z.enum([
  "id",
  "user_id",
  "team_id",
  "role",
]);

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const habit_typeSchema = z.enum(["Personal", "Team"]);

export type habit_typeType = `${z.infer<typeof habit_typeSchema>}`;

export const periodSchema = z.enum(["Week", "Month"]);

export type periodType = `${z.infer<typeof periodSchema>}`;

export const team_roleSchema = z.enum(["owner", "member"]);

export type team_roleType = `${z.infer<typeof team_roleSchema>}`;

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// HABIT COMPLETIONS SCHEMA
/////////////////////////////////////////

export const Habit_completionsSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  habit_id: z.string().uuid(),
  date: z.coerce.date(),
  electric_user_id: z.string().uuid().nullable(),
});

export type Habit_completions = z.infer<typeof Habit_completionsSchema>;

/////////////////////////////////////////
// HABITS SCHEMA
/////////////////////////////////////////

export const HabitsSchema = z.object({
  habit_type: habit_typeSchema,
  period: periodSchema,
  id: z.string().uuid(),
  amount: z.number().int().gte(-2147483648).lte(2147483647),
  time: z.coerce.date(),
  monday: z.boolean(),
  tuesday: z.boolean(),
  wednesday: z.boolean(),
  thursday: z.boolean(),
  friday: z.boolean(),
  saturday: z.boolean(),
  sunday: z.boolean(),
  name: z.string(),
  icon: z.string(),
  color: z.string(),
  team_id: z.string().uuid().nullable(),
  user_id: z.string().uuid().nullable(),
  electric_user_id: z.string().uuid().nullable(),
});

export type Habits = z.infer<typeof HabitsSchema>;

/////////////////////////////////////////
// HABITS COMPLETERS SCHEMA
/////////////////////////////////////////

export const Habits_completersSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  habit_id: z.string().uuid(),
});

export type Habits_completers = z.infer<typeof Habits_completersSchema>;

/////////////////////////////////////////
// PROFILES SCHEMA
/////////////////////////////////////////

export const ProfilesSchema = z.object({
  id: z.string().uuid(),
  email: z.string(),
  nickname: z.string(),
  user_id: z.string().uuid(),
  electric_user_id: z.string().uuid().nullable(),
});

export type Profiles = z.infer<typeof ProfilesSchema>;

/////////////////////////////////////////
// TEAMS SCHEMA
/////////////////////////////////////////

export const TeamsSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  user_id: z.string().uuid(),
  link_pswd: z.string(),
  link_exp: z.coerce.date(),
});

export type Teams = z.infer<typeof TeamsSchema>;

/////////////////////////////////////////
// TEAMS USERS SCHEMA
/////////////////////////////////////////

export const Teams_usersSchema = z.object({
  role: team_roleSchema,
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  team_id: z.string().uuid(),
});

export type Teams_users = z.infer<typeof Teams_usersSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// HABIT COMPLETIONS
//------------------------------------------------------

export const Habit_completionsIncludeSchema: z.ZodType<Prisma.Habit_completionsInclude> =
  z
    .object({
      habits: z.union([z.boolean(), z.lazy(() => HabitsArgsSchema)]).optional(),
    })
    .strict();

export const Habit_completionsArgsSchema: z.ZodType<Prisma.Habit_completionsArgs> =
  z
    .object({
      select: z.lazy(() => Habit_completionsSelectSchema).optional(),
      include: z.lazy(() => Habit_completionsIncludeSchema).optional(),
    })
    .strict();

export const Habit_completionsSelectSchema: z.ZodType<Prisma.Habit_completionsSelect> =
  z
    .object({
      id: z.boolean().optional(),
      user_id: z.boolean().optional(),
      habit_id: z.boolean().optional(),
      date: z.boolean().optional(),
      electric_user_id: z.boolean().optional(),
      habits: z.union([z.boolean(), z.lazy(() => HabitsArgsSchema)]).optional(),
    })
    .strict();

// HABITS
//------------------------------------------------------

export const HabitsIncludeSchema: z.ZodType<Prisma.HabitsInclude> = z
  .object({
    habit_completions: z
      .union([z.boolean(), z.lazy(() => Habit_completionsFindManyArgsSchema)])
      .optional(),
    teams: z.union([z.boolean(), z.lazy(() => TeamsArgsSchema)]).optional(),
    habits_completers: z
      .union([z.boolean(), z.lazy(() => Habits_completersFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => HabitsCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const HabitsArgsSchema: z.ZodType<Prisma.HabitsArgs> = z
  .object({
    select: z.lazy(() => HabitsSelectSchema).optional(),
    include: z.lazy(() => HabitsIncludeSchema).optional(),
  })
  .strict();

export const HabitsCountOutputTypeArgsSchema: z.ZodType<Prisma.HabitsCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => HabitsCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const HabitsCountOutputTypeSelectSchema: z.ZodType<Prisma.HabitsCountOutputTypeSelect> =
  z
    .object({
      habit_completions: z.boolean().optional(),
      habits_completers: z.boolean().optional(),
    })
    .strict();

export const HabitsSelectSchema: z.ZodType<Prisma.HabitsSelect> = z
  .object({
    id: z.boolean().optional(),
    amount: z.boolean().optional(),
    time: z.boolean().optional(),
    monday: z.boolean().optional(),
    tuesday: z.boolean().optional(),
    wednesday: z.boolean().optional(),
    thursday: z.boolean().optional(),
    friday: z.boolean().optional(),
    saturday: z.boolean().optional(),
    sunday: z.boolean().optional(),
    name: z.boolean().optional(),
    icon: z.boolean().optional(),
    color: z.boolean().optional(),
    habit_type: z.boolean().optional(),
    period: z.boolean().optional(),
    team_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    electric_user_id: z.boolean().optional(),
    habit_completions: z
      .union([z.boolean(), z.lazy(() => Habit_completionsFindManyArgsSchema)])
      .optional(),
    teams: z.union([z.boolean(), z.lazy(() => TeamsArgsSchema)]).optional(),
    habits_completers: z
      .union([z.boolean(), z.lazy(() => Habits_completersFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => HabitsCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// HABITS COMPLETERS
//------------------------------------------------------

export const Habits_completersIncludeSchema: z.ZodType<Prisma.Habits_completersInclude> =
  z
    .object({
      habits: z.union([z.boolean(), z.lazy(() => HabitsArgsSchema)]).optional(),
    })
    .strict();

export const Habits_completersArgsSchema: z.ZodType<Prisma.Habits_completersArgs> =
  z
    .object({
      select: z.lazy(() => Habits_completersSelectSchema).optional(),
      include: z.lazy(() => Habits_completersIncludeSchema).optional(),
    })
    .strict();

export const Habits_completersSelectSchema: z.ZodType<Prisma.Habits_completersSelect> =
  z
    .object({
      id: z.boolean().optional(),
      user_id: z.boolean().optional(),
      habit_id: z.boolean().optional(),
      habits: z.union([z.boolean(), z.lazy(() => HabitsArgsSchema)]).optional(),
    })
    .strict();

// PROFILES
//------------------------------------------------------

export const ProfilesSelectSchema: z.ZodType<Prisma.ProfilesSelect> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    nickname: z.boolean().optional(),
    user_id: z.boolean().optional(),
    electric_user_id: z.boolean().optional(),
  })
  .strict();

// TEAMS
//------------------------------------------------------

export const TeamsIncludeSchema: z.ZodType<Prisma.TeamsInclude> = z
  .object({
    habits: z
      .union([z.boolean(), z.lazy(() => HabitsFindManyArgsSchema)])
      .optional(),
    teams_users: z
      .union([z.boolean(), z.lazy(() => Teams_usersFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TeamsCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const TeamsArgsSchema: z.ZodType<Prisma.TeamsArgs> = z
  .object({
    select: z.lazy(() => TeamsSelectSchema).optional(),
    include: z.lazy(() => TeamsIncludeSchema).optional(),
  })
  .strict();

export const TeamsCountOutputTypeArgsSchema: z.ZodType<Prisma.TeamsCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => TeamsCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const TeamsCountOutputTypeSelectSchema: z.ZodType<Prisma.TeamsCountOutputTypeSelect> =
  z
    .object({
      habits: z.boolean().optional(),
      teams_users: z.boolean().optional(),
    })
    .strict();

export const TeamsSelectSchema: z.ZodType<Prisma.TeamsSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    user_id: z.boolean().optional(),
    link_pswd: z.boolean().optional(),
    link_exp: z.boolean().optional(),
    habits: z
      .union([z.boolean(), z.lazy(() => HabitsFindManyArgsSchema)])
      .optional(),
    teams_users: z
      .union([z.boolean(), z.lazy(() => Teams_usersFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TeamsCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// TEAMS USERS
//------------------------------------------------------

export const Teams_usersIncludeSchema: z.ZodType<Prisma.Teams_usersInclude> = z
  .object({
    teams: z.union([z.boolean(), z.lazy(() => TeamsArgsSchema)]).optional(),
  })
  .strict();

export const Teams_usersArgsSchema: z.ZodType<Prisma.Teams_usersArgs> = z
  .object({
    select: z.lazy(() => Teams_usersSelectSchema).optional(),
    include: z.lazy(() => Teams_usersIncludeSchema).optional(),
  })
  .strict();

export const Teams_usersSelectSchema: z.ZodType<Prisma.Teams_usersSelect> = z
  .object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    team_id: z.boolean().optional(),
    role: z.boolean().optional(),
    teams: z.union([z.boolean(), z.lazy(() => TeamsArgsSchema)]).optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const Habit_completionsWhereInputSchema: z.ZodType<Prisma.Habit_completionsWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => Habit_completionsWhereInputSchema),
          z.lazy(() => Habit_completionsWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => Habit_completionsWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => Habit_completionsWhereInputSchema),
          z.lazy(() => Habit_completionsWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      habit_id: z
        .union([z.lazy(() => UuidFilterSchema), z.string()])
        .optional(),
      date: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      electric_user_id: z
        .union([z.lazy(() => UuidNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      habits: z
        .union([
          z.lazy(() => HabitsRelationFilterSchema),
          z.lazy(() => HabitsWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Habit_completionsOrderByWithRelationInputSchema: z.ZodType<Prisma.Habit_completionsOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_id: z.lazy(() => SortOrderSchema).optional(),
      date: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
      habits: z.lazy(() => HabitsOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const Habit_completionsWhereUniqueInputSchema: z.ZodType<Prisma.Habit_completionsWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid().optional(),
    })
    .strict();

export const Habit_completionsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Habit_completionsOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_id: z.lazy(() => SortOrderSchema).optional(),
      date: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => Habit_completionsCountOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => Habit_completionsMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => Habit_completionsMinOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const Habit_completionsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Habit_completionsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => Habit_completionsScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => Habit_completionsScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => Habit_completionsScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => Habit_completionsScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => Habit_completionsScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      habit_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      date: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.lazy(() => UuidNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const HabitsWhereInputSchema: z.ZodType<Prisma.HabitsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => HabitsWhereInputSchema),
        z.lazy(() => HabitsWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => HabitsWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => HabitsWhereInputSchema),
        z.lazy(() => HabitsWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    amount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    time: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    monday: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    tuesday: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    wednesday: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    thursday: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    friday: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    saturday: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    sunday: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    icon: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    color: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    habit_type: z
      .union([
        z.lazy(() => Enumhabit_typeFilterSchema),
        z.lazy(() => habit_typeSchema),
      ])
      .optional(),
    period: z
      .union([z.lazy(() => EnumperiodFilterSchema), z.lazy(() => periodSchema)])
      .optional(),
    team_id: z
      .union([z.lazy(() => UuidNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    user_id: z
      .union([z.lazy(() => UuidNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    electric_user_id: z
      .union([z.lazy(() => UuidNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    habit_completions: z
      .lazy(() => Habit_completionsListRelationFilterSchema)
      .optional(),
    teams: z
      .union([
        z.lazy(() => TeamsRelationFilterSchema),
        z.lazy(() => TeamsWhereInputSchema),
      ])
      .optional()
      .nullable(),
    habits_completers: z
      .lazy(() => Habits_completersListRelationFilterSchema)
      .optional(),
  })
  .strict();

export const HabitsOrderByWithRelationInputSchema: z.ZodType<Prisma.HabitsOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      amount: z.lazy(() => SortOrderSchema).optional(),
      time: z.lazy(() => SortOrderSchema).optional(),
      monday: z.lazy(() => SortOrderSchema).optional(),
      tuesday: z.lazy(() => SortOrderSchema).optional(),
      wednesday: z.lazy(() => SortOrderSchema).optional(),
      thursday: z.lazy(() => SortOrderSchema).optional(),
      friday: z.lazy(() => SortOrderSchema).optional(),
      saturday: z.lazy(() => SortOrderSchema).optional(),
      sunday: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      icon: z.lazy(() => SortOrderSchema).optional(),
      color: z.lazy(() => SortOrderSchema).optional(),
      habit_type: z.lazy(() => SortOrderSchema).optional(),
      period: z.lazy(() => SortOrderSchema).optional(),
      team_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_completions: z
        .lazy(() => Habit_completionsOrderByRelationAggregateInputSchema)
        .optional(),
      teams: z.lazy(() => TeamsOrderByWithRelationInputSchema).optional(),
      habits_completers: z
        .lazy(() => Habits_completersOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const HabitsWhereUniqueInputSchema: z.ZodType<Prisma.HabitsWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid().optional(),
    })
    .strict();

export const HabitsOrderByWithAggregationInputSchema: z.ZodType<Prisma.HabitsOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      amount: z.lazy(() => SortOrderSchema).optional(),
      time: z.lazy(() => SortOrderSchema).optional(),
      monday: z.lazy(() => SortOrderSchema).optional(),
      tuesday: z.lazy(() => SortOrderSchema).optional(),
      wednesday: z.lazy(() => SortOrderSchema).optional(),
      thursday: z.lazy(() => SortOrderSchema).optional(),
      friday: z.lazy(() => SortOrderSchema).optional(),
      saturday: z.lazy(() => SortOrderSchema).optional(),
      sunday: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      icon: z.lazy(() => SortOrderSchema).optional(),
      color: z.lazy(() => SortOrderSchema).optional(),
      habit_type: z.lazy(() => SortOrderSchema).optional(),
      period: z.lazy(() => SortOrderSchema).optional(),
      team_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => HabitsCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => HabitsAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => HabitsMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => HabitsMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => HabitsSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const HabitsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HabitsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => HabitsScalarWhereWithAggregatesInputSchema),
          z.lazy(() => HabitsScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => HabitsScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => HabitsScalarWhereWithAggregatesInputSchema),
          z.lazy(() => HabitsScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      amount: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
      time: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      monday: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      tuesday: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      wednesday: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      thursday: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      friday: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      saturday: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      sunday: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      icon: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      color: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => Enumhabit_typeWithAggregatesFilterSchema),
          z.lazy(() => habit_typeSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => EnumperiodWithAggregatesFilterSchema),
          z.lazy(() => periodSchema),
        ])
        .optional(),
      team_id: z
        .union([
          z.lazy(() => UuidNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      user_id: z
        .union([
          z.lazy(() => UuidNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.lazy(() => UuidNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const Habits_completersWhereInputSchema: z.ZodType<Prisma.Habits_completersWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => Habits_completersWhereInputSchema),
          z.lazy(() => Habits_completersWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => Habits_completersWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => Habits_completersWhereInputSchema),
          z.lazy(() => Habits_completersWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      habit_id: z
        .union([z.lazy(() => UuidFilterSchema), z.string()])
        .optional(),
      habits: z
        .union([
          z.lazy(() => HabitsRelationFilterSchema),
          z.lazy(() => HabitsWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Habits_completersOrderByWithRelationInputSchema: z.ZodType<Prisma.Habits_completersOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_id: z.lazy(() => SortOrderSchema).optional(),
      habits: z.lazy(() => HabitsOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const Habits_completersWhereUniqueInputSchema: z.ZodType<Prisma.Habits_completersWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid().optional(),
    })
    .strict();

export const Habits_completersOrderByWithAggregationInputSchema: z.ZodType<Prisma.Habits_completersOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_id: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => Habits_completersCountOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => Habits_completersMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => Habits_completersMinOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const Habits_completersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Habits_completersScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => Habits_completersScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => Habits_completersScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => Habits_completersScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => Habits_completersScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => Habits_completersScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      habit_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ProfilesWhereInputSchema: z.ZodType<Prisma.ProfilesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProfilesWhereInputSchema),
        z.lazy(() => ProfilesWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProfilesWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProfilesWhereInputSchema),
        z.lazy(() => ProfilesWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    nickname: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    electric_user_id: z
      .union([z.lazy(() => UuidNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const ProfilesOrderByWithRelationInputSchema: z.ZodType<Prisma.ProfilesOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      nickname: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ProfilesWhereUniqueInputSchema: z.ZodType<Prisma.ProfilesWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid().optional(),
    })
    .strict();

export const ProfilesOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProfilesOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      nickname: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => ProfilesCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ProfilesMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ProfilesMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const ProfilesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProfilesScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ProfilesScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ProfilesScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ProfilesScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ProfilesScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ProfilesScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      email: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      nickname: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      electric_user_id: z
        .union([
          z.lazy(() => UuidNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const TeamsWhereInputSchema: z.ZodType<Prisma.TeamsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TeamsWhereInputSchema),
        z.lazy(() => TeamsWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TeamsWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TeamsWhereInputSchema),
        z.lazy(() => TeamsWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    link_pswd: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    link_exp: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    habits: z.lazy(() => HabitsListRelationFilterSchema).optional(),
    teams_users: z.lazy(() => Teams_usersListRelationFilterSchema).optional(),
  })
  .strict();

export const TeamsOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamsOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      link_pswd: z.lazy(() => SortOrderSchema).optional(),
      link_exp: z.lazy(() => SortOrderSchema).optional(),
      habits: z
        .lazy(() => HabitsOrderByRelationAggregateInputSchema)
        .optional(),
      teams_users: z
        .lazy(() => Teams_usersOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const TeamsWhereUniqueInputSchema: z.ZodType<Prisma.TeamsWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid().optional(),
    })
    .strict();

export const TeamsOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamsOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      link_pswd: z.lazy(() => SortOrderSchema).optional(),
      link_exp: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => TeamsCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => TeamsMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => TeamsMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const TeamsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TeamsScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TeamsScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TeamsScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TeamsScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TeamsScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      link_pswd: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      link_exp: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersWhereInputSchema: z.ZodType<Prisma.Teams_usersWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => Teams_usersWhereInputSchema),
          z.lazy(() => Teams_usersWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => Teams_usersWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => Teams_usersWhereInputSchema),
          z.lazy(() => Teams_usersWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      team_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      role: z
        .union([
          z.lazy(() => Enumteam_roleFilterSchema),
          z.lazy(() => team_roleSchema),
        ])
        .optional(),
      teams: z
        .union([
          z.lazy(() => TeamsRelationFilterSchema),
          z.lazy(() => TeamsWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersOrderByWithRelationInputSchema: z.ZodType<Prisma.Teams_usersOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      team_id: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      teams: z.lazy(() => TeamsOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const Teams_usersWhereUniqueInputSchema: z.ZodType<Prisma.Teams_usersWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid().optional(),
    })
    .strict();

export const Teams_usersOrderByWithAggregationInputSchema: z.ZodType<Prisma.Teams_usersOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      team_id: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => Teams_usersCountOrderByAggregateInputSchema)
        .optional(),
      _max: z.lazy(() => Teams_usersMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => Teams_usersMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const Teams_usersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Teams_usersScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => Teams_usersScalarWhereWithAggregatesInputSchema),
          z.lazy(() => Teams_usersScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => Teams_usersScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => Teams_usersScalarWhereWithAggregatesInputSchema),
          z.lazy(() => Teams_usersScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      team_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      role: z
        .union([
          z.lazy(() => Enumteam_roleWithAggregatesFilterSchema),
          z.lazy(() => team_roleSchema),
        ])
        .optional(),
    })
    .strict();

export const Habit_completionsCreateInputSchema: z.ZodType<Prisma.Habit_completionsCreateInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      date: z.coerce.date(),
      electric_user_id: z.string().uuid().optional().nullable(),
      habits: z.lazy(
        () => HabitsCreateNestedOneWithoutHabit_completionsInputSchema
      ),
    })
    .strict();

export const Habit_completionsUncheckedCreateInputSchema: z.ZodType<Prisma.Habit_completionsUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      habit_id: z.string().uuid(),
      date: z.coerce.date(),
      electric_user_id: z.string().uuid().optional().nullable(),
    })
    .strict();

export const Habit_completionsUpdateInputSchema: z.ZodType<Prisma.Habit_completionsUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      date: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      habits: z
        .lazy(
          () => HabitsUpdateOneRequiredWithoutHabit_completionsNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const Habit_completionsUncheckedUpdateInputSchema: z.ZodType<Prisma.Habit_completionsUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      date: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const Habit_completionsCreateManyInputSchema: z.ZodType<Prisma.Habit_completionsCreateManyInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      habit_id: z.string().uuid(),
      date: z.coerce.date(),
      electric_user_id: z.string().uuid().optional().nullable(),
    })
    .strict();

export const Habit_completionsUpdateManyMutationInputSchema: z.ZodType<Prisma.Habit_completionsUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      date: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const Habit_completionsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Habit_completionsUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      date: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const HabitsCreateInputSchema: z.ZodType<Prisma.HabitsCreateInput> = z
  .object({
    id: z.string().uuid(),
    amount: z.number().int().gte(-2147483648).lte(2147483647),
    time: z.coerce.date(),
    monday: z.boolean(),
    tuesday: z.boolean(),
    wednesday: z.boolean(),
    thursday: z.boolean(),
    friday: z.boolean(),
    saturday: z.boolean(),
    sunday: z.boolean(),
    name: z.string(),
    icon: z.string(),
    color: z.string(),
    habit_type: z.lazy(() => habit_typeSchema),
    period: z.lazy(() => periodSchema),
    user_id: z.string().uuid().optional().nullable(),
    electric_user_id: z.string().uuid().optional().nullable(),
    habit_completions: z
      .lazy(() => Habit_completionsCreateNestedManyWithoutHabitsInputSchema)
      .optional(),
    teams: z
      .lazy(() => TeamsCreateNestedOneWithoutHabitsInputSchema)
      .optional(),
    habits_completers: z
      .lazy(() => Habits_completersCreateNestedManyWithoutHabitsInputSchema)
      .optional(),
  })
  .strict();

export const HabitsUncheckedCreateInputSchema: z.ZodType<Prisma.HabitsUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid(),
      amount: z.number().int().gte(-2147483648).lte(2147483647),
      time: z.coerce.date(),
      monday: z.boolean(),
      tuesday: z.boolean(),
      wednesday: z.boolean(),
      thursday: z.boolean(),
      friday: z.boolean(),
      saturday: z.boolean(),
      sunday: z.boolean(),
      name: z.string(),
      icon: z.string(),
      color: z.string(),
      habit_type: z.lazy(() => habit_typeSchema),
      period: z.lazy(() => periodSchema),
      team_id: z.string().uuid().optional().nullable(),
      user_id: z.string().uuid().optional().nullable(),
      electric_user_id: z.string().uuid().optional().nullable(),
      habit_completions: z
        .lazy(
          () =>
            Habit_completionsUncheckedCreateNestedManyWithoutHabitsInputSchema
        )
        .optional(),
      habits_completers: z
        .lazy(
          () =>
            Habits_completersUncheckedCreateNestedManyWithoutHabitsInputSchema
        )
        .optional(),
    })
    .strict();

export const HabitsUpdateInputSchema: z.ZodType<Prisma.HabitsUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().uuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    amount: z
      .union([
        z.number().int().gte(-2147483648).lte(2147483647),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    time: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    monday: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    tuesday: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    wednesday: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    thursday: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    friday: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    saturday: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    sunday: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    icon: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    color: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    habit_type: z
      .union([
        z.lazy(() => habit_typeSchema),
        z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    period: z
      .union([
        z.lazy(() => periodSchema),
        z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user_id: z
      .union([
        z.string().uuid(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    electric_user_id: z
      .union([
        z.string().uuid(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    habit_completions: z
      .lazy(() => Habit_completionsUpdateManyWithoutHabitsNestedInputSchema)
      .optional(),
    teams: z
      .lazy(() => TeamsUpdateOneWithoutHabitsNestedInputSchema)
      .optional(),
    habits_completers: z
      .lazy(() => Habits_completersUpdateManyWithoutHabitsNestedInputSchema)
      .optional(),
  })
  .strict();

export const HabitsUncheckedUpdateInputSchema: z.ZodType<Prisma.HabitsUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      amount: z
        .union([
          z.number().int().gte(-2147483648).lte(2147483647),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      time: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      monday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      tuesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      wednesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      thursday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      friday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      saturday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sunday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      color: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      team_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      habit_completions: z
        .lazy(
          () =>
            Habit_completionsUncheckedUpdateManyWithoutHabitsNestedInputSchema
        )
        .optional(),
      habits_completers: z
        .lazy(
          () =>
            Habits_completersUncheckedUpdateManyWithoutHabitsNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const HabitsCreateManyInputSchema: z.ZodType<Prisma.HabitsCreateManyInput> =
  z
    .object({
      id: z.string().uuid(),
      amount: z.number().int().gte(-2147483648).lte(2147483647),
      time: z.coerce.date(),
      monday: z.boolean(),
      tuesday: z.boolean(),
      wednesday: z.boolean(),
      thursday: z.boolean(),
      friday: z.boolean(),
      saturday: z.boolean(),
      sunday: z.boolean(),
      name: z.string(),
      icon: z.string(),
      color: z.string(),
      habit_type: z.lazy(() => habit_typeSchema),
      period: z.lazy(() => periodSchema),
      team_id: z.string().uuid().optional().nullable(),
      user_id: z.string().uuid().optional().nullable(),
      electric_user_id: z.string().uuid().optional().nullable(),
    })
    .strict();

export const HabitsUpdateManyMutationInputSchema: z.ZodType<Prisma.HabitsUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      amount: z
        .union([
          z.number().int().gte(-2147483648).lte(2147483647),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      time: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      monday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      tuesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      wednesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      thursday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      friday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      saturday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sunday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      color: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const HabitsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HabitsUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      amount: z
        .union([
          z.number().int().gte(-2147483648).lte(2147483647),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      time: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      monday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      tuesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      wednesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      thursday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      friday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      saturday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sunday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      color: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      team_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const Habits_completersCreateInputSchema: z.ZodType<Prisma.Habits_completersCreateInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      habits: z.lazy(
        () => HabitsCreateNestedOneWithoutHabits_completersInputSchema
      ),
    })
    .strict();

export const Habits_completersUncheckedCreateInputSchema: z.ZodType<Prisma.Habits_completersUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      habit_id: z.string().uuid(),
    })
    .strict();

export const Habits_completersUpdateInputSchema: z.ZodType<Prisma.Habits_completersUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habits: z
        .lazy(
          () => HabitsUpdateOneRequiredWithoutHabits_completersNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const Habits_completersUncheckedUpdateInputSchema: z.ZodType<Prisma.Habits_completersUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Habits_completersCreateManyInputSchema: z.ZodType<Prisma.Habits_completersCreateManyInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      habit_id: z.string().uuid(),
    })
    .strict();

export const Habits_completersUpdateManyMutationInputSchema: z.ZodType<Prisma.Habits_completersUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Habits_completersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Habits_completersUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProfilesCreateInputSchema: z.ZodType<Prisma.ProfilesCreateInput> =
  z
    .object({
      id: z.string().uuid(),
      email: z.string(),
      nickname: z.string(),
      user_id: z.string().uuid(),
      electric_user_id: z.string().uuid().optional().nullable(),
    })
    .strict();

export const ProfilesUncheckedCreateInputSchema: z.ZodType<Prisma.ProfilesUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid(),
      email: z.string(),
      nickname: z.string(),
      user_id: z.string().uuid(),
      electric_user_id: z.string().uuid().optional().nullable(),
    })
    .strict();

export const ProfilesUpdateInputSchema: z.ZodType<Prisma.ProfilesUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      nickname: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ProfilesUncheckedUpdateInputSchema: z.ZodType<Prisma.ProfilesUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      nickname: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ProfilesCreateManyInputSchema: z.ZodType<Prisma.ProfilesCreateManyInput> =
  z
    .object({
      id: z.string().uuid(),
      email: z.string(),
      nickname: z.string(),
      user_id: z.string().uuid(),
      electric_user_id: z.string().uuid().optional().nullable(),
    })
    .strict();

export const ProfilesUpdateManyMutationInputSchema: z.ZodType<Prisma.ProfilesUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      nickname: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ProfilesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProfilesUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      nickname: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const TeamsCreateInputSchema: z.ZodType<Prisma.TeamsCreateInput> = z
  .object({
    id: z.string().uuid(),
    name: z.string(),
    user_id: z.string().uuid(),
    link_pswd: z.string(),
    link_exp: z.coerce.date(),
    habits: z
      .lazy(() => HabitsCreateNestedManyWithoutTeamsInputSchema)
      .optional(),
    teams_users: z
      .lazy(() => Teams_usersCreateNestedManyWithoutTeamsInputSchema)
      .optional(),
  })
  .strict();

export const TeamsUncheckedCreateInputSchema: z.ZodType<Prisma.TeamsUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid(),
      name: z.string(),
      user_id: z.string().uuid(),
      link_pswd: z.string(),
      link_exp: z.coerce.date(),
      habits: z
        .lazy(() => HabitsUncheckedCreateNestedManyWithoutTeamsInputSchema)
        .optional(),
      teams_users: z
        .lazy(() => Teams_usersUncheckedCreateNestedManyWithoutTeamsInputSchema)
        .optional(),
    })
    .strict();

export const TeamsUpdateInputSchema: z.ZodType<Prisma.TeamsUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().uuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    user_id: z
      .union([
        z.string().uuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    link_pswd: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    link_exp: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    habits: z
      .lazy(() => HabitsUpdateManyWithoutTeamsNestedInputSchema)
      .optional(),
    teams_users: z
      .lazy(() => Teams_usersUpdateManyWithoutTeamsNestedInputSchema)
      .optional(),
  })
  .strict();

export const TeamsUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamsUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_pswd: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_exp: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habits: z
        .lazy(() => HabitsUncheckedUpdateManyWithoutTeamsNestedInputSchema)
        .optional(),
      teams_users: z
        .lazy(() => Teams_usersUncheckedUpdateManyWithoutTeamsNestedInputSchema)
        .optional(),
    })
    .strict();

export const TeamsCreateManyInputSchema: z.ZodType<Prisma.TeamsCreateManyInput> =
  z
    .object({
      id: z.string().uuid(),
      name: z.string(),
      user_id: z.string().uuid(),
      link_pswd: z.string(),
      link_exp: z.coerce.date(),
    })
    .strict();

export const TeamsUpdateManyMutationInputSchema: z.ZodType<Prisma.TeamsUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_pswd: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_exp: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const TeamsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TeamsUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_pswd: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_exp: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersCreateInputSchema: z.ZodType<Prisma.Teams_usersCreateInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      role: z.lazy(() => team_roleSchema),
      teams: z.lazy(() => TeamsCreateNestedOneWithoutTeams_usersInputSchema),
    })
    .strict();

export const Teams_usersUncheckedCreateInputSchema: z.ZodType<Prisma.Teams_usersUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      team_id: z.string().uuid(),
      role: z.lazy(() => team_roleSchema),
    })
    .strict();

export const Teams_usersUpdateInputSchema: z.ZodType<Prisma.Teams_usersUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => Enumteam_roleFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      teams: z
        .lazy(() => TeamsUpdateOneRequiredWithoutTeams_usersNestedInputSchema)
        .optional(),
    })
    .strict();

export const Teams_usersUncheckedUpdateInputSchema: z.ZodType<Prisma.Teams_usersUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      team_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => Enumteam_roleFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersCreateManyInputSchema: z.ZodType<Prisma.Teams_usersCreateManyInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      team_id: z.string().uuid(),
      role: z.lazy(() => team_roleSchema),
    })
    .strict();

export const Teams_usersUpdateManyMutationInputSchema: z.ZodType<Prisma.Teams_usersUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => Enumteam_roleFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Teams_usersUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      team_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => Enumteam_roleFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidFilterSchema)]).optional(),
  })
  .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  })
  .strict();

export const UuidNullableFilterSchema: z.ZodType<Prisma.UuidNullableFilter> = z
  .object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedUuidNullableFilterSchema)])
      .optional()
      .nullable(),
  })
  .strict();

export const HabitsRelationFilterSchema: z.ZodType<Prisma.HabitsRelationFilter> =
  z
    .object({
      is: z.lazy(() => HabitsWhereInputSchema).optional(),
      isNot: z.lazy(() => HabitsWhereInputSchema).optional(),
    })
    .strict();

export const Habit_completionsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Habit_completionsCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_id: z.lazy(() => SortOrderSchema).optional(),
      date: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Habit_completionsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Habit_completionsMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_id: z.lazy(() => SortOrderSchema).optional(),
      date: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Habit_completionsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Habit_completionsMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_id: z.lazy(() => SortOrderSchema).optional(),
      date: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedUuidWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const UuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    })
    .strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const Enumhabit_typeFilterSchema: z.ZodType<Prisma.Enumhabit_typeFilter> =
  z
    .object({
      equals: z.lazy(() => habit_typeSchema).optional(),
      in: z
        .lazy(() => habit_typeSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => habit_typeSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => NestedEnumhabit_typeFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const EnumperiodFilterSchema: z.ZodType<Prisma.EnumperiodFilter> = z
  .object({
    equals: z.lazy(() => periodSchema).optional(),
    in: z
      .lazy(() => periodSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => periodSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => periodSchema),
        z.lazy(() => NestedEnumperiodFilterSchema),
      ])
      .optional(),
  })
  .strict();

export const Habit_completionsListRelationFilterSchema: z.ZodType<Prisma.Habit_completionsListRelationFilter> =
  z
    .object({
      every: z.lazy(() => Habit_completionsWhereInputSchema).optional(),
      some: z.lazy(() => Habit_completionsWhereInputSchema).optional(),
      none: z.lazy(() => Habit_completionsWhereInputSchema).optional(),
    })
    .strict();

export const TeamsRelationFilterSchema: z.ZodType<Prisma.TeamsRelationFilter> =
  z
    .object({
      is: z.lazy(() => TeamsWhereInputSchema).optional(),
      isNot: z.lazy(() => TeamsWhereInputSchema).optional(),
    })
    .strict();

export const Habits_completersListRelationFilterSchema: z.ZodType<Prisma.Habits_completersListRelationFilter> =
  z
    .object({
      every: z.lazy(() => Habits_completersWhereInputSchema).optional(),
      some: z.lazy(() => Habits_completersWhereInputSchema).optional(),
      none: z.lazy(() => Habits_completersWhereInputSchema).optional(),
    })
    .strict();

export const Habit_completionsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Habit_completionsOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Habits_completersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Habits_completersOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const HabitsCountOrderByAggregateInputSchema: z.ZodType<Prisma.HabitsCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      amount: z.lazy(() => SortOrderSchema).optional(),
      time: z.lazy(() => SortOrderSchema).optional(),
      monday: z.lazy(() => SortOrderSchema).optional(),
      tuesday: z.lazy(() => SortOrderSchema).optional(),
      wednesday: z.lazy(() => SortOrderSchema).optional(),
      thursday: z.lazy(() => SortOrderSchema).optional(),
      friday: z.lazy(() => SortOrderSchema).optional(),
      saturday: z.lazy(() => SortOrderSchema).optional(),
      sunday: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      icon: z.lazy(() => SortOrderSchema).optional(),
      color: z.lazy(() => SortOrderSchema).optional(),
      habit_type: z.lazy(() => SortOrderSchema).optional(),
      period: z.lazy(() => SortOrderSchema).optional(),
      team_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const HabitsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.HabitsAvgOrderByAggregateInput> =
  z
    .object({
      amount: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const HabitsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HabitsMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      amount: z.lazy(() => SortOrderSchema).optional(),
      time: z.lazy(() => SortOrderSchema).optional(),
      monday: z.lazy(() => SortOrderSchema).optional(),
      tuesday: z.lazy(() => SortOrderSchema).optional(),
      wednesday: z.lazy(() => SortOrderSchema).optional(),
      thursday: z.lazy(() => SortOrderSchema).optional(),
      friday: z.lazy(() => SortOrderSchema).optional(),
      saturday: z.lazy(() => SortOrderSchema).optional(),
      sunday: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      icon: z.lazy(() => SortOrderSchema).optional(),
      color: z.lazy(() => SortOrderSchema).optional(),
      habit_type: z.lazy(() => SortOrderSchema).optional(),
      period: z.lazy(() => SortOrderSchema).optional(),
      team_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const HabitsMinOrderByAggregateInputSchema: z.ZodType<Prisma.HabitsMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      amount: z.lazy(() => SortOrderSchema).optional(),
      time: z.lazy(() => SortOrderSchema).optional(),
      monday: z.lazy(() => SortOrderSchema).optional(),
      tuesday: z.lazy(() => SortOrderSchema).optional(),
      wednesday: z.lazy(() => SortOrderSchema).optional(),
      thursday: z.lazy(() => SortOrderSchema).optional(),
      friday: z.lazy(() => SortOrderSchema).optional(),
      saturday: z.lazy(() => SortOrderSchema).optional(),
      sunday: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      icon: z.lazy(() => SortOrderSchema).optional(),
      color: z.lazy(() => SortOrderSchema).optional(),
      habit_type: z.lazy(() => SortOrderSchema).optional(),
      period: z.lazy(() => SortOrderSchema).optional(),
      team_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const HabitsSumOrderByAggregateInputSchema: z.ZodType<Prisma.HabitsSumOrderByAggregateInput> =
  z
    .object({
      amount: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const Enumhabit_typeWithAggregatesFilterSchema: z.ZodType<Prisma.Enumhabit_typeWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => habit_typeSchema).optional(),
      in: z
        .lazy(() => habit_typeSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => habit_typeSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => NestedEnumhabit_typeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumhabit_typeFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumhabit_typeFilterSchema).optional(),
    })
    .strict();

export const EnumperiodWithAggregatesFilterSchema: z.ZodType<Prisma.EnumperiodWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => periodSchema).optional(),
      in: z
        .lazy(() => periodSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => periodSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => NestedEnumperiodWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumperiodFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumperiodFilterSchema).optional(),
    })
    .strict();

export const Habits_completersCountOrderByAggregateInputSchema: z.ZodType<Prisma.Habits_completersCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Habits_completersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Habits_completersMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Habits_completersMinOrderByAggregateInputSchema: z.ZodType<Prisma.Habits_completersMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      habit_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ProfilesCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProfilesCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      nickname: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ProfilesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProfilesMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      nickname: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ProfilesMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProfilesMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      nickname: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      electric_user_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const HabitsListRelationFilterSchema: z.ZodType<Prisma.HabitsListRelationFilter> =
  z
    .object({
      every: z.lazy(() => HabitsWhereInputSchema).optional(),
      some: z.lazy(() => HabitsWhereInputSchema).optional(),
      none: z.lazy(() => HabitsWhereInputSchema).optional(),
    })
    .strict();

export const Teams_usersListRelationFilterSchema: z.ZodType<Prisma.Teams_usersListRelationFilter> =
  z
    .object({
      every: z.lazy(() => Teams_usersWhereInputSchema).optional(),
      some: z.lazy(() => Teams_usersWhereInputSchema).optional(),
      none: z.lazy(() => Teams_usersWhereInputSchema).optional(),
    })
    .strict();

export const HabitsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.HabitsOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Teams_usersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Teams_usersOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TeamsCountOrderByAggregateInputSchema: z.ZodType<Prisma.TeamsCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      link_pswd: z.lazy(() => SortOrderSchema).optional(),
      link_exp: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TeamsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeamsMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      link_pswd: z.lazy(() => SortOrderSchema).optional(),
      link_exp: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TeamsMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeamsMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      link_pswd: z.lazy(() => SortOrderSchema).optional(),
      link_exp: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Enumteam_roleFilterSchema: z.ZodType<Prisma.Enumteam_roleFilter> =
  z
    .object({
      equals: z.lazy(() => team_roleSchema).optional(),
      in: z
        .lazy(() => team_roleSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => team_roleSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => NestedEnumteam_roleFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersCountOrderByAggregateInputSchema: z.ZodType<Prisma.Teams_usersCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      team_id: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Teams_usersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Teams_usersMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      team_id: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Teams_usersMinOrderByAggregateInputSchema: z.ZodType<Prisma.Teams_usersMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      team_id: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Enumteam_roleWithAggregatesFilterSchema: z.ZodType<Prisma.Enumteam_roleWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => team_roleSchema).optional(),
      in: z
        .lazy(() => team_roleSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => team_roleSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => NestedEnumteam_roleWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumteam_roleFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumteam_roleFilterSchema).optional(),
    })
    .strict();

export const HabitsCreateNestedOneWithoutHabit_completionsInputSchema: z.ZodType<Prisma.HabitsCreateNestedOneWithoutHabit_completionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HabitsCreateWithoutHabit_completionsInputSchema),
          z.lazy(
            () => HabitsUncheckedCreateWithoutHabit_completionsInputSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => HabitsCreateOrConnectWithoutHabit_completionsInputSchema)
        .optional(),
      connect: z.lazy(() => HabitsWhereUniqueInputSchema).optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional(),
    })
    .strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional().nullable(),
    })
    .strict();

export const HabitsUpdateOneRequiredWithoutHabit_completionsNestedInputSchema: z.ZodType<Prisma.HabitsUpdateOneRequiredWithoutHabit_completionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HabitsCreateWithoutHabit_completionsInputSchema),
          z.lazy(
            () => HabitsUncheckedCreateWithoutHabit_completionsInputSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => HabitsCreateOrConnectWithoutHabit_completionsInputSchema)
        .optional(),
      upsert: z
        .lazy(() => HabitsUpsertWithoutHabit_completionsInputSchema)
        .optional(),
      connect: z.lazy(() => HabitsWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => HabitsUpdateWithoutHabit_completionsInputSchema),
          z.lazy(
            () => HabitsUncheckedUpdateWithoutHabit_completionsInputSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const Habit_completionsCreateNestedManyWithoutHabitsInputSchema: z.ZodType<Prisma.Habit_completionsCreateNestedManyWithoutHabitsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Habit_completionsCreateWithoutHabitsInputSchema),
          z.lazy(() => Habit_completionsCreateWithoutHabitsInputSchema).array(),
          z.lazy(
            () => Habit_completionsUncheckedCreateWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habit_completionsUncheckedCreateWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => Habit_completionsCreateOrConnectWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habit_completionsCreateOrConnectWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Habit_completionsCreateManyHabitsInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => Habit_completionsWhereUniqueInputSchema),
          z.lazy(() => Habit_completionsWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TeamsCreateNestedOneWithoutHabitsInputSchema: z.ZodType<Prisma.TeamsCreateNestedOneWithoutHabitsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TeamsCreateWithoutHabitsInputSchema),
          z.lazy(() => TeamsUncheckedCreateWithoutHabitsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TeamsCreateOrConnectWithoutHabitsInputSchema)
        .optional(),
      connect: z.lazy(() => TeamsWhereUniqueInputSchema).optional(),
    })
    .strict();

export const Habits_completersCreateNestedManyWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completersCreateNestedManyWithoutHabitsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Habits_completersCreateWithoutHabitsInputSchema),
          z.lazy(() => Habits_completersCreateWithoutHabitsInputSchema).array(),
          z.lazy(
            () => Habits_completersUncheckedCreateWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habits_completersUncheckedCreateWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => Habits_completersCreateOrConnectWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habits_completersCreateOrConnectWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Habits_completersCreateManyHabitsInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => Habits_completersWhereUniqueInputSchema),
          z.lazy(() => Habits_completersWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const Habit_completionsUncheckedCreateNestedManyWithoutHabitsInputSchema: z.ZodType<Prisma.Habit_completionsUncheckedCreateNestedManyWithoutHabitsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Habit_completionsCreateWithoutHabitsInputSchema),
          z.lazy(() => Habit_completionsCreateWithoutHabitsInputSchema).array(),
          z.lazy(
            () => Habit_completionsUncheckedCreateWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habit_completionsUncheckedCreateWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => Habit_completionsCreateOrConnectWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habit_completionsCreateOrConnectWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Habit_completionsCreateManyHabitsInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => Habit_completionsWhereUniqueInputSchema),
          z.lazy(() => Habit_completionsWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const Habits_completersUncheckedCreateNestedManyWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completersUncheckedCreateNestedManyWithoutHabitsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Habits_completersCreateWithoutHabitsInputSchema),
          z.lazy(() => Habits_completersCreateWithoutHabitsInputSchema).array(),
          z.lazy(
            () => Habits_completersUncheckedCreateWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habits_completersUncheckedCreateWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => Habits_completersCreateOrConnectWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habits_completersCreateOrConnectWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Habits_completersCreateManyHabitsInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => Habits_completersWhereUniqueInputSchema),
          z.lazy(() => Habits_completersWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
    })
    .strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
  z
    .object({
      set: z.boolean().optional(),
    })
    .strict();

export const Enumhabit_typeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.Enumhabit_typeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => habit_typeSchema).optional(),
    })
    .strict();

export const EnumperiodFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumperiodFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => periodSchema).optional(),
    })
    .strict();

export const Habit_completionsUpdateManyWithoutHabitsNestedInputSchema: z.ZodType<Prisma.Habit_completionsUpdateManyWithoutHabitsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Habit_completionsCreateWithoutHabitsInputSchema),
          z.lazy(() => Habit_completionsCreateWithoutHabitsInputSchema).array(),
          z.lazy(
            () => Habit_completionsUncheckedCreateWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habit_completionsUncheckedCreateWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => Habit_completionsCreateOrConnectWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habit_completionsCreateOrConnectWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => Habit_completionsUpsertWithWhereUniqueWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () =>
                Habit_completionsUpsertWithWhereUniqueWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Habit_completionsCreateManyHabitsInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => Habit_completionsWhereUniqueInputSchema),
          z.lazy(() => Habit_completionsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => Habit_completionsWhereUniqueInputSchema),
          z.lazy(() => Habit_completionsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => Habit_completionsWhereUniqueInputSchema),
          z.lazy(() => Habit_completionsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => Habit_completionsWhereUniqueInputSchema),
          z.lazy(() => Habit_completionsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => Habit_completionsUpdateWithWhereUniqueWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () =>
                Habit_completionsUpdateWithWhereUniqueWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => Habit_completionsUpdateManyWithWhereWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habit_completionsUpdateManyWithWhereWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => Habit_completionsScalarWhereInputSchema),
          z.lazy(() => Habit_completionsScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TeamsUpdateOneWithoutHabitsNestedInputSchema: z.ZodType<Prisma.TeamsUpdateOneWithoutHabitsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TeamsCreateWithoutHabitsInputSchema),
          z.lazy(() => TeamsUncheckedCreateWithoutHabitsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TeamsCreateOrConnectWithoutHabitsInputSchema)
        .optional(),
      upsert: z.lazy(() => TeamsUpsertWithoutHabitsInputSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => TeamsWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => TeamsUpdateWithoutHabitsInputSchema),
          z.lazy(() => TeamsUncheckedUpdateWithoutHabitsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Habits_completersUpdateManyWithoutHabitsNestedInputSchema: z.ZodType<Prisma.Habits_completersUpdateManyWithoutHabitsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Habits_completersCreateWithoutHabitsInputSchema),
          z.lazy(() => Habits_completersCreateWithoutHabitsInputSchema).array(),
          z.lazy(
            () => Habits_completersUncheckedCreateWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habits_completersUncheckedCreateWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => Habits_completersCreateOrConnectWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habits_completersCreateOrConnectWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => Habits_completersUpsertWithWhereUniqueWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () =>
                Habits_completersUpsertWithWhereUniqueWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Habits_completersCreateManyHabitsInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => Habits_completersWhereUniqueInputSchema),
          z.lazy(() => Habits_completersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => Habits_completersWhereUniqueInputSchema),
          z.lazy(() => Habits_completersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => Habits_completersWhereUniqueInputSchema),
          z.lazy(() => Habits_completersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => Habits_completersWhereUniqueInputSchema),
          z.lazy(() => Habits_completersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => Habits_completersUpdateWithWhereUniqueWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () =>
                Habits_completersUpdateWithWhereUniqueWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => Habits_completersUpdateManyWithWhereWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habits_completersUpdateManyWithWhereWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => Habits_completersScalarWhereInputSchema),
          z.lazy(() => Habits_completersScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const Habit_completionsUncheckedUpdateManyWithoutHabitsNestedInputSchema: z.ZodType<Prisma.Habit_completionsUncheckedUpdateManyWithoutHabitsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Habit_completionsCreateWithoutHabitsInputSchema),
          z.lazy(() => Habit_completionsCreateWithoutHabitsInputSchema).array(),
          z.lazy(
            () => Habit_completionsUncheckedCreateWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habit_completionsUncheckedCreateWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => Habit_completionsCreateOrConnectWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habit_completionsCreateOrConnectWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => Habit_completionsUpsertWithWhereUniqueWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () =>
                Habit_completionsUpsertWithWhereUniqueWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Habit_completionsCreateManyHabitsInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => Habit_completionsWhereUniqueInputSchema),
          z.lazy(() => Habit_completionsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => Habit_completionsWhereUniqueInputSchema),
          z.lazy(() => Habit_completionsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => Habit_completionsWhereUniqueInputSchema),
          z.lazy(() => Habit_completionsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => Habit_completionsWhereUniqueInputSchema),
          z.lazy(() => Habit_completionsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => Habit_completionsUpdateWithWhereUniqueWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () =>
                Habit_completionsUpdateWithWhereUniqueWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => Habit_completionsUpdateManyWithWhereWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habit_completionsUpdateManyWithWhereWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => Habit_completionsScalarWhereInputSchema),
          z.lazy(() => Habit_completionsScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const Habits_completersUncheckedUpdateManyWithoutHabitsNestedInputSchema: z.ZodType<Prisma.Habits_completersUncheckedUpdateManyWithoutHabitsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Habits_completersCreateWithoutHabitsInputSchema),
          z.lazy(() => Habits_completersCreateWithoutHabitsInputSchema).array(),
          z.lazy(
            () => Habits_completersUncheckedCreateWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habits_completersUncheckedCreateWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => Habits_completersCreateOrConnectWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habits_completersCreateOrConnectWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => Habits_completersUpsertWithWhereUniqueWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () =>
                Habits_completersUpsertWithWhereUniqueWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Habits_completersCreateManyHabitsInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => Habits_completersWhereUniqueInputSchema),
          z.lazy(() => Habits_completersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => Habits_completersWhereUniqueInputSchema),
          z.lazy(() => Habits_completersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => Habits_completersWhereUniqueInputSchema),
          z.lazy(() => Habits_completersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => Habits_completersWhereUniqueInputSchema),
          z.lazy(() => Habits_completersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => Habits_completersUpdateWithWhereUniqueWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () =>
                Habits_completersUpdateWithWhereUniqueWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => Habits_completersUpdateManyWithWhereWithoutHabitsInputSchema
          ),
          z
            .lazy(
              () => Habits_completersUpdateManyWithWhereWithoutHabitsInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => Habits_completersScalarWhereInputSchema),
          z.lazy(() => Habits_completersScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const HabitsCreateNestedOneWithoutHabits_completersInputSchema: z.ZodType<Prisma.HabitsCreateNestedOneWithoutHabits_completersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HabitsCreateWithoutHabits_completersInputSchema),
          z.lazy(
            () => HabitsUncheckedCreateWithoutHabits_completersInputSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => HabitsCreateOrConnectWithoutHabits_completersInputSchema)
        .optional(),
      connect: z.lazy(() => HabitsWhereUniqueInputSchema).optional(),
    })
    .strict();

export const HabitsUpdateOneRequiredWithoutHabits_completersNestedInputSchema: z.ZodType<Prisma.HabitsUpdateOneRequiredWithoutHabits_completersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HabitsCreateWithoutHabits_completersInputSchema),
          z.lazy(
            () => HabitsUncheckedCreateWithoutHabits_completersInputSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => HabitsCreateOrConnectWithoutHabits_completersInputSchema)
        .optional(),
      upsert: z
        .lazy(() => HabitsUpsertWithoutHabits_completersInputSchema)
        .optional(),
      connect: z.lazy(() => HabitsWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => HabitsUpdateWithoutHabits_completersInputSchema),
          z.lazy(
            () => HabitsUncheckedUpdateWithoutHabits_completersInputSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const HabitsCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.HabitsCreateNestedManyWithoutTeamsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HabitsCreateWithoutTeamsInputSchema),
          z.lazy(() => HabitsCreateWithoutTeamsInputSchema).array(),
          z.lazy(() => HabitsUncheckedCreateWithoutTeamsInputSchema),
          z.lazy(() => HabitsUncheckedCreateWithoutTeamsInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => HabitsCreateOrConnectWithoutTeamsInputSchema),
          z.lazy(() => HabitsCreateOrConnectWithoutTeamsInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => HabitsCreateManyTeamsInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => HabitsWhereUniqueInputSchema),
          z.lazy(() => HabitsWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.Teams_usersCreateNestedManyWithoutTeamsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Teams_usersCreateWithoutTeamsInputSchema),
          z.lazy(() => Teams_usersCreateWithoutTeamsInputSchema).array(),
          z.lazy(() => Teams_usersUncheckedCreateWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersUncheckedCreateWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => Teams_usersCreateOrConnectWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersCreateOrConnectWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Teams_usersCreateManyTeamsInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => Teams_usersWhereUniqueInputSchema),
          z.lazy(() => Teams_usersWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const HabitsUncheckedCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.HabitsUncheckedCreateNestedManyWithoutTeamsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HabitsCreateWithoutTeamsInputSchema),
          z.lazy(() => HabitsCreateWithoutTeamsInputSchema).array(),
          z.lazy(() => HabitsUncheckedCreateWithoutTeamsInputSchema),
          z.lazy(() => HabitsUncheckedCreateWithoutTeamsInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => HabitsCreateOrConnectWithoutTeamsInputSchema),
          z.lazy(() => HabitsCreateOrConnectWithoutTeamsInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => HabitsCreateManyTeamsInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => HabitsWhereUniqueInputSchema),
          z.lazy(() => HabitsWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersUncheckedCreateNestedManyWithoutTeamsInputSchema: z.ZodType<Prisma.Teams_usersUncheckedCreateNestedManyWithoutTeamsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Teams_usersCreateWithoutTeamsInputSchema),
          z.lazy(() => Teams_usersCreateWithoutTeamsInputSchema).array(),
          z.lazy(() => Teams_usersUncheckedCreateWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersUncheckedCreateWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => Teams_usersCreateOrConnectWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersCreateOrConnectWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Teams_usersCreateManyTeamsInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => Teams_usersWhereUniqueInputSchema),
          z.lazy(() => Teams_usersWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const HabitsUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.HabitsUpdateManyWithoutTeamsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HabitsCreateWithoutTeamsInputSchema),
          z.lazy(() => HabitsCreateWithoutTeamsInputSchema).array(),
          z.lazy(() => HabitsUncheckedCreateWithoutTeamsInputSchema),
          z.lazy(() => HabitsUncheckedCreateWithoutTeamsInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => HabitsCreateOrConnectWithoutTeamsInputSchema),
          z.lazy(() => HabitsCreateOrConnectWithoutTeamsInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => HabitsUpsertWithWhereUniqueWithoutTeamsInputSchema),
          z
            .lazy(() => HabitsUpsertWithWhereUniqueWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => HabitsCreateManyTeamsInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => HabitsWhereUniqueInputSchema),
          z.lazy(() => HabitsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => HabitsWhereUniqueInputSchema),
          z.lazy(() => HabitsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => HabitsWhereUniqueInputSchema),
          z.lazy(() => HabitsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => HabitsWhereUniqueInputSchema),
          z.lazy(() => HabitsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => HabitsUpdateWithWhereUniqueWithoutTeamsInputSchema),
          z
            .lazy(() => HabitsUpdateWithWhereUniqueWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => HabitsUpdateManyWithWhereWithoutTeamsInputSchema),
          z
            .lazy(() => HabitsUpdateManyWithWhereWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => HabitsScalarWhereInputSchema),
          z.lazy(() => HabitsScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.Teams_usersUpdateManyWithoutTeamsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Teams_usersCreateWithoutTeamsInputSchema),
          z.lazy(() => Teams_usersCreateWithoutTeamsInputSchema).array(),
          z.lazy(() => Teams_usersUncheckedCreateWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersUncheckedCreateWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => Teams_usersCreateOrConnectWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersCreateOrConnectWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => Teams_usersUpsertWithWhereUniqueWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersUpsertWithWhereUniqueWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Teams_usersCreateManyTeamsInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => Teams_usersWhereUniqueInputSchema),
          z.lazy(() => Teams_usersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => Teams_usersWhereUniqueInputSchema),
          z.lazy(() => Teams_usersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => Teams_usersWhereUniqueInputSchema),
          z.lazy(() => Teams_usersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => Teams_usersWhereUniqueInputSchema),
          z.lazy(() => Teams_usersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => Teams_usersUpdateWithWhereUniqueWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersUpdateWithWhereUniqueWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => Teams_usersUpdateManyWithWhereWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersUpdateManyWithWhereWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => Teams_usersScalarWhereInputSchema),
          z.lazy(() => Teams_usersScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const HabitsUncheckedUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.HabitsUncheckedUpdateManyWithoutTeamsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HabitsCreateWithoutTeamsInputSchema),
          z.lazy(() => HabitsCreateWithoutTeamsInputSchema).array(),
          z.lazy(() => HabitsUncheckedCreateWithoutTeamsInputSchema),
          z.lazy(() => HabitsUncheckedCreateWithoutTeamsInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => HabitsCreateOrConnectWithoutTeamsInputSchema),
          z.lazy(() => HabitsCreateOrConnectWithoutTeamsInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => HabitsUpsertWithWhereUniqueWithoutTeamsInputSchema),
          z
            .lazy(() => HabitsUpsertWithWhereUniqueWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => HabitsCreateManyTeamsInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => HabitsWhereUniqueInputSchema),
          z.lazy(() => HabitsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => HabitsWhereUniqueInputSchema),
          z.lazy(() => HabitsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => HabitsWhereUniqueInputSchema),
          z.lazy(() => HabitsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => HabitsWhereUniqueInputSchema),
          z.lazy(() => HabitsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => HabitsUpdateWithWhereUniqueWithoutTeamsInputSchema),
          z
            .lazy(() => HabitsUpdateWithWhereUniqueWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => HabitsUpdateManyWithWhereWithoutTeamsInputSchema),
          z
            .lazy(() => HabitsUpdateManyWithWhereWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => HabitsScalarWhereInputSchema),
          z.lazy(() => HabitsScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersUncheckedUpdateManyWithoutTeamsNestedInputSchema: z.ZodType<Prisma.Teams_usersUncheckedUpdateManyWithoutTeamsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => Teams_usersCreateWithoutTeamsInputSchema),
          z.lazy(() => Teams_usersCreateWithoutTeamsInputSchema).array(),
          z.lazy(() => Teams_usersUncheckedCreateWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersUncheckedCreateWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => Teams_usersCreateOrConnectWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersCreateOrConnectWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => Teams_usersUpsertWithWhereUniqueWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersUpsertWithWhereUniqueWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => Teams_usersCreateManyTeamsInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => Teams_usersWhereUniqueInputSchema),
          z.lazy(() => Teams_usersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => Teams_usersWhereUniqueInputSchema),
          z.lazy(() => Teams_usersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => Teams_usersWhereUniqueInputSchema),
          z.lazy(() => Teams_usersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => Teams_usersWhereUniqueInputSchema),
          z.lazy(() => Teams_usersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => Teams_usersUpdateWithWhereUniqueWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersUpdateWithWhereUniqueWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => Teams_usersUpdateManyWithWhereWithoutTeamsInputSchema),
          z
            .lazy(() => Teams_usersUpdateManyWithWhereWithoutTeamsInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => Teams_usersScalarWhereInputSchema),
          z.lazy(() => Teams_usersScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TeamsCreateNestedOneWithoutTeams_usersInputSchema: z.ZodType<Prisma.TeamsCreateNestedOneWithoutTeams_usersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TeamsCreateWithoutTeams_usersInputSchema),
          z.lazy(() => TeamsUncheckedCreateWithoutTeams_usersInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TeamsCreateOrConnectWithoutTeams_usersInputSchema)
        .optional(),
      connect: z.lazy(() => TeamsWhereUniqueInputSchema).optional(),
    })
    .strict();

export const Enumteam_roleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.Enumteam_roleFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => team_roleSchema).optional(),
    })
    .strict();

export const TeamsUpdateOneRequiredWithoutTeams_usersNestedInputSchema: z.ZodType<Prisma.TeamsUpdateOneRequiredWithoutTeams_usersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TeamsCreateWithoutTeams_usersInputSchema),
          z.lazy(() => TeamsUncheckedCreateWithoutTeams_usersInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TeamsCreateOrConnectWithoutTeams_usersInputSchema)
        .optional(),
      upsert: z.lazy(() => TeamsUpsertWithoutTeams_usersInputSchema).optional(),
      connect: z.lazy(() => TeamsWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => TeamsUpdateWithoutTeams_usersInputSchema),
          z.lazy(() => TeamsUncheckedUpdateWithoutTeams_usersInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidFilterSchema)]).optional(),
  })
  .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
        .optional(),
    })
    .strict();

export const NestedUuidNullableFilterSchema: z.ZodType<Prisma.NestedUuidNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedUuidNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedUuidWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const NestedUuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    })
    .strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedEnumhabit_typeFilterSchema: z.ZodType<Prisma.NestedEnumhabit_typeFilter> =
  z
    .object({
      equals: z.lazy(() => habit_typeSchema).optional(),
      in: z
        .lazy(() => habit_typeSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => habit_typeSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => NestedEnumhabit_typeFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedEnumperiodFilterSchema: z.ZodType<Prisma.NestedEnumperiodFilter> =
  z
    .object({
      equals: z.lazy(() => periodSchema).optional(),
      in: z
        .lazy(() => periodSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => periodSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => NestedEnumperiodFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedEnumhabit_typeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumhabit_typeWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => habit_typeSchema).optional(),
      in: z
        .lazy(() => habit_typeSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => habit_typeSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => NestedEnumhabit_typeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumhabit_typeFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumhabit_typeFilterSchema).optional(),
    })
    .strict();

export const NestedEnumperiodWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumperiodWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => periodSchema).optional(),
      in: z
        .lazy(() => periodSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => periodSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => NestedEnumperiodWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumperiodFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumperiodFilterSchema).optional(),
    })
    .strict();

export const NestedEnumteam_roleFilterSchema: z.ZodType<Prisma.NestedEnumteam_roleFilter> =
  z
    .object({
      equals: z.lazy(() => team_roleSchema).optional(),
      in: z
        .lazy(() => team_roleSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => team_roleSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => NestedEnumteam_roleFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedEnumteam_roleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumteam_roleWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => team_roleSchema).optional(),
      in: z
        .lazy(() => team_roleSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => team_roleSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => NestedEnumteam_roleWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumteam_roleFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumteam_roleFilterSchema).optional(),
    })
    .strict();

export const HabitsCreateWithoutHabit_completionsInputSchema: z.ZodType<Prisma.HabitsCreateWithoutHabit_completionsInput> =
  z
    .object({
      id: z.string(),
      amount: z.number(),
      time: z.coerce.date(),
      monday: z.boolean(),
      tuesday: z.boolean(),
      wednesday: z.boolean(),
      thursday: z.boolean(),
      friday: z.boolean(),
      saturday: z.boolean(),
      sunday: z.boolean(),
      name: z.string(),
      icon: z.string(),
      color: z.string(),
      habit_type: z.lazy(() => habit_typeSchema),
      period: z.lazy(() => periodSchema),
      user_id: z.string().optional().nullable(),
      electric_user_id: z.string().optional().nullable(),
      teams: z
        .lazy(() => TeamsCreateNestedOneWithoutHabitsInputSchema)
        .optional(),
      habits_completers: z
        .lazy(() => Habits_completersCreateNestedManyWithoutHabitsInputSchema)
        .optional(),
    })
    .strict();

export const HabitsUncheckedCreateWithoutHabit_completionsInputSchema: z.ZodType<Prisma.HabitsUncheckedCreateWithoutHabit_completionsInput> =
  z
    .object({
      id: z.string(),
      amount: z.number(),
      time: z.coerce.date(),
      monday: z.boolean(),
      tuesday: z.boolean(),
      wednesday: z.boolean(),
      thursday: z.boolean(),
      friday: z.boolean(),
      saturday: z.boolean(),
      sunday: z.boolean(),
      name: z.string(),
      icon: z.string(),
      color: z.string(),
      habit_type: z.lazy(() => habit_typeSchema),
      period: z.lazy(() => periodSchema),
      team_id: z.string().optional().nullable(),
      user_id: z.string().optional().nullable(),
      electric_user_id: z.string().optional().nullable(),
      habits_completers: z
        .lazy(
          () =>
            Habits_completersUncheckedCreateNestedManyWithoutHabitsInputSchema
        )
        .optional(),
    })
    .strict();

export const HabitsCreateOrConnectWithoutHabit_completionsInputSchema: z.ZodType<Prisma.HabitsCreateOrConnectWithoutHabit_completionsInput> =
  z
    .object({
      where: z.lazy(() => HabitsWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => HabitsCreateWithoutHabit_completionsInputSchema),
        z.lazy(() => HabitsUncheckedCreateWithoutHabit_completionsInputSchema),
      ]),
    })
    .strict();

export const HabitsUpsertWithoutHabit_completionsInputSchema: z.ZodType<Prisma.HabitsUpsertWithoutHabit_completionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => HabitsUpdateWithoutHabit_completionsInputSchema),
        z.lazy(() => HabitsUncheckedUpdateWithoutHabit_completionsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => HabitsCreateWithoutHabit_completionsInputSchema),
        z.lazy(() => HabitsUncheckedCreateWithoutHabit_completionsInputSchema),
      ]),
    })
    .strict();

export const HabitsUpdateWithoutHabit_completionsInputSchema: z.ZodType<Prisma.HabitsUpdateWithoutHabit_completionsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      amount: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      time: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      monday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      tuesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      wednesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      thursday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      friday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      saturday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sunday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      color: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      teams: z
        .lazy(() => TeamsUpdateOneWithoutHabitsNestedInputSchema)
        .optional(),
      habits_completers: z
        .lazy(() => Habits_completersUpdateManyWithoutHabitsNestedInputSchema)
        .optional(),
    })
    .strict();

export const HabitsUncheckedUpdateWithoutHabit_completionsInputSchema: z.ZodType<Prisma.HabitsUncheckedUpdateWithoutHabit_completionsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      amount: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      time: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      monday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      tuesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      wednesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      thursday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      friday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      saturday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sunday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      color: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      team_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      habits_completers: z
        .lazy(
          () =>
            Habits_completersUncheckedUpdateManyWithoutHabitsNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const Habit_completionsCreateWithoutHabitsInputSchema: z.ZodType<Prisma.Habit_completionsCreateWithoutHabitsInput> =
  z
    .object({
      id: z.string(),
      user_id: z.string(),
      date: z.coerce.date(),
      electric_user_id: z.string().optional().nullable(),
    })
    .strict();

export const Habit_completionsUncheckedCreateWithoutHabitsInputSchema: z.ZodType<Prisma.Habit_completionsUncheckedCreateWithoutHabitsInput> =
  z
    .object({
      id: z.string(),
      user_id: z.string(),
      date: z.coerce.date(),
      electric_user_id: z.string().optional().nullable(),
    })
    .strict();

export const Habit_completionsCreateOrConnectWithoutHabitsInputSchema: z.ZodType<Prisma.Habit_completionsCreateOrConnectWithoutHabitsInput> =
  z
    .object({
      where: z.lazy(() => Habit_completionsWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => Habit_completionsCreateWithoutHabitsInputSchema),
        z.lazy(() => Habit_completionsUncheckedCreateWithoutHabitsInputSchema),
      ]),
    })
    .strict();

export const Habit_completionsCreateManyHabitsInputEnvelopeSchema: z.ZodType<Prisma.Habit_completionsCreateManyHabitsInputEnvelope> =
  z
    .object({
      data: z.lazy(() => Habit_completionsCreateManyHabitsInputSchema).array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const TeamsCreateWithoutHabitsInputSchema: z.ZodType<Prisma.TeamsCreateWithoutHabitsInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      user_id: z.string(),
      link_pswd: z.string(),
      link_exp: z.coerce.date(),
      teams_users: z
        .lazy(() => Teams_usersCreateNestedManyWithoutTeamsInputSchema)
        .optional(),
    })
    .strict();

export const TeamsUncheckedCreateWithoutHabitsInputSchema: z.ZodType<Prisma.TeamsUncheckedCreateWithoutHabitsInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      user_id: z.string(),
      link_pswd: z.string(),
      link_exp: z.coerce.date(),
      teams_users: z
        .lazy(() => Teams_usersUncheckedCreateNestedManyWithoutTeamsInputSchema)
        .optional(),
    })
    .strict();

export const TeamsCreateOrConnectWithoutHabitsInputSchema: z.ZodType<Prisma.TeamsCreateOrConnectWithoutHabitsInput> =
  z
    .object({
      where: z.lazy(() => TeamsWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TeamsCreateWithoutHabitsInputSchema),
        z.lazy(() => TeamsUncheckedCreateWithoutHabitsInputSchema),
      ]),
    })
    .strict();

export const Habits_completersCreateWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completersCreateWithoutHabitsInput> =
  z
    .object({
      id: z.string(),
      user_id: z.string(),
    })
    .strict();

export const Habits_completersUncheckedCreateWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completersUncheckedCreateWithoutHabitsInput> =
  z
    .object({
      id: z.string(),
      user_id: z.string(),
    })
    .strict();

export const Habits_completersCreateOrConnectWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completersCreateOrConnectWithoutHabitsInput> =
  z
    .object({
      where: z.lazy(() => Habits_completersWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => Habits_completersCreateWithoutHabitsInputSchema),
        z.lazy(() => Habits_completersUncheckedCreateWithoutHabitsInputSchema),
      ]),
    })
    .strict();

export const Habits_completersCreateManyHabitsInputEnvelopeSchema: z.ZodType<Prisma.Habits_completersCreateManyHabitsInputEnvelope> =
  z
    .object({
      data: z.lazy(() => Habits_completersCreateManyHabitsInputSchema).array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const Habit_completionsUpsertWithWhereUniqueWithoutHabitsInputSchema: z.ZodType<Prisma.Habit_completionsUpsertWithWhereUniqueWithoutHabitsInput> =
  z
    .object({
      where: z.lazy(() => Habit_completionsWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => Habit_completionsUpdateWithoutHabitsInputSchema),
        z.lazy(() => Habit_completionsUncheckedUpdateWithoutHabitsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => Habit_completionsCreateWithoutHabitsInputSchema),
        z.lazy(() => Habit_completionsUncheckedCreateWithoutHabitsInputSchema),
      ]),
    })
    .strict();

export const Habit_completionsUpdateWithWhereUniqueWithoutHabitsInputSchema: z.ZodType<Prisma.Habit_completionsUpdateWithWhereUniqueWithoutHabitsInput> =
  z
    .object({
      where: z.lazy(() => Habit_completionsWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => Habit_completionsUpdateWithoutHabitsInputSchema),
        z.lazy(() => Habit_completionsUncheckedUpdateWithoutHabitsInputSchema),
      ]),
    })
    .strict();

export const Habit_completionsUpdateManyWithWhereWithoutHabitsInputSchema: z.ZodType<Prisma.Habit_completionsUpdateManyWithWhereWithoutHabitsInput> =
  z
    .object({
      where: z.lazy(() => Habit_completionsScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => Habit_completionsUpdateManyMutationInputSchema),
        z.lazy(
          () =>
            Habit_completionsUncheckedUpdateManyWithoutHabit_completionsInputSchema
        ),
      ]),
    })
    .strict();

export const Habit_completionsScalarWhereInputSchema: z.ZodType<Prisma.Habit_completionsScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => Habit_completionsScalarWhereInputSchema),
          z.lazy(() => Habit_completionsScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => Habit_completionsScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => Habit_completionsScalarWhereInputSchema),
          z.lazy(() => Habit_completionsScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      habit_id: z
        .union([z.lazy(() => UuidFilterSchema), z.string()])
        .optional(),
      date: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      electric_user_id: z
        .union([z.lazy(() => UuidNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
    })
    .strict();

export const TeamsUpsertWithoutHabitsInputSchema: z.ZodType<Prisma.TeamsUpsertWithoutHabitsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => TeamsUpdateWithoutHabitsInputSchema),
        z.lazy(() => TeamsUncheckedUpdateWithoutHabitsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => TeamsCreateWithoutHabitsInputSchema),
        z.lazy(() => TeamsUncheckedCreateWithoutHabitsInputSchema),
      ]),
    })
    .strict();

export const TeamsUpdateWithoutHabitsInputSchema: z.ZodType<Prisma.TeamsUpdateWithoutHabitsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_pswd: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_exp: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      teams_users: z
        .lazy(() => Teams_usersUpdateManyWithoutTeamsNestedInputSchema)
        .optional(),
    })
    .strict();

export const TeamsUncheckedUpdateWithoutHabitsInputSchema: z.ZodType<Prisma.TeamsUncheckedUpdateWithoutHabitsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_pswd: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_exp: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      teams_users: z
        .lazy(() => Teams_usersUncheckedUpdateManyWithoutTeamsNestedInputSchema)
        .optional(),
    })
    .strict();

export const Habits_completersUpsertWithWhereUniqueWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completersUpsertWithWhereUniqueWithoutHabitsInput> =
  z
    .object({
      where: z.lazy(() => Habits_completersWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => Habits_completersUpdateWithoutHabitsInputSchema),
        z.lazy(() => Habits_completersUncheckedUpdateWithoutHabitsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => Habits_completersCreateWithoutHabitsInputSchema),
        z.lazy(() => Habits_completersUncheckedCreateWithoutHabitsInputSchema),
      ]),
    })
    .strict();

export const Habits_completersUpdateWithWhereUniqueWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completersUpdateWithWhereUniqueWithoutHabitsInput> =
  z
    .object({
      where: z.lazy(() => Habits_completersWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => Habits_completersUpdateWithoutHabitsInputSchema),
        z.lazy(() => Habits_completersUncheckedUpdateWithoutHabitsInputSchema),
      ]),
    })
    .strict();

export const Habits_completersUpdateManyWithWhereWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completersUpdateManyWithWhereWithoutHabitsInput> =
  z
    .object({
      where: z.lazy(() => Habits_completersScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => Habits_completersUpdateManyMutationInputSchema),
        z.lazy(
          () =>
            Habits_completersUncheckedUpdateManyWithoutHabits_completersInputSchema
        ),
      ]),
    })
    .strict();

export const Habits_completersScalarWhereInputSchema: z.ZodType<Prisma.Habits_completersScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => Habits_completersScalarWhereInputSchema),
          z.lazy(() => Habits_completersScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => Habits_completersScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => Habits_completersScalarWhereInputSchema),
          z.lazy(() => Habits_completersScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      habit_id: z
        .union([z.lazy(() => UuidFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const HabitsCreateWithoutHabits_completersInputSchema: z.ZodType<Prisma.HabitsCreateWithoutHabits_completersInput> =
  z
    .object({
      id: z.string(),
      amount: z.number(),
      time: z.coerce.date(),
      monday: z.boolean(),
      tuesday: z.boolean(),
      wednesday: z.boolean(),
      thursday: z.boolean(),
      friday: z.boolean(),
      saturday: z.boolean(),
      sunday: z.boolean(),
      name: z.string(),
      icon: z.string(),
      color: z.string(),
      habit_type: z.lazy(() => habit_typeSchema),
      period: z.lazy(() => periodSchema),
      user_id: z.string().optional().nullable(),
      electric_user_id: z.string().optional().nullable(),
      habit_completions: z
        .lazy(() => Habit_completionsCreateNestedManyWithoutHabitsInputSchema)
        .optional(),
      teams: z
        .lazy(() => TeamsCreateNestedOneWithoutHabitsInputSchema)
        .optional(),
    })
    .strict();

export const HabitsUncheckedCreateWithoutHabits_completersInputSchema: z.ZodType<Prisma.HabitsUncheckedCreateWithoutHabits_completersInput> =
  z
    .object({
      id: z.string(),
      amount: z.number(),
      time: z.coerce.date(),
      monday: z.boolean(),
      tuesday: z.boolean(),
      wednesday: z.boolean(),
      thursday: z.boolean(),
      friday: z.boolean(),
      saturday: z.boolean(),
      sunday: z.boolean(),
      name: z.string(),
      icon: z.string(),
      color: z.string(),
      habit_type: z.lazy(() => habit_typeSchema),
      period: z.lazy(() => periodSchema),
      team_id: z.string().optional().nullable(),
      user_id: z.string().optional().nullable(),
      electric_user_id: z.string().optional().nullable(),
      habit_completions: z
        .lazy(
          () =>
            Habit_completionsUncheckedCreateNestedManyWithoutHabitsInputSchema
        )
        .optional(),
    })
    .strict();

export const HabitsCreateOrConnectWithoutHabits_completersInputSchema: z.ZodType<Prisma.HabitsCreateOrConnectWithoutHabits_completersInput> =
  z
    .object({
      where: z.lazy(() => HabitsWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => HabitsCreateWithoutHabits_completersInputSchema),
        z.lazy(() => HabitsUncheckedCreateWithoutHabits_completersInputSchema),
      ]),
    })
    .strict();

export const HabitsUpsertWithoutHabits_completersInputSchema: z.ZodType<Prisma.HabitsUpsertWithoutHabits_completersInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => HabitsUpdateWithoutHabits_completersInputSchema),
        z.lazy(() => HabitsUncheckedUpdateWithoutHabits_completersInputSchema),
      ]),
      create: z.union([
        z.lazy(() => HabitsCreateWithoutHabits_completersInputSchema),
        z.lazy(() => HabitsUncheckedCreateWithoutHabits_completersInputSchema),
      ]),
    })
    .strict();

export const HabitsUpdateWithoutHabits_completersInputSchema: z.ZodType<Prisma.HabitsUpdateWithoutHabits_completersInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      amount: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      time: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      monday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      tuesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      wednesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      thursday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      friday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      saturday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sunday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      color: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      habit_completions: z
        .lazy(() => Habit_completionsUpdateManyWithoutHabitsNestedInputSchema)
        .optional(),
      teams: z
        .lazy(() => TeamsUpdateOneWithoutHabitsNestedInputSchema)
        .optional(),
    })
    .strict();

export const HabitsUncheckedUpdateWithoutHabits_completersInputSchema: z.ZodType<Prisma.HabitsUncheckedUpdateWithoutHabits_completersInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      amount: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      time: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      monday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      tuesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      wednesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      thursday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      friday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      saturday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sunday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      color: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      team_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      habit_completions: z
        .lazy(
          () =>
            Habit_completionsUncheckedUpdateManyWithoutHabitsNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const HabitsCreateWithoutTeamsInputSchema: z.ZodType<Prisma.HabitsCreateWithoutTeamsInput> =
  z
    .object({
      id: z.string(),
      amount: z.number(),
      time: z.coerce.date(),
      monday: z.boolean(),
      tuesday: z.boolean(),
      wednesday: z.boolean(),
      thursday: z.boolean(),
      friday: z.boolean(),
      saturday: z.boolean(),
      sunday: z.boolean(),
      name: z.string(),
      icon: z.string(),
      color: z.string(),
      habit_type: z.lazy(() => habit_typeSchema),
      period: z.lazy(() => periodSchema),
      user_id: z.string().optional().nullable(),
      electric_user_id: z.string().optional().nullable(),
      habit_completions: z
        .lazy(() => Habit_completionsCreateNestedManyWithoutHabitsInputSchema)
        .optional(),
      habits_completers: z
        .lazy(() => Habits_completersCreateNestedManyWithoutHabitsInputSchema)
        .optional(),
    })
    .strict();

export const HabitsUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.HabitsUncheckedCreateWithoutTeamsInput> =
  z
    .object({
      id: z.string(),
      amount: z.number(),
      time: z.coerce.date(),
      monday: z.boolean(),
      tuesday: z.boolean(),
      wednesday: z.boolean(),
      thursday: z.boolean(),
      friday: z.boolean(),
      saturday: z.boolean(),
      sunday: z.boolean(),
      name: z.string(),
      icon: z.string(),
      color: z.string(),
      habit_type: z.lazy(() => habit_typeSchema),
      period: z.lazy(() => periodSchema),
      user_id: z.string().optional().nullable(),
      electric_user_id: z.string().optional().nullable(),
      habit_completions: z
        .lazy(
          () =>
            Habit_completionsUncheckedCreateNestedManyWithoutHabitsInputSchema
        )
        .optional(),
      habits_completers: z
        .lazy(
          () =>
            Habits_completersUncheckedCreateNestedManyWithoutHabitsInputSchema
        )
        .optional(),
    })
    .strict();

export const HabitsCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.HabitsCreateOrConnectWithoutTeamsInput> =
  z
    .object({
      where: z.lazy(() => HabitsWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => HabitsCreateWithoutTeamsInputSchema),
        z.lazy(() => HabitsUncheckedCreateWithoutTeamsInputSchema),
      ]),
    })
    .strict();

export const HabitsCreateManyTeamsInputEnvelopeSchema: z.ZodType<Prisma.HabitsCreateManyTeamsInputEnvelope> =
  z
    .object({
      data: z.lazy(() => HabitsCreateManyTeamsInputSchema).array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const Teams_usersCreateWithoutTeamsInputSchema: z.ZodType<Prisma.Teams_usersCreateWithoutTeamsInput> =
  z
    .object({
      id: z.string(),
      user_id: z.string(),
      role: z.lazy(() => team_roleSchema),
    })
    .strict();

export const Teams_usersUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.Teams_usersUncheckedCreateWithoutTeamsInput> =
  z
    .object({
      id: z.string(),
      user_id: z.string(),
      role: z.lazy(() => team_roleSchema),
    })
    .strict();

export const Teams_usersCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.Teams_usersCreateOrConnectWithoutTeamsInput> =
  z
    .object({
      where: z.lazy(() => Teams_usersWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => Teams_usersCreateWithoutTeamsInputSchema),
        z.lazy(() => Teams_usersUncheckedCreateWithoutTeamsInputSchema),
      ]),
    })
    .strict();

export const Teams_usersCreateManyTeamsInputEnvelopeSchema: z.ZodType<Prisma.Teams_usersCreateManyTeamsInputEnvelope> =
  z
    .object({
      data: z.lazy(() => Teams_usersCreateManyTeamsInputSchema).array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const HabitsUpsertWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.HabitsUpsertWithWhereUniqueWithoutTeamsInput> =
  z
    .object({
      where: z.lazy(() => HabitsWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => HabitsUpdateWithoutTeamsInputSchema),
        z.lazy(() => HabitsUncheckedUpdateWithoutTeamsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => HabitsCreateWithoutTeamsInputSchema),
        z.lazy(() => HabitsUncheckedCreateWithoutTeamsInputSchema),
      ]),
    })
    .strict();

export const HabitsUpdateWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.HabitsUpdateWithWhereUniqueWithoutTeamsInput> =
  z
    .object({
      where: z.lazy(() => HabitsWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => HabitsUpdateWithoutTeamsInputSchema),
        z.lazy(() => HabitsUncheckedUpdateWithoutTeamsInputSchema),
      ]),
    })
    .strict();

export const HabitsUpdateManyWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.HabitsUpdateManyWithWhereWithoutTeamsInput> =
  z
    .object({
      where: z.lazy(() => HabitsScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => HabitsUpdateManyMutationInputSchema),
        z.lazy(() => HabitsUncheckedUpdateManyWithoutHabitsInputSchema),
      ]),
    })
    .strict();

export const HabitsScalarWhereInputSchema: z.ZodType<Prisma.HabitsScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => HabitsScalarWhereInputSchema),
          z.lazy(() => HabitsScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => HabitsScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => HabitsScalarWhereInputSchema),
          z.lazy(() => HabitsScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      amount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      time: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      monday: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
      tuesday: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      wednesday: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      thursday: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      friday: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
      saturday: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      sunday: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      icon: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      color: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      habit_type: z
        .union([
          z.lazy(() => Enumhabit_typeFilterSchema),
          z.lazy(() => habit_typeSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => EnumperiodFilterSchema),
          z.lazy(() => periodSchema),
        ])
        .optional(),
      team_id: z
        .union([z.lazy(() => UuidNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      user_id: z
        .union([z.lazy(() => UuidNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([z.lazy(() => UuidNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
    })
    .strict();

export const Teams_usersUpsertWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.Teams_usersUpsertWithWhereUniqueWithoutTeamsInput> =
  z
    .object({
      where: z.lazy(() => Teams_usersWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => Teams_usersUpdateWithoutTeamsInputSchema),
        z.lazy(() => Teams_usersUncheckedUpdateWithoutTeamsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => Teams_usersCreateWithoutTeamsInputSchema),
        z.lazy(() => Teams_usersUncheckedCreateWithoutTeamsInputSchema),
      ]),
    })
    .strict();

export const Teams_usersUpdateWithWhereUniqueWithoutTeamsInputSchema: z.ZodType<Prisma.Teams_usersUpdateWithWhereUniqueWithoutTeamsInput> =
  z
    .object({
      where: z.lazy(() => Teams_usersWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => Teams_usersUpdateWithoutTeamsInputSchema),
        z.lazy(() => Teams_usersUncheckedUpdateWithoutTeamsInputSchema),
      ]),
    })
    .strict();

export const Teams_usersUpdateManyWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.Teams_usersUpdateManyWithWhereWithoutTeamsInput> =
  z
    .object({
      where: z.lazy(() => Teams_usersScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => Teams_usersUpdateManyMutationInputSchema),
        z.lazy(
          () => Teams_usersUncheckedUpdateManyWithoutTeams_usersInputSchema
        ),
      ]),
    })
    .strict();

export const Teams_usersScalarWhereInputSchema: z.ZodType<Prisma.Teams_usersScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => Teams_usersScalarWhereInputSchema),
          z.lazy(() => Teams_usersScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => Teams_usersScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => Teams_usersScalarWhereInputSchema),
          z.lazy(() => Teams_usersScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      team_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      role: z
        .union([
          z.lazy(() => Enumteam_roleFilterSchema),
          z.lazy(() => team_roleSchema),
        ])
        .optional(),
    })
    .strict();

export const TeamsCreateWithoutTeams_usersInputSchema: z.ZodType<Prisma.TeamsCreateWithoutTeams_usersInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      user_id: z.string(),
      link_pswd: z.string(),
      link_exp: z.coerce.date(),
      habits: z
        .lazy(() => HabitsCreateNestedManyWithoutTeamsInputSchema)
        .optional(),
    })
    .strict();

export const TeamsUncheckedCreateWithoutTeams_usersInputSchema: z.ZodType<Prisma.TeamsUncheckedCreateWithoutTeams_usersInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      user_id: z.string(),
      link_pswd: z.string(),
      link_exp: z.coerce.date(),
      habits: z
        .lazy(() => HabitsUncheckedCreateNestedManyWithoutTeamsInputSchema)
        .optional(),
    })
    .strict();

export const TeamsCreateOrConnectWithoutTeams_usersInputSchema: z.ZodType<Prisma.TeamsCreateOrConnectWithoutTeams_usersInput> =
  z
    .object({
      where: z.lazy(() => TeamsWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TeamsCreateWithoutTeams_usersInputSchema),
        z.lazy(() => TeamsUncheckedCreateWithoutTeams_usersInputSchema),
      ]),
    })
    .strict();

export const TeamsUpsertWithoutTeams_usersInputSchema: z.ZodType<Prisma.TeamsUpsertWithoutTeams_usersInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => TeamsUpdateWithoutTeams_usersInputSchema),
        z.lazy(() => TeamsUncheckedUpdateWithoutTeams_usersInputSchema),
      ]),
      create: z.union([
        z.lazy(() => TeamsCreateWithoutTeams_usersInputSchema),
        z.lazy(() => TeamsUncheckedCreateWithoutTeams_usersInputSchema),
      ]),
    })
    .strict();

export const TeamsUpdateWithoutTeams_usersInputSchema: z.ZodType<Prisma.TeamsUpdateWithoutTeams_usersInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_pswd: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_exp: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habits: z
        .lazy(() => HabitsUpdateManyWithoutTeamsNestedInputSchema)
        .optional(),
    })
    .strict();

export const TeamsUncheckedUpdateWithoutTeams_usersInputSchema: z.ZodType<Prisma.TeamsUncheckedUpdateWithoutTeams_usersInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_pswd: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      link_exp: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habits: z
        .lazy(() => HabitsUncheckedUpdateManyWithoutTeamsNestedInputSchema)
        .optional(),
    })
    .strict();

export const Habit_completionsCreateManyHabitsInputSchema: z.ZodType<Prisma.Habit_completionsCreateManyHabitsInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      date: z.coerce.date(),
      electric_user_id: z.string().uuid().optional().nullable(),
    })
    .strict();

export const Habits_completersCreateManyHabitsInputSchema: z.ZodType<Prisma.Habits_completersCreateManyHabitsInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
    })
    .strict();

export const Habit_completionsUpdateWithoutHabitsInputSchema: z.ZodType<Prisma.Habit_completionsUpdateWithoutHabitsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      date: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const Habit_completionsUncheckedUpdateWithoutHabitsInputSchema: z.ZodType<Prisma.Habit_completionsUncheckedUpdateWithoutHabitsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      date: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const Habit_completionsUncheckedUpdateManyWithoutHabit_completionsInputSchema: z.ZodType<Prisma.Habit_completionsUncheckedUpdateManyWithoutHabit_completionsInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      date: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const Habits_completersUpdateWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completersUpdateWithoutHabitsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Habits_completersUncheckedUpdateWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completersUncheckedUpdateWithoutHabitsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Habits_completersUncheckedUpdateManyWithoutHabits_completersInputSchema: z.ZodType<Prisma.Habits_completersUncheckedUpdateManyWithoutHabits_completersInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const HabitsCreateManyTeamsInputSchema: z.ZodType<Prisma.HabitsCreateManyTeamsInput> =
  z
    .object({
      id: z.string().uuid(),
      amount: z.number().int().gte(-2147483648).lte(2147483647),
      time: z.coerce.date(),
      monday: z.boolean(),
      tuesday: z.boolean(),
      wednesday: z.boolean(),
      thursday: z.boolean(),
      friday: z.boolean(),
      saturday: z.boolean(),
      sunday: z.boolean(),
      name: z.string(),
      icon: z.string(),
      color: z.string(),
      habit_type: z.lazy(() => habit_typeSchema),
      period: z.lazy(() => periodSchema),
      user_id: z.string().uuid().optional().nullable(),
      electric_user_id: z.string().uuid().optional().nullable(),
    })
    .strict();

export const Teams_usersCreateManyTeamsInputSchema: z.ZodType<Prisma.Teams_usersCreateManyTeamsInput> =
  z
    .object({
      id: z.string().uuid(),
      user_id: z.string().uuid(),
      role: z.lazy(() => team_roleSchema),
    })
    .strict();

export const HabitsUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.HabitsUpdateWithoutTeamsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      amount: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      time: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      monday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      tuesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      wednesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      thursday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      friday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      saturday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sunday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      color: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      habit_completions: z
        .lazy(() => Habit_completionsUpdateManyWithoutHabitsNestedInputSchema)
        .optional(),
      habits_completers: z
        .lazy(() => Habits_completersUpdateManyWithoutHabitsNestedInputSchema)
        .optional(),
    })
    .strict();

export const HabitsUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.HabitsUncheckedUpdateWithoutTeamsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      amount: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      time: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      monday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      tuesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      wednesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      thursday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      friday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      saturday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sunday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      color: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      habit_completions: z
        .lazy(
          () =>
            Habit_completionsUncheckedUpdateManyWithoutHabitsNestedInputSchema
        )
        .optional(),
      habits_completers: z
        .lazy(
          () =>
            Habits_completersUncheckedUpdateManyWithoutHabitsNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const HabitsUncheckedUpdateManyWithoutHabitsInputSchema: z.ZodType<Prisma.HabitsUncheckedUpdateManyWithoutHabitsInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      amount: z
        .union([
          z.number().int().gte(-2147483648).lte(2147483647),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      time: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      monday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      tuesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      wednesday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      thursday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      friday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      saturday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sunday: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      color: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      habit_type: z
        .union([
          z.lazy(() => habit_typeSchema),
          z.lazy(() => Enumhabit_typeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      period: z
        .union([
          z.lazy(() => periodSchema),
          z.lazy(() => EnumperiodFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      electric_user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const Teams_usersUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.Teams_usersUpdateWithoutTeamsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => Enumteam_roleFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.Teams_usersUncheckedUpdateWithoutTeamsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => Enumteam_roleFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const Teams_usersUncheckedUpdateManyWithoutTeams_usersInputSchema: z.ZodType<Prisma.Teams_usersUncheckedUpdateManyWithoutTeams_usersInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => team_roleSchema),
          z.lazy(() => Enumteam_roleFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const Habit_completionsFindFirstArgsSchema: z.ZodType<Prisma.Habit_completionsFindFirstArgs> =
  z
    .object({
      select: Habit_completionsSelectSchema.optional(),
      include: Habit_completionsIncludeSchema.optional(),
      where: Habit_completionsWhereInputSchema.optional(),
      orderBy: z
        .union([
          Habit_completionsOrderByWithRelationInputSchema.array(),
          Habit_completionsOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Habit_completionsWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: Habit_completionsScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.Habit_completionsFindFirstArgs>;

export const Habit_completionsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Habit_completionsFindFirstOrThrowArgs> =
  z
    .object({
      select: Habit_completionsSelectSchema.optional(),
      include: Habit_completionsIncludeSchema.optional(),
      where: Habit_completionsWhereInputSchema.optional(),
      orderBy: z
        .union([
          Habit_completionsOrderByWithRelationInputSchema.array(),
          Habit_completionsOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Habit_completionsWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: Habit_completionsScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.Habit_completionsFindFirstOrThrowArgs>;

export const Habit_completionsFindManyArgsSchema: z.ZodType<Prisma.Habit_completionsFindManyArgs> =
  z
    .object({
      select: Habit_completionsSelectSchema.optional(),
      include: Habit_completionsIncludeSchema.optional(),
      where: Habit_completionsWhereInputSchema.optional(),
      orderBy: z
        .union([
          Habit_completionsOrderByWithRelationInputSchema.array(),
          Habit_completionsOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Habit_completionsWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: Habit_completionsScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.Habit_completionsFindManyArgs>;

export const Habit_completionsAggregateArgsSchema: z.ZodType<Prisma.Habit_completionsAggregateArgs> =
  z
    .object({
      where: Habit_completionsWhereInputSchema.optional(),
      orderBy: z
        .union([
          Habit_completionsOrderByWithRelationInputSchema.array(),
          Habit_completionsOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Habit_completionsWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.Habit_completionsAggregateArgs>;

export const Habit_completionsGroupByArgsSchema: z.ZodType<Prisma.Habit_completionsGroupByArgs> =
  z
    .object({
      where: Habit_completionsWhereInputSchema.optional(),
      orderBy: z
        .union([
          Habit_completionsOrderByWithAggregationInputSchema.array(),
          Habit_completionsOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: Habit_completionsScalarFieldEnumSchema.array(),
      having: Habit_completionsScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.Habit_completionsGroupByArgs>;

export const Habit_completionsFindUniqueArgsSchema: z.ZodType<Prisma.Habit_completionsFindUniqueArgs> =
  z
    .object({
      select: Habit_completionsSelectSchema.optional(),
      include: Habit_completionsIncludeSchema.optional(),
      where: Habit_completionsWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Habit_completionsFindUniqueArgs>;

export const Habit_completionsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Habit_completionsFindUniqueOrThrowArgs> =
  z
    .object({
      select: Habit_completionsSelectSchema.optional(),
      include: Habit_completionsIncludeSchema.optional(),
      where: Habit_completionsWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Habit_completionsFindUniqueOrThrowArgs>;

export const HabitsFindFirstArgsSchema: z.ZodType<Prisma.HabitsFindFirstArgs> =
  z
    .object({
      select: HabitsSelectSchema.optional(),
      include: HabitsIncludeSchema.optional(),
      where: HabitsWhereInputSchema.optional(),
      orderBy: z
        .union([
          HabitsOrderByWithRelationInputSchema.array(),
          HabitsOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: HabitsWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: HabitsScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.HabitsFindFirstArgs>;

export const HabitsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HabitsFindFirstOrThrowArgs> =
  z
    .object({
      select: HabitsSelectSchema.optional(),
      include: HabitsIncludeSchema.optional(),
      where: HabitsWhereInputSchema.optional(),
      orderBy: z
        .union([
          HabitsOrderByWithRelationInputSchema.array(),
          HabitsOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: HabitsWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: HabitsScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.HabitsFindFirstOrThrowArgs>;

export const HabitsFindManyArgsSchema: z.ZodType<Prisma.HabitsFindManyArgs> = z
  .object({
    select: HabitsSelectSchema.optional(),
    include: HabitsIncludeSchema.optional(),
    where: HabitsWhereInputSchema.optional(),
    orderBy: z
      .union([
        HabitsOrderByWithRelationInputSchema.array(),
        HabitsOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: HabitsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: HabitsScalarFieldEnumSchema.array().optional(),
  })
  .strict() as z.ZodType<Prisma.HabitsFindManyArgs>;

export const HabitsAggregateArgsSchema: z.ZodType<Prisma.HabitsAggregateArgs> =
  z
    .object({
      where: HabitsWhereInputSchema.optional(),
      orderBy: z
        .union([
          HabitsOrderByWithRelationInputSchema.array(),
          HabitsOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: HabitsWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.HabitsAggregateArgs>;

export const HabitsGroupByArgsSchema: z.ZodType<Prisma.HabitsGroupByArgs> = z
  .object({
    where: HabitsWhereInputSchema.optional(),
    orderBy: z
      .union([
        HabitsOrderByWithAggregationInputSchema.array(),
        HabitsOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: HabitsScalarFieldEnumSchema.array(),
    having: HabitsScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict() as z.ZodType<Prisma.HabitsGroupByArgs>;

export const HabitsFindUniqueArgsSchema: z.ZodType<Prisma.HabitsFindUniqueArgs> =
  z
    .object({
      select: HabitsSelectSchema.optional(),
      include: HabitsIncludeSchema.optional(),
      where: HabitsWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.HabitsFindUniqueArgs>;

export const HabitsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HabitsFindUniqueOrThrowArgs> =
  z
    .object({
      select: HabitsSelectSchema.optional(),
      include: HabitsIncludeSchema.optional(),
      where: HabitsWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.HabitsFindUniqueOrThrowArgs>;

export const Habits_completersFindFirstArgsSchema: z.ZodType<Prisma.Habits_completersFindFirstArgs> =
  z
    .object({
      select: Habits_completersSelectSchema.optional(),
      include: Habits_completersIncludeSchema.optional(),
      where: Habits_completersWhereInputSchema.optional(),
      orderBy: z
        .union([
          Habits_completersOrderByWithRelationInputSchema.array(),
          Habits_completersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Habits_completersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: Habits_completersScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.Habits_completersFindFirstArgs>;

export const Habits_completersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Habits_completersFindFirstOrThrowArgs> =
  z
    .object({
      select: Habits_completersSelectSchema.optional(),
      include: Habits_completersIncludeSchema.optional(),
      where: Habits_completersWhereInputSchema.optional(),
      orderBy: z
        .union([
          Habits_completersOrderByWithRelationInputSchema.array(),
          Habits_completersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Habits_completersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: Habits_completersScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.Habits_completersFindFirstOrThrowArgs>;

export const Habits_completersFindManyArgsSchema: z.ZodType<Prisma.Habits_completersFindManyArgs> =
  z
    .object({
      select: Habits_completersSelectSchema.optional(),
      include: Habits_completersIncludeSchema.optional(),
      where: Habits_completersWhereInputSchema.optional(),
      orderBy: z
        .union([
          Habits_completersOrderByWithRelationInputSchema.array(),
          Habits_completersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Habits_completersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: Habits_completersScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.Habits_completersFindManyArgs>;

export const Habits_completersAggregateArgsSchema: z.ZodType<Prisma.Habits_completersAggregateArgs> =
  z
    .object({
      where: Habits_completersWhereInputSchema.optional(),
      orderBy: z
        .union([
          Habits_completersOrderByWithRelationInputSchema.array(),
          Habits_completersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Habits_completersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.Habits_completersAggregateArgs>;

export const Habits_completersGroupByArgsSchema: z.ZodType<Prisma.Habits_completersGroupByArgs> =
  z
    .object({
      where: Habits_completersWhereInputSchema.optional(),
      orderBy: z
        .union([
          Habits_completersOrderByWithAggregationInputSchema.array(),
          Habits_completersOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: Habits_completersScalarFieldEnumSchema.array(),
      having: Habits_completersScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.Habits_completersGroupByArgs>;

export const Habits_completersFindUniqueArgsSchema: z.ZodType<Prisma.Habits_completersFindUniqueArgs> =
  z
    .object({
      select: Habits_completersSelectSchema.optional(),
      include: Habits_completersIncludeSchema.optional(),
      where: Habits_completersWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Habits_completersFindUniqueArgs>;

export const Habits_completersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Habits_completersFindUniqueOrThrowArgs> =
  z
    .object({
      select: Habits_completersSelectSchema.optional(),
      include: Habits_completersIncludeSchema.optional(),
      where: Habits_completersWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Habits_completersFindUniqueOrThrowArgs>;

export const ProfilesFindFirstArgsSchema: z.ZodType<Prisma.ProfilesFindFirstArgs> =
  z
    .object({
      select: ProfilesSelectSchema.optional(),
      where: ProfilesWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProfilesOrderByWithRelationInputSchema.array(),
          ProfilesOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProfilesWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ProfilesScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ProfilesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProfilesFindFirstOrThrowArgs> =
  z
    .object({
      select: ProfilesSelectSchema.optional(),
      where: ProfilesWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProfilesOrderByWithRelationInputSchema.array(),
          ProfilesOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProfilesWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ProfilesScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ProfilesFindManyArgsSchema: z.ZodType<Prisma.ProfilesFindManyArgs> =
  z
    .object({
      select: ProfilesSelectSchema.optional(),
      where: ProfilesWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProfilesOrderByWithRelationInputSchema.array(),
          ProfilesOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProfilesWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ProfilesScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ProfilesAggregateArgsSchema: z.ZodType<Prisma.ProfilesAggregateArgs> =
  z
    .object({
      where: ProfilesWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProfilesOrderByWithRelationInputSchema.array(),
          ProfilesOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProfilesWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ProfilesGroupByArgsSchema: z.ZodType<Prisma.ProfilesGroupByArgs> =
  z
    .object({
      where: ProfilesWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProfilesOrderByWithAggregationInputSchema.array(),
          ProfilesOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: ProfilesScalarFieldEnumSchema.array(),
      having: ProfilesScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ProfilesFindUniqueArgsSchema: z.ZodType<Prisma.ProfilesFindUniqueArgs> =
  z
    .object({
      select: ProfilesSelectSchema.optional(),
      where: ProfilesWhereUniqueInputSchema,
    })
    .strict();

export const ProfilesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProfilesFindUniqueOrThrowArgs> =
  z
    .object({
      select: ProfilesSelectSchema.optional(),
      where: ProfilesWhereUniqueInputSchema,
    })
    .strict();

export const TeamsFindFirstArgsSchema: z.ZodType<Prisma.TeamsFindFirstArgs> = z
  .object({
    select: TeamsSelectSchema.optional(),
    include: TeamsIncludeSchema.optional(),
    where: TeamsWhereInputSchema.optional(),
    orderBy: z
      .union([
        TeamsOrderByWithRelationInputSchema.array(),
        TeamsOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: TeamsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: TeamsScalarFieldEnumSchema.array().optional(),
  })
  .strict() as z.ZodType<Prisma.TeamsFindFirstArgs>;

export const TeamsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TeamsFindFirstOrThrowArgs> =
  z
    .object({
      select: TeamsSelectSchema.optional(),
      include: TeamsIncludeSchema.optional(),
      where: TeamsWhereInputSchema.optional(),
      orderBy: z
        .union([
          TeamsOrderByWithRelationInputSchema.array(),
          TeamsOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TeamsWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: TeamsScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.TeamsFindFirstOrThrowArgs>;

export const TeamsFindManyArgsSchema: z.ZodType<Prisma.TeamsFindManyArgs> = z
  .object({
    select: TeamsSelectSchema.optional(),
    include: TeamsIncludeSchema.optional(),
    where: TeamsWhereInputSchema.optional(),
    orderBy: z
      .union([
        TeamsOrderByWithRelationInputSchema.array(),
        TeamsOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: TeamsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: TeamsScalarFieldEnumSchema.array().optional(),
  })
  .strict() as z.ZodType<Prisma.TeamsFindManyArgs>;

export const TeamsAggregateArgsSchema: z.ZodType<Prisma.TeamsAggregateArgs> = z
  .object({
    where: TeamsWhereInputSchema.optional(),
    orderBy: z
      .union([
        TeamsOrderByWithRelationInputSchema.array(),
        TeamsOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: TeamsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict() as z.ZodType<Prisma.TeamsAggregateArgs>;

export const TeamsGroupByArgsSchema: z.ZodType<Prisma.TeamsGroupByArgs> = z
  .object({
    where: TeamsWhereInputSchema.optional(),
    orderBy: z
      .union([
        TeamsOrderByWithAggregationInputSchema.array(),
        TeamsOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: TeamsScalarFieldEnumSchema.array(),
    having: TeamsScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict() as z.ZodType<Prisma.TeamsGroupByArgs>;

export const TeamsFindUniqueArgsSchema: z.ZodType<Prisma.TeamsFindUniqueArgs> =
  z
    .object({
      select: TeamsSelectSchema.optional(),
      include: TeamsIncludeSchema.optional(),
      where: TeamsWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.TeamsFindUniqueArgs>;

export const TeamsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TeamsFindUniqueOrThrowArgs> =
  z
    .object({
      select: TeamsSelectSchema.optional(),
      include: TeamsIncludeSchema.optional(),
      where: TeamsWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.TeamsFindUniqueOrThrowArgs>;

export const Teams_usersFindFirstArgsSchema: z.ZodType<Prisma.Teams_usersFindFirstArgs> =
  z
    .object({
      select: Teams_usersSelectSchema.optional(),
      include: Teams_usersIncludeSchema.optional(),
      where: Teams_usersWhereInputSchema.optional(),
      orderBy: z
        .union([
          Teams_usersOrderByWithRelationInputSchema.array(),
          Teams_usersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Teams_usersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: Teams_usersScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.Teams_usersFindFirstArgs>;

export const Teams_usersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Teams_usersFindFirstOrThrowArgs> =
  z
    .object({
      select: Teams_usersSelectSchema.optional(),
      include: Teams_usersIncludeSchema.optional(),
      where: Teams_usersWhereInputSchema.optional(),
      orderBy: z
        .union([
          Teams_usersOrderByWithRelationInputSchema.array(),
          Teams_usersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Teams_usersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: Teams_usersScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.Teams_usersFindFirstOrThrowArgs>;

export const Teams_usersFindManyArgsSchema: z.ZodType<Prisma.Teams_usersFindManyArgs> =
  z
    .object({
      select: Teams_usersSelectSchema.optional(),
      include: Teams_usersIncludeSchema.optional(),
      where: Teams_usersWhereInputSchema.optional(),
      orderBy: z
        .union([
          Teams_usersOrderByWithRelationInputSchema.array(),
          Teams_usersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Teams_usersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: Teams_usersScalarFieldEnumSchema.array().optional(),
    })
    .strict() as z.ZodType<Prisma.Teams_usersFindManyArgs>;

export const Teams_usersAggregateArgsSchema: z.ZodType<Prisma.Teams_usersAggregateArgs> =
  z
    .object({
      where: Teams_usersWhereInputSchema.optional(),
      orderBy: z
        .union([
          Teams_usersOrderByWithRelationInputSchema.array(),
          Teams_usersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: Teams_usersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.Teams_usersAggregateArgs>;

export const Teams_usersGroupByArgsSchema: z.ZodType<Prisma.Teams_usersGroupByArgs> =
  z
    .object({
      where: Teams_usersWhereInputSchema.optional(),
      orderBy: z
        .union([
          Teams_usersOrderByWithAggregationInputSchema.array(),
          Teams_usersOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: Teams_usersScalarFieldEnumSchema.array(),
      having: Teams_usersScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.Teams_usersGroupByArgs>;

export const Teams_usersFindUniqueArgsSchema: z.ZodType<Prisma.Teams_usersFindUniqueArgs> =
  z
    .object({
      select: Teams_usersSelectSchema.optional(),
      include: Teams_usersIncludeSchema.optional(),
      where: Teams_usersWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Teams_usersFindUniqueArgs>;

export const Teams_usersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Teams_usersFindUniqueOrThrowArgs> =
  z
    .object({
      select: Teams_usersSelectSchema.optional(),
      include: Teams_usersIncludeSchema.optional(),
      where: Teams_usersWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Teams_usersFindUniqueOrThrowArgs>;

export const Habit_completionsCreateArgsSchema: z.ZodType<Prisma.Habit_completionsCreateArgs> =
  z
    .object({
      select: Habit_completionsSelectSchema.optional(),
      include: Habit_completionsIncludeSchema.optional(),
      data: z.union([
        Habit_completionsCreateInputSchema,
        Habit_completionsUncheckedCreateInputSchema,
      ]),
    })
    .strict() as z.ZodType<Prisma.Habit_completionsCreateArgs>;

export const Habit_completionsUpsertArgsSchema: z.ZodType<Prisma.Habit_completionsUpsertArgs> =
  z
    .object({
      select: Habit_completionsSelectSchema.optional(),
      include: Habit_completionsIncludeSchema.optional(),
      where: Habit_completionsWhereUniqueInputSchema,
      create: z.union([
        Habit_completionsCreateInputSchema,
        Habit_completionsUncheckedCreateInputSchema,
      ]),
      update: z.union([
        Habit_completionsUpdateInputSchema,
        Habit_completionsUncheckedUpdateInputSchema,
      ]),
    })
    .strict() as z.ZodType<Prisma.Habit_completionsUpsertArgs>;

export const Habit_completionsCreateManyArgsSchema: z.ZodType<Prisma.Habit_completionsCreateManyArgs> =
  z
    .object({
      data: Habit_completionsCreateManyInputSchema.array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.Habit_completionsCreateManyArgs>;

export const Habit_completionsDeleteArgsSchema: z.ZodType<Prisma.Habit_completionsDeleteArgs> =
  z
    .object({
      select: Habit_completionsSelectSchema.optional(),
      include: Habit_completionsIncludeSchema.optional(),
      where: Habit_completionsWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Habit_completionsDeleteArgs>;

export const Habit_completionsUpdateArgsSchema: z.ZodType<Prisma.Habit_completionsUpdateArgs> =
  z
    .object({
      select: Habit_completionsSelectSchema.optional(),
      include: Habit_completionsIncludeSchema.optional(),
      data: z.union([
        Habit_completionsUpdateInputSchema,
        Habit_completionsUncheckedUpdateInputSchema,
      ]),
      where: Habit_completionsWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Habit_completionsUpdateArgs>;

export const Habit_completionsUpdateManyArgsSchema: z.ZodType<Prisma.Habit_completionsUpdateManyArgs> =
  z
    .object({
      data: z.union([
        Habit_completionsUpdateManyMutationInputSchema,
        Habit_completionsUncheckedUpdateManyInputSchema,
      ]),
      where: Habit_completionsWhereInputSchema.optional(),
    })
    .strict() as z.ZodType<Prisma.Habit_completionsUpdateManyArgs>;

export const Habit_completionsDeleteManyArgsSchema: z.ZodType<Prisma.Habit_completionsDeleteManyArgs> =
  z
    .object({
      where: Habit_completionsWhereInputSchema.optional(),
    })
    .strict() as z.ZodType<Prisma.Habit_completionsDeleteManyArgs>;

export const HabitsCreateArgsSchema: z.ZodType<Prisma.HabitsCreateArgs> = z
  .object({
    select: HabitsSelectSchema.optional(),
    include: HabitsIncludeSchema.optional(),
    data: z.union([HabitsCreateInputSchema, HabitsUncheckedCreateInputSchema]),
  })
  .strict() as z.ZodType<Prisma.HabitsCreateArgs>;

export const HabitsUpsertArgsSchema: z.ZodType<Prisma.HabitsUpsertArgs> = z
  .object({
    select: HabitsSelectSchema.optional(),
    include: HabitsIncludeSchema.optional(),
    where: HabitsWhereUniqueInputSchema,
    create: z.union([
      HabitsCreateInputSchema,
      HabitsUncheckedCreateInputSchema,
    ]),
    update: z.union([
      HabitsUpdateInputSchema,
      HabitsUncheckedUpdateInputSchema,
    ]),
  })
  .strict() as z.ZodType<Prisma.HabitsUpsertArgs>;

export const HabitsCreateManyArgsSchema: z.ZodType<Prisma.HabitsCreateManyArgs> =
  z
    .object({
      data: HabitsCreateManyInputSchema.array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.HabitsCreateManyArgs>;

export const HabitsDeleteArgsSchema: z.ZodType<Prisma.HabitsDeleteArgs> = z
  .object({
    select: HabitsSelectSchema.optional(),
    include: HabitsIncludeSchema.optional(),
    where: HabitsWhereUniqueInputSchema,
  })
  .strict() as z.ZodType<Prisma.HabitsDeleteArgs>;

export const HabitsUpdateArgsSchema: z.ZodType<Prisma.HabitsUpdateArgs> = z
  .object({
    select: HabitsSelectSchema.optional(),
    include: HabitsIncludeSchema.optional(),
    data: z.union([HabitsUpdateInputSchema, HabitsUncheckedUpdateInputSchema]),
    where: HabitsWhereUniqueInputSchema,
  })
  .strict() as z.ZodType<Prisma.HabitsUpdateArgs>;

export const HabitsUpdateManyArgsSchema: z.ZodType<Prisma.HabitsUpdateManyArgs> =
  z
    .object({
      data: z.union([
        HabitsUpdateManyMutationInputSchema,
        HabitsUncheckedUpdateManyInputSchema,
      ]),
      where: HabitsWhereInputSchema.optional(),
    })
    .strict() as z.ZodType<Prisma.HabitsUpdateManyArgs>;

export const HabitsDeleteManyArgsSchema: z.ZodType<Prisma.HabitsDeleteManyArgs> =
  z
    .object({
      where: HabitsWhereInputSchema.optional(),
    })
    .strict() as z.ZodType<Prisma.HabitsDeleteManyArgs>;

export const Habits_completersCreateArgsSchema: z.ZodType<Prisma.Habits_completersCreateArgs> =
  z
    .object({
      select: Habits_completersSelectSchema.optional(),
      include: Habits_completersIncludeSchema.optional(),
      data: z.union([
        Habits_completersCreateInputSchema,
        Habits_completersUncheckedCreateInputSchema,
      ]),
    })
    .strict() as z.ZodType<Prisma.Habits_completersCreateArgs>;

export const Habits_completersUpsertArgsSchema: z.ZodType<Prisma.Habits_completersUpsertArgs> =
  z
    .object({
      select: Habits_completersSelectSchema.optional(),
      include: Habits_completersIncludeSchema.optional(),
      where: Habits_completersWhereUniqueInputSchema,
      create: z.union([
        Habits_completersCreateInputSchema,
        Habits_completersUncheckedCreateInputSchema,
      ]),
      update: z.union([
        Habits_completersUpdateInputSchema,
        Habits_completersUncheckedUpdateInputSchema,
      ]),
    })
    .strict() as z.ZodType<Prisma.Habits_completersUpsertArgs>;

export const Habits_completersCreateManyArgsSchema: z.ZodType<Prisma.Habits_completersCreateManyArgs> =
  z
    .object({
      data: Habits_completersCreateManyInputSchema.array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.Habits_completersCreateManyArgs>;

export const Habits_completersDeleteArgsSchema: z.ZodType<Prisma.Habits_completersDeleteArgs> =
  z
    .object({
      select: Habits_completersSelectSchema.optional(),
      include: Habits_completersIncludeSchema.optional(),
      where: Habits_completersWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Habits_completersDeleteArgs>;

export const Habits_completersUpdateArgsSchema: z.ZodType<Prisma.Habits_completersUpdateArgs> =
  z
    .object({
      select: Habits_completersSelectSchema.optional(),
      include: Habits_completersIncludeSchema.optional(),
      data: z.union([
        Habits_completersUpdateInputSchema,
        Habits_completersUncheckedUpdateInputSchema,
      ]),
      where: Habits_completersWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Habits_completersUpdateArgs>;

export const Habits_completersUpdateManyArgsSchema: z.ZodType<Prisma.Habits_completersUpdateManyArgs> =
  z
    .object({
      data: z.union([
        Habits_completersUpdateManyMutationInputSchema,
        Habits_completersUncheckedUpdateManyInputSchema,
      ]),
      where: Habits_completersWhereInputSchema.optional(),
    })
    .strict() as z.ZodType<Prisma.Habits_completersUpdateManyArgs>;

export const Habits_completersDeleteManyArgsSchema: z.ZodType<Prisma.Habits_completersDeleteManyArgs> =
  z
    .object({
      where: Habits_completersWhereInputSchema.optional(),
    })
    .strict() as z.ZodType<Prisma.Habits_completersDeleteManyArgs>;

export const ProfilesCreateArgsSchema: z.ZodType<Prisma.ProfilesCreateArgs> = z
  .object({
    select: ProfilesSelectSchema.optional(),
    data: z.union([
      ProfilesCreateInputSchema,
      ProfilesUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const ProfilesUpsertArgsSchema: z.ZodType<Prisma.ProfilesUpsertArgs> = z
  .object({
    select: ProfilesSelectSchema.optional(),
    where: ProfilesWhereUniqueInputSchema,
    create: z.union([
      ProfilesCreateInputSchema,
      ProfilesUncheckedCreateInputSchema,
    ]),
    update: z.union([
      ProfilesUpdateInputSchema,
      ProfilesUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const ProfilesCreateManyArgsSchema: z.ZodType<Prisma.ProfilesCreateManyArgs> =
  z
    .object({
      data: ProfilesCreateManyInputSchema.array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProfilesDeleteArgsSchema: z.ZodType<Prisma.ProfilesDeleteArgs> = z
  .object({
    select: ProfilesSelectSchema.optional(),
    where: ProfilesWhereUniqueInputSchema,
  })
  .strict();

export const ProfilesUpdateArgsSchema: z.ZodType<Prisma.ProfilesUpdateArgs> = z
  .object({
    select: ProfilesSelectSchema.optional(),
    data: z.union([
      ProfilesUpdateInputSchema,
      ProfilesUncheckedUpdateInputSchema,
    ]),
    where: ProfilesWhereUniqueInputSchema,
  })
  .strict();

export const ProfilesUpdateManyArgsSchema: z.ZodType<Prisma.ProfilesUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ProfilesUpdateManyMutationInputSchema,
        ProfilesUncheckedUpdateManyInputSchema,
      ]),
      where: ProfilesWhereInputSchema.optional(),
    })
    .strict();

export const ProfilesDeleteManyArgsSchema: z.ZodType<Prisma.ProfilesDeleteManyArgs> =
  z
    .object({
      where: ProfilesWhereInputSchema.optional(),
    })
    .strict();

export const TeamsCreateArgsSchema: z.ZodType<Prisma.TeamsCreateArgs> = z
  .object({
    select: TeamsSelectSchema.optional(),
    include: TeamsIncludeSchema.optional(),
    data: z.union([TeamsCreateInputSchema, TeamsUncheckedCreateInputSchema]),
  })
  .strict() as z.ZodType<Prisma.TeamsCreateArgs>;

export const TeamsUpsertArgsSchema: z.ZodType<Prisma.TeamsUpsertArgs> = z
  .object({
    select: TeamsSelectSchema.optional(),
    include: TeamsIncludeSchema.optional(),
    where: TeamsWhereUniqueInputSchema,
    create: z.union([TeamsCreateInputSchema, TeamsUncheckedCreateInputSchema]),
    update: z.union([TeamsUpdateInputSchema, TeamsUncheckedUpdateInputSchema]),
  })
  .strict() as z.ZodType<Prisma.TeamsUpsertArgs>;

export const TeamsCreateManyArgsSchema: z.ZodType<Prisma.TeamsCreateManyArgs> =
  z
    .object({
      data: TeamsCreateManyInputSchema.array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.TeamsCreateManyArgs>;

export const TeamsDeleteArgsSchema: z.ZodType<Prisma.TeamsDeleteArgs> = z
  .object({
    select: TeamsSelectSchema.optional(),
    include: TeamsIncludeSchema.optional(),
    where: TeamsWhereUniqueInputSchema,
  })
  .strict() as z.ZodType<Prisma.TeamsDeleteArgs>;

export const TeamsUpdateArgsSchema: z.ZodType<Prisma.TeamsUpdateArgs> = z
  .object({
    select: TeamsSelectSchema.optional(),
    include: TeamsIncludeSchema.optional(),
    data: z.union([TeamsUpdateInputSchema, TeamsUncheckedUpdateInputSchema]),
    where: TeamsWhereUniqueInputSchema,
  })
  .strict() as z.ZodType<Prisma.TeamsUpdateArgs>;

export const TeamsUpdateManyArgsSchema: z.ZodType<Prisma.TeamsUpdateManyArgs> =
  z
    .object({
      data: z.union([
        TeamsUpdateManyMutationInputSchema,
        TeamsUncheckedUpdateManyInputSchema,
      ]),
      where: TeamsWhereInputSchema.optional(),
    })
    .strict() as z.ZodType<Prisma.TeamsUpdateManyArgs>;

export const TeamsDeleteManyArgsSchema: z.ZodType<Prisma.TeamsDeleteManyArgs> =
  z
    .object({
      where: TeamsWhereInputSchema.optional(),
    })
    .strict() as z.ZodType<Prisma.TeamsDeleteManyArgs>;

export const Teams_usersCreateArgsSchema: z.ZodType<Prisma.Teams_usersCreateArgs> =
  z
    .object({
      select: Teams_usersSelectSchema.optional(),
      include: Teams_usersIncludeSchema.optional(),
      data: z.union([
        Teams_usersCreateInputSchema,
        Teams_usersUncheckedCreateInputSchema,
      ]),
    })
    .strict() as z.ZodType<Prisma.Teams_usersCreateArgs>;

export const Teams_usersUpsertArgsSchema: z.ZodType<Prisma.Teams_usersUpsertArgs> =
  z
    .object({
      select: Teams_usersSelectSchema.optional(),
      include: Teams_usersIncludeSchema.optional(),
      where: Teams_usersWhereUniqueInputSchema,
      create: z.union([
        Teams_usersCreateInputSchema,
        Teams_usersUncheckedCreateInputSchema,
      ]),
      update: z.union([
        Teams_usersUpdateInputSchema,
        Teams_usersUncheckedUpdateInputSchema,
      ]),
    })
    .strict() as z.ZodType<Prisma.Teams_usersUpsertArgs>;

export const Teams_usersCreateManyArgsSchema: z.ZodType<Prisma.Teams_usersCreateManyArgs> =
  z
    .object({
      data: Teams_usersCreateManyInputSchema.array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.Teams_usersCreateManyArgs>;

export const Teams_usersDeleteArgsSchema: z.ZodType<Prisma.Teams_usersDeleteArgs> =
  z
    .object({
      select: Teams_usersSelectSchema.optional(),
      include: Teams_usersIncludeSchema.optional(),
      where: Teams_usersWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Teams_usersDeleteArgs>;

export const Teams_usersUpdateArgsSchema: z.ZodType<Prisma.Teams_usersUpdateArgs> =
  z
    .object({
      select: Teams_usersSelectSchema.optional(),
      include: Teams_usersIncludeSchema.optional(),
      data: z.union([
        Teams_usersUpdateInputSchema,
        Teams_usersUncheckedUpdateInputSchema,
      ]),
      where: Teams_usersWhereUniqueInputSchema,
    })
    .strict() as z.ZodType<Prisma.Teams_usersUpdateArgs>;

export const Teams_usersUpdateManyArgsSchema: z.ZodType<Prisma.Teams_usersUpdateManyArgs> =
  z
    .object({
      data: z.union([
        Teams_usersUpdateManyMutationInputSchema,
        Teams_usersUncheckedUpdateManyInputSchema,
      ]),
      where: Teams_usersWhereInputSchema.optional(),
    })
    .strict() as z.ZodType<Prisma.Teams_usersUpdateManyArgs>;

export const Teams_usersDeleteManyArgsSchema: z.ZodType<Prisma.Teams_usersDeleteManyArgs> =
  z
    .object({
      where: Teams_usersWhereInputSchema.optional(),
    })
    .strict() as z.ZodType<Prisma.Teams_usersDeleteManyArgs>;

interface Habit_completionsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Habit_completionsArgs;
  readonly type: Prisma.Habit_completionsGetPayload<this["_A"]>;
}

interface HabitsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.HabitsArgs;
  readonly type: Prisma.HabitsGetPayload<this["_A"]>;
}

interface Habits_completersGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Habits_completersArgs;
  readonly type: Prisma.Habits_completersGetPayload<this["_A"]>;
}

interface ProfilesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ProfilesArgs;
  readonly type: Prisma.ProfilesGetPayload<this["_A"]>;
}

interface TeamsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.TeamsArgs;
  readonly type: Prisma.TeamsGetPayload<this["_A"]>;
}

interface Teams_usersGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Teams_usersArgs;
  readonly type: Prisma.Teams_usersGetPayload<this["_A"]>;
}

export const tableSchemas = {
  habit_completions: {
    fields: new Map([
      ["id", "UUID"],
      ["user_id", "UUID"],
      ["habit_id", "UUID"],
      ["date", "TIMESTAMPTZ"],
      ["electric_user_id", "UUID"],
    ]),
    relations: [
      new Relation(
        "habits",
        "habit_id",
        "id",
        "habits",
        "Habit_completionsToHabits",
        "one"
      ),
    ],
    modelSchema: (Habit_completionsCreateInputSchema as any)
      .partial()
      .or((Habit_completionsUncheckedCreateInputSchema as any).partial()),
    createSchema: Habit_completionsCreateArgsSchema,
    createManySchema: Habit_completionsCreateManyArgsSchema,
    findUniqueSchema: Habit_completionsFindUniqueArgsSchema,
    findSchema: Habit_completionsFindFirstArgsSchema,
    updateSchema: Habit_completionsUpdateArgsSchema,
    updateManySchema: Habit_completionsUpdateManyArgsSchema,
    upsertSchema: Habit_completionsUpsertArgsSchema,
    deleteSchema: Habit_completionsDeleteArgsSchema,
    deleteManySchema: Habit_completionsDeleteManyArgsSchema,
  } as TableSchema<
    z.infer<typeof Habit_completionsCreateInputSchema>,
    Prisma.Habit_completionsCreateArgs["data"],
    Prisma.Habit_completionsUpdateArgs["data"],
    Prisma.Habit_completionsFindFirstArgs["select"],
    Prisma.Habit_completionsFindFirstArgs["where"],
    Prisma.Habit_completionsFindUniqueArgs["where"],
    Omit<Prisma.Habit_completionsInclude, "_count">,
    Prisma.Habit_completionsFindFirstArgs["orderBy"],
    Prisma.Habit_completionsScalarFieldEnum,
    Habit_completionsGetPayload
  >,
  habits: {
    fields: new Map([
      ["id", "UUID"],
      ["amount", "INT4"],
      ["time", "TIME"],
      ["monday", "BOOL"],
      ["tuesday", "BOOL"],
      ["wednesday", "BOOL"],
      ["thursday", "BOOL"],
      ["friday", "BOOL"],
      ["saturday", "BOOL"],
      ["sunday", "BOOL"],
      ["name", "TEXT"],
      ["icon", "TEXT"],
      ["color", "TEXT"],
      ["habit_type", "TEXT"],
      ["period", "TEXT"],
      ["team_id", "UUID"],
      ["user_id", "UUID"],
      ["electric_user_id", "UUID"],
    ]),
    relations: [
      new Relation(
        "habit_completions",
        "",
        "",
        "habit_completions",
        "Habit_completionsToHabits",
        "many"
      ),
      new Relation("teams", "team_id", "id", "teams", "HabitsToTeams", "one"),
      new Relation(
        "habits_completers",
        "",
        "",
        "habits_completers",
        "HabitsToHabits_completers",
        "many"
      ),
    ],
    modelSchema: (HabitsCreateInputSchema as any)
      .partial()
      .or((HabitsUncheckedCreateInputSchema as any).partial()),
    createSchema: HabitsCreateArgsSchema,
    createManySchema: HabitsCreateManyArgsSchema,
    findUniqueSchema: HabitsFindUniqueArgsSchema,
    findSchema: HabitsFindFirstArgsSchema,
    updateSchema: HabitsUpdateArgsSchema,
    updateManySchema: HabitsUpdateManyArgsSchema,
    upsertSchema: HabitsUpsertArgsSchema,
    deleteSchema: HabitsDeleteArgsSchema,
    deleteManySchema: HabitsDeleteManyArgsSchema,
  } as TableSchema<
    z.infer<typeof HabitsCreateInputSchema>,
    Prisma.HabitsCreateArgs["data"],
    Prisma.HabitsUpdateArgs["data"],
    Prisma.HabitsFindFirstArgs["select"],
    Prisma.HabitsFindFirstArgs["where"],
    Prisma.HabitsFindUniqueArgs["where"],
    Omit<Prisma.HabitsInclude, "_count">,
    Prisma.HabitsFindFirstArgs["orderBy"],
    Prisma.HabitsScalarFieldEnum,
    HabitsGetPayload
  >,
  habits_completers: {
    fields: new Map([
      ["id", "UUID"],
      ["user_id", "UUID"],
      ["habit_id", "UUID"],
    ]),
    relations: [
      new Relation(
        "habits",
        "habit_id",
        "id",
        "habits",
        "HabitsToHabits_completers",
        "one"
      ),
    ],
    modelSchema: (Habits_completersCreateInputSchema as any)
      .partial()
      .or((Habits_completersUncheckedCreateInputSchema as any).partial()),
    createSchema: Habits_completersCreateArgsSchema,
    createManySchema: Habits_completersCreateManyArgsSchema,
    findUniqueSchema: Habits_completersFindUniqueArgsSchema,
    findSchema: Habits_completersFindFirstArgsSchema,
    updateSchema: Habits_completersUpdateArgsSchema,
    updateManySchema: Habits_completersUpdateManyArgsSchema,
    upsertSchema: Habits_completersUpsertArgsSchema,
    deleteSchema: Habits_completersDeleteArgsSchema,
    deleteManySchema: Habits_completersDeleteManyArgsSchema,
  } as TableSchema<
    z.infer<typeof Habits_completersCreateInputSchema>,
    Prisma.Habits_completersCreateArgs["data"],
    Prisma.Habits_completersUpdateArgs["data"],
    Prisma.Habits_completersFindFirstArgs["select"],
    Prisma.Habits_completersFindFirstArgs["where"],
    Prisma.Habits_completersFindUniqueArgs["where"],
    Omit<Prisma.Habits_completersInclude, "_count">,
    Prisma.Habits_completersFindFirstArgs["orderBy"],
    Prisma.Habits_completersScalarFieldEnum,
    Habits_completersGetPayload
  >,
  profiles: {
    fields: new Map([
      ["id", "UUID"],
      ["email", "TEXT"],
      ["nickname", "TEXT"],
      ["user_id", "UUID"],
      ["electric_user_id", "UUID"],
    ]),
    relations: [],
    modelSchema: (ProfilesCreateInputSchema as any)
      .partial()
      .or((ProfilesUncheckedCreateInputSchema as any).partial()),
    createSchema: ProfilesCreateArgsSchema,
    createManySchema: ProfilesCreateManyArgsSchema,
    findUniqueSchema: ProfilesFindUniqueArgsSchema,
    findSchema: ProfilesFindFirstArgsSchema,
    updateSchema: ProfilesUpdateArgsSchema,
    updateManySchema: ProfilesUpdateManyArgsSchema,
    upsertSchema: ProfilesUpsertArgsSchema,
    deleteSchema: ProfilesDeleteArgsSchema,
    deleteManySchema: ProfilesDeleteManyArgsSchema,
  } as TableSchema<
    z.infer<typeof ProfilesCreateInputSchema>,
    Prisma.ProfilesCreateArgs["data"],
    Prisma.ProfilesUpdateArgs["data"],
    Prisma.ProfilesFindFirstArgs["select"],
    Prisma.ProfilesFindFirstArgs["where"],
    Prisma.ProfilesFindUniqueArgs["where"],
    never,
    Prisma.ProfilesFindFirstArgs["orderBy"],
    Prisma.ProfilesScalarFieldEnum,
    ProfilesGetPayload
  >,
  teams: {
    fields: new Map([
      ["id", "UUID"],
      ["name", "TEXT"],
      ["user_id", "UUID"],
      ["link_pswd", "TEXT"],
      ["link_exp", "TIMESTAMPTZ"],
    ]),
    relations: [
      new Relation("habits", "", "", "habits", "HabitsToTeams", "many"),
      new Relation(
        "teams_users",
        "",
        "",
        "teams_users",
        "TeamsToTeams_users",
        "many"
      ),
    ],
    modelSchema: (TeamsCreateInputSchema as any)
      .partial()
      .or((TeamsUncheckedCreateInputSchema as any).partial()),
    createSchema: TeamsCreateArgsSchema,
    createManySchema: TeamsCreateManyArgsSchema,
    findUniqueSchema: TeamsFindUniqueArgsSchema,
    findSchema: TeamsFindFirstArgsSchema,
    updateSchema: TeamsUpdateArgsSchema,
    updateManySchema: TeamsUpdateManyArgsSchema,
    upsertSchema: TeamsUpsertArgsSchema,
    deleteSchema: TeamsDeleteArgsSchema,
    deleteManySchema: TeamsDeleteManyArgsSchema,
  } as TableSchema<
    z.infer<typeof TeamsCreateInputSchema>,
    Prisma.TeamsCreateArgs["data"],
    Prisma.TeamsUpdateArgs["data"],
    Prisma.TeamsFindFirstArgs["select"],
    Prisma.TeamsFindFirstArgs["where"],
    Prisma.TeamsFindUniqueArgs["where"],
    Omit<Prisma.TeamsInclude, "_count">,
    Prisma.TeamsFindFirstArgs["orderBy"],
    Prisma.TeamsScalarFieldEnum,
    TeamsGetPayload
  >,
  teams_users: {
    fields: new Map([
      ["id", "UUID"],
      ["user_id", "UUID"],
      ["team_id", "UUID"],
      ["role", "TEXT"],
    ]),
    relations: [
      new Relation(
        "teams",
        "team_id",
        "id",
        "teams",
        "TeamsToTeams_users",
        "one"
      ),
    ],
    modelSchema: (Teams_usersCreateInputSchema as any)
      .partial()
      .or((Teams_usersUncheckedCreateInputSchema as any).partial()),
    createSchema: Teams_usersCreateArgsSchema,
    createManySchema: Teams_usersCreateManyArgsSchema,
    findUniqueSchema: Teams_usersFindUniqueArgsSchema,
    findSchema: Teams_usersFindFirstArgsSchema,
    updateSchema: Teams_usersUpdateArgsSchema,
    updateManySchema: Teams_usersUpdateManyArgsSchema,
    upsertSchema: Teams_usersUpsertArgsSchema,
    deleteSchema: Teams_usersDeleteArgsSchema,
    deleteManySchema: Teams_usersDeleteManyArgsSchema,
  } as TableSchema<
    z.infer<typeof Teams_usersCreateInputSchema>,
    Prisma.Teams_usersCreateArgs["data"],
    Prisma.Teams_usersUpdateArgs["data"],
    Prisma.Teams_usersFindFirstArgs["select"],
    Prisma.Teams_usersFindFirstArgs["where"],
    Prisma.Teams_usersFindUniqueArgs["where"],
    Omit<Prisma.Teams_usersInclude, "_count">,
    Prisma.Teams_usersFindFirstArgs["orderBy"],
    Prisma.Teams_usersScalarFieldEnum,
    Teams_usersGetPayload
  >,
};

export const schema = new DbSchema(tableSchemas, migrations);
export type Electric = ElectricClient<typeof schema>;
