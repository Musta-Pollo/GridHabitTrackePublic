import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const HabitsScalarFieldEnumSchema = z.enum(['id','habit_type','period','amount','habit_order2','time','monday','tuesday','wednesday','thursday','friday','saturday','sunday','name','icon','color','team_id','user_id','electric_user_id','description','monday_not_id','tuesday_not_id','wednesday_not_id','thursday_not_id','friday_not_id','saturday_not_id','sunday_not_id']);

export const Habits_completionsScalarFieldEnumSchema = z.enum(['id','user_id','habit_id','electric_user_id','date']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const habit_typeSchema = z.enum(['Personal','Team']);

export type habit_typeType = `${z.infer<typeof habit_typeSchema>}`

export const periodSchema = z.enum(['Week','Month']);

export type periodType = `${z.infer<typeof periodSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// HABITS SCHEMA
/////////////////////////////////////////

export const HabitsSchema = z.object({
  habit_type: habit_typeSchema.nullable(),
  period: periodSchema.nullable(),
  id: z.string().uuid(),
  amount: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  habit_order2: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  time: z.coerce.date().nullable(),
  monday: z.boolean().nullable(),
  tuesday: z.boolean().nullable(),
  wednesday: z.boolean().nullable(),
  thursday: z.boolean().nullable(),
  friday: z.boolean().nullable(),
  saturday: z.boolean().nullable(),
  sunday: z.boolean().nullable(),
  name: z.string().nullable(),
  icon: z.string().nullable(),
  color: z.string().nullable(),
  team_id: z.string().uuid().nullable(),
  user_id: z.string().uuid().nullable(),
  electric_user_id: z.string().uuid().nullable(),
  description: z.string().nullable(),
  monday_not_id: z.string().uuid(),
  tuesday_not_id: z.string().uuid(),
  wednesday_not_id: z.string().uuid(),
  thursday_not_id: z.string().uuid(),
  friday_not_id: z.string().uuid(),
  saturday_not_id: z.string().uuid(),
  sunday_not_id: z.string().uuid(),
})

export type Habits = z.infer<typeof HabitsSchema>

/////////////////////////////////////////
// HABITS COMPLETIONS SCHEMA
/////////////////////////////////////////

export const Habits_completionsSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  habit_id: z.string().uuid(),
  electric_user_id: z.string().uuid(),
  date: z.coerce.date().nullable(),
})

export type Habits_completions = z.infer<typeof Habits_completionsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// HABITS
//------------------------------------------------------

export const HabitsIncludeSchema: z.ZodType<Prisma.HabitsInclude> = z.object({
  habits_completions: z.union([z.boolean(),z.lazy(() => Habits_completionsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HabitsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const HabitsArgsSchema: z.ZodType<Prisma.HabitsArgs> = z.object({
  select: z.lazy(() => HabitsSelectSchema).optional(),
  include: z.lazy(() => HabitsIncludeSchema).optional(),
}).strict();

export const HabitsCountOutputTypeArgsSchema: z.ZodType<Prisma.HabitsCountOutputTypeArgs> = z.object({
  select: z.lazy(() => HabitsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const HabitsCountOutputTypeSelectSchema: z.ZodType<Prisma.HabitsCountOutputTypeSelect> = z.object({
  habits_completions: z.boolean().optional(),
}).strict();

export const HabitsSelectSchema: z.ZodType<Prisma.HabitsSelect> = z.object({
  id: z.boolean().optional(),
  habit_type: z.boolean().optional(),
  period: z.boolean().optional(),
  amount: z.boolean().optional(),
  habit_order2: z.boolean().optional(),
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
  team_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  electric_user_id: z.boolean().optional(),
  description: z.boolean().optional(),
  monday_not_id: z.boolean().optional(),
  tuesday_not_id: z.boolean().optional(),
  wednesday_not_id: z.boolean().optional(),
  thursday_not_id: z.boolean().optional(),
  friday_not_id: z.boolean().optional(),
  saturday_not_id: z.boolean().optional(),
  sunday_not_id: z.boolean().optional(),
  habits_completions: z.union([z.boolean(),z.lazy(() => Habits_completionsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HabitsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// HABITS COMPLETIONS
//------------------------------------------------------

export const Habits_completionsIncludeSchema: z.ZodType<Prisma.Habits_completionsInclude> = z.object({
  habits: z.union([z.boolean(),z.lazy(() => HabitsArgsSchema)]).optional(),
}).strict()

export const Habits_completionsArgsSchema: z.ZodType<Prisma.Habits_completionsArgs> = z.object({
  select: z.lazy(() => Habits_completionsSelectSchema).optional(),
  include: z.lazy(() => Habits_completionsIncludeSchema).optional(),
}).strict();

export const Habits_completionsSelectSchema: z.ZodType<Prisma.Habits_completionsSelect> = z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  habit_id: z.boolean().optional(),
  electric_user_id: z.boolean().optional(),
  date: z.boolean().optional(),
  habits: z.union([z.boolean(),z.lazy(() => HabitsArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const HabitsWhereInputSchema: z.ZodType<Prisma.HabitsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HabitsWhereInputSchema),z.lazy(() => HabitsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HabitsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HabitsWhereInputSchema),z.lazy(() => HabitsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  habit_type: z.union([ z.lazy(() => Enumhabit_typeNullableFilterSchema),z.lazy(() => habit_typeSchema) ]).optional().nullable(),
  period: z.union([ z.lazy(() => EnumperiodNullableFilterSchema),z.lazy(() => periodSchema) ]).optional().nullable(),
  amount: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  habit_order2: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  time: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  monday: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  tuesday: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  wednesday: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  thursday: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  friday: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  saturday: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  sunday: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  electric_user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  monday_not_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  tuesday_not_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  wednesday_not_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  thursday_not_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  friday_not_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  saturday_not_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  sunday_not_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  habits_completions: z.lazy(() => Habits_completionsListRelationFilterSchema).optional()
}).strict();

export const HabitsOrderByWithRelationInputSchema: z.ZodType<Prisma.HabitsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  habit_type: z.lazy(() => SortOrderSchema).optional(),
  period: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  habit_order2: z.lazy(() => SortOrderSchema).optional(),
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
  team_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  electric_user_id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  monday_not_id: z.lazy(() => SortOrderSchema).optional(),
  tuesday_not_id: z.lazy(() => SortOrderSchema).optional(),
  wednesday_not_id: z.lazy(() => SortOrderSchema).optional(),
  thursday_not_id: z.lazy(() => SortOrderSchema).optional(),
  friday_not_id: z.lazy(() => SortOrderSchema).optional(),
  saturday_not_id: z.lazy(() => SortOrderSchema).optional(),
  sunday_not_id: z.lazy(() => SortOrderSchema).optional(),
  habits_completions: z.lazy(() => Habits_completionsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const HabitsWhereUniqueInputSchema: z.ZodType<Prisma.HabitsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const HabitsOrderByWithAggregationInputSchema: z.ZodType<Prisma.HabitsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  habit_type: z.lazy(() => SortOrderSchema).optional(),
  period: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  habit_order2: z.lazy(() => SortOrderSchema).optional(),
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
  team_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  electric_user_id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  monday_not_id: z.lazy(() => SortOrderSchema).optional(),
  tuesday_not_id: z.lazy(() => SortOrderSchema).optional(),
  wednesday_not_id: z.lazy(() => SortOrderSchema).optional(),
  thursday_not_id: z.lazy(() => SortOrderSchema).optional(),
  friday_not_id: z.lazy(() => SortOrderSchema).optional(),
  saturday_not_id: z.lazy(() => SortOrderSchema).optional(),
  sunday_not_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HabitsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => HabitsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HabitsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HabitsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => HabitsSumOrderByAggregateInputSchema).optional()
}).strict();

export const HabitsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HabitsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HabitsScalarWhereWithAggregatesInputSchema),z.lazy(() => HabitsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HabitsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HabitsScalarWhereWithAggregatesInputSchema),z.lazy(() => HabitsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  habit_type: z.union([ z.lazy(() => Enumhabit_typeNullableWithAggregatesFilterSchema),z.lazy(() => habit_typeSchema) ]).optional().nullable(),
  period: z.union([ z.lazy(() => EnumperiodNullableWithAggregatesFilterSchema),z.lazy(() => periodSchema) ]).optional().nullable(),
  amount: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  habit_order2: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  time: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  monday: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  tuesday: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  wednesday: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  thursday: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  friday: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  saturday: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  sunday: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  icon: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  electric_user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  monday_not_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  tuesday_not_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  wednesday_not_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  thursday_not_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  friday_not_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  saturday_not_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  sunday_not_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const Habits_completionsWhereInputSchema: z.ZodType<Prisma.Habits_completionsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Habits_completionsWhereInputSchema),z.lazy(() => Habits_completionsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Habits_completionsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Habits_completionsWhereInputSchema),z.lazy(() => Habits_completionsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  habit_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  electric_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  habits: z.union([ z.lazy(() => HabitsRelationFilterSchema),z.lazy(() => HabitsWhereInputSchema) ]).optional(),
}).strict();

export const Habits_completionsOrderByWithRelationInputSchema: z.ZodType<Prisma.Habits_completionsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  habit_id: z.lazy(() => SortOrderSchema).optional(),
  electric_user_id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  habits: z.lazy(() => HabitsOrderByWithRelationInputSchema).optional()
}).strict();

export const Habits_completionsWhereUniqueInputSchema: z.ZodType<Prisma.Habits_completionsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const Habits_completionsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Habits_completionsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  habit_id: z.lazy(() => SortOrderSchema).optional(),
  electric_user_id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Habits_completionsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Habits_completionsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Habits_completionsMinOrderByAggregateInputSchema).optional()
}).strict();

export const Habits_completionsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Habits_completionsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Habits_completionsScalarWhereWithAggregatesInputSchema),z.lazy(() => Habits_completionsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Habits_completionsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Habits_completionsScalarWhereWithAggregatesInputSchema),z.lazy(() => Habits_completionsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  habit_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  electric_user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const HabitsCreateInputSchema: z.ZodType<Prisma.HabitsCreateInput> = z.object({
  id: z.string().uuid(),
  habit_type: z.lazy(() => habit_typeSchema).optional().nullable(),
  period: z.lazy(() => periodSchema).optional().nullable(),
  amount: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  habit_order2: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  time: z.coerce.date().optional().nullable(),
  monday: z.boolean().optional().nullable(),
  tuesday: z.boolean().optional().nullable(),
  wednesday: z.boolean().optional().nullable(),
  thursday: z.boolean().optional().nullable(),
  friday: z.boolean().optional().nullable(),
  saturday: z.boolean().optional().nullable(),
  sunday: z.boolean().optional().nullable(),
  name: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  team_id: z.string().uuid().optional().nullable(),
  user_id: z.string().uuid().optional().nullable(),
  electric_user_id: z.string().uuid().optional().nullable(),
  description: z.string().optional().nullable(),
  monday_not_id: z.string().uuid(),
  tuesday_not_id: z.string().uuid(),
  wednesday_not_id: z.string().uuid(),
  thursday_not_id: z.string().uuid(),
  friday_not_id: z.string().uuid(),
  saturday_not_id: z.string().uuid(),
  sunday_not_id: z.string().uuid(),
  habits_completions: z.lazy(() => Habits_completionsCreateNestedManyWithoutHabitsInputSchema).optional()
}).strict();

export const HabitsUncheckedCreateInputSchema: z.ZodType<Prisma.HabitsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  habit_type: z.lazy(() => habit_typeSchema).optional().nullable(),
  period: z.lazy(() => periodSchema).optional().nullable(),
  amount: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  habit_order2: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  time: z.coerce.date().optional().nullable(),
  monday: z.boolean().optional().nullable(),
  tuesday: z.boolean().optional().nullable(),
  wednesday: z.boolean().optional().nullable(),
  thursday: z.boolean().optional().nullable(),
  friday: z.boolean().optional().nullable(),
  saturday: z.boolean().optional().nullable(),
  sunday: z.boolean().optional().nullable(),
  name: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  team_id: z.string().uuid().optional().nullable(),
  user_id: z.string().uuid().optional().nullable(),
  electric_user_id: z.string().uuid().optional().nullable(),
  description: z.string().optional().nullable(),
  monday_not_id: z.string().uuid(),
  tuesday_not_id: z.string().uuid(),
  wednesday_not_id: z.string().uuid(),
  thursday_not_id: z.string().uuid(),
  friday_not_id: z.string().uuid(),
  saturday_not_id: z.string().uuid(),
  sunday_not_id: z.string().uuid(),
  habits_completions: z.lazy(() => Habits_completionsUncheckedCreateNestedManyWithoutHabitsInputSchema).optional()
}).strict();

export const HabitsUpdateInputSchema: z.ZodType<Prisma.HabitsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  habit_type: z.union([ z.lazy(() => habit_typeSchema),z.lazy(() => NullableEnumhabit_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period: z.union([ z.lazy(() => periodSchema),z.lazy(() => NullableEnumperiodFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  habit_order2: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tuesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wednesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thursday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  friday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saturday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sunday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  electric_user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tuesday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  wednesday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thursday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  friday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  saturday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sunday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  habits_completions: z.lazy(() => Habits_completionsUpdateManyWithoutHabitsNestedInputSchema).optional()
}).strict();

export const HabitsUncheckedUpdateInputSchema: z.ZodType<Prisma.HabitsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  habit_type: z.union([ z.lazy(() => habit_typeSchema),z.lazy(() => NullableEnumhabit_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period: z.union([ z.lazy(() => periodSchema),z.lazy(() => NullableEnumperiodFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  habit_order2: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tuesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wednesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thursday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  friday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saturday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sunday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  electric_user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tuesday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  wednesday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thursday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  friday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  saturday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sunday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  habits_completions: z.lazy(() => Habits_completionsUncheckedUpdateManyWithoutHabitsNestedInputSchema).optional()
}).strict();

export const HabitsCreateManyInputSchema: z.ZodType<Prisma.HabitsCreateManyInput> = z.object({
  id: z.string().uuid(),
  habit_type: z.lazy(() => habit_typeSchema).optional().nullable(),
  period: z.lazy(() => periodSchema).optional().nullable(),
  amount: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  habit_order2: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  time: z.coerce.date().optional().nullable(),
  monday: z.boolean().optional().nullable(),
  tuesday: z.boolean().optional().nullable(),
  wednesday: z.boolean().optional().nullable(),
  thursday: z.boolean().optional().nullable(),
  friday: z.boolean().optional().nullable(),
  saturday: z.boolean().optional().nullable(),
  sunday: z.boolean().optional().nullable(),
  name: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  team_id: z.string().uuid().optional().nullable(),
  user_id: z.string().uuid().optional().nullable(),
  electric_user_id: z.string().uuid().optional().nullable(),
  description: z.string().optional().nullable(),
  monday_not_id: z.string().uuid(),
  tuesday_not_id: z.string().uuid(),
  wednesday_not_id: z.string().uuid(),
  thursday_not_id: z.string().uuid(),
  friday_not_id: z.string().uuid(),
  saturday_not_id: z.string().uuid(),
  sunday_not_id: z.string().uuid()
}).strict();

export const HabitsUpdateManyMutationInputSchema: z.ZodType<Prisma.HabitsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  habit_type: z.union([ z.lazy(() => habit_typeSchema),z.lazy(() => NullableEnumhabit_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period: z.union([ z.lazy(() => periodSchema),z.lazy(() => NullableEnumperiodFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  habit_order2: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tuesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wednesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thursday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  friday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saturday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sunday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  electric_user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tuesday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  wednesday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thursday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  friday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  saturday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sunday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HabitsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HabitsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  habit_type: z.union([ z.lazy(() => habit_typeSchema),z.lazy(() => NullableEnumhabit_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period: z.union([ z.lazy(() => periodSchema),z.lazy(() => NullableEnumperiodFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  habit_order2: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tuesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wednesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thursday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  friday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saturday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sunday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  electric_user_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tuesday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  wednesday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thursday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  friday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  saturday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sunday_not_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Habits_completionsCreateInputSchema: z.ZodType<Prisma.Habits_completionsCreateInput> = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  electric_user_id: z.string().uuid(),
  date: z.coerce.date().optional().nullable(),
  habits: z.lazy(() => HabitsCreateNestedOneWithoutHabits_completionsInputSchema)
}).strict();

export const Habits_completionsUncheckedCreateInputSchema: z.ZodType<Prisma.Habits_completionsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  habit_id: z.string().uuid(),
  electric_user_id: z.string().uuid(),
  date: z.coerce.date().optional().nullable()
}).strict();

export const Habits_completionsUpdateInputSchema: z.ZodType<Prisma.Habits_completionsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  electric_user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  habits: z.lazy(() => HabitsUpdateOneRequiredWithoutHabits_completionsNestedInputSchema).optional()
}).strict();

export const Habits_completionsUncheckedUpdateInputSchema: z.ZodType<Prisma.Habits_completionsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  habit_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  electric_user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Habits_completionsCreateManyInputSchema: z.ZodType<Prisma.Habits_completionsCreateManyInput> = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  habit_id: z.string().uuid(),
  electric_user_id: z.string().uuid(),
  date: z.coerce.date().optional().nullable()
}).strict();

export const Habits_completionsUpdateManyMutationInputSchema: z.ZodType<Prisma.Habits_completionsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  electric_user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Habits_completionsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Habits_completionsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  habit_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  electric_user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const Enumhabit_typeNullableFilterSchema: z.ZodType<Prisma.Enumhabit_typeNullableFilter> = z.object({
  equals: z.lazy(() => habit_typeSchema).optional().nullable(),
  in: z.lazy(() => habit_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => habit_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => habit_typeSchema),z.lazy(() => NestedEnumhabit_typeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const EnumperiodNullableFilterSchema: z.ZodType<Prisma.EnumperiodNullableFilter> = z.object({
  equals: z.lazy(() => periodSchema).optional().nullable(),
  in: z.lazy(() => periodSchema).array().optional().nullable(),
  notIn: z.lazy(() => periodSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => periodSchema),z.lazy(() => NestedEnumperiodNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
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
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UuidNullableFilterSchema: z.ZodType<Prisma.UuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const Habits_completionsListRelationFilterSchema: z.ZodType<Prisma.Habits_completionsListRelationFilter> = z.object({
  every: z.lazy(() => Habits_completionsWhereInputSchema).optional(),
  some: z.lazy(() => Habits_completionsWhereInputSchema).optional(),
  none: z.lazy(() => Habits_completionsWhereInputSchema).optional()
}).strict();

export const Habits_completionsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Habits_completionsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HabitsCountOrderByAggregateInputSchema: z.ZodType<Prisma.HabitsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  habit_type: z.lazy(() => SortOrderSchema).optional(),
  period: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  habit_order2: z.lazy(() => SortOrderSchema).optional(),
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
  team_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  electric_user_id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  monday_not_id: z.lazy(() => SortOrderSchema).optional(),
  tuesday_not_id: z.lazy(() => SortOrderSchema).optional(),
  wednesday_not_id: z.lazy(() => SortOrderSchema).optional(),
  thursday_not_id: z.lazy(() => SortOrderSchema).optional(),
  friday_not_id: z.lazy(() => SortOrderSchema).optional(),
  saturday_not_id: z.lazy(() => SortOrderSchema).optional(),
  sunday_not_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HabitsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.HabitsAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional(),
  habit_order2: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HabitsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HabitsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  habit_type: z.lazy(() => SortOrderSchema).optional(),
  period: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  habit_order2: z.lazy(() => SortOrderSchema).optional(),
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
  team_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  electric_user_id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  monday_not_id: z.lazy(() => SortOrderSchema).optional(),
  tuesday_not_id: z.lazy(() => SortOrderSchema).optional(),
  wednesday_not_id: z.lazy(() => SortOrderSchema).optional(),
  thursday_not_id: z.lazy(() => SortOrderSchema).optional(),
  friday_not_id: z.lazy(() => SortOrderSchema).optional(),
  saturday_not_id: z.lazy(() => SortOrderSchema).optional(),
  sunday_not_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HabitsMinOrderByAggregateInputSchema: z.ZodType<Prisma.HabitsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  habit_type: z.lazy(() => SortOrderSchema).optional(),
  period: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  habit_order2: z.lazy(() => SortOrderSchema).optional(),
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
  team_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  electric_user_id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  monday_not_id: z.lazy(() => SortOrderSchema).optional(),
  tuesday_not_id: z.lazy(() => SortOrderSchema).optional(),
  wednesday_not_id: z.lazy(() => SortOrderSchema).optional(),
  thursday_not_id: z.lazy(() => SortOrderSchema).optional(),
  friday_not_id: z.lazy(() => SortOrderSchema).optional(),
  saturday_not_id: z.lazy(() => SortOrderSchema).optional(),
  sunday_not_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HabitsSumOrderByAggregateInputSchema: z.ZodType<Prisma.HabitsSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional(),
  habit_order2: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const Enumhabit_typeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.Enumhabit_typeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => habit_typeSchema).optional().nullable(),
  in: z.lazy(() => habit_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => habit_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => habit_typeSchema),z.lazy(() => NestedEnumhabit_typeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumhabit_typeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumhabit_typeNullableFilterSchema).optional()
}).strict();

export const EnumperiodNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumperiodNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => periodSchema).optional().nullable(),
  in: z.lazy(() => periodSchema).array().optional().nullable(),
  notIn: z.lazy(() => periodSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => periodSchema),z.lazy(() => NestedEnumperiodNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumperiodNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumperiodNullableFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
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
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const UuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const HabitsRelationFilterSchema: z.ZodType<Prisma.HabitsRelationFilter> = z.object({
  is: z.lazy(() => HabitsWhereInputSchema).optional(),
  isNot: z.lazy(() => HabitsWhereInputSchema).optional()
}).strict();

export const Habits_completionsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Habits_completionsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  habit_id: z.lazy(() => SortOrderSchema).optional(),
  electric_user_id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Habits_completionsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Habits_completionsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  habit_id: z.lazy(() => SortOrderSchema).optional(),
  electric_user_id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Habits_completionsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Habits_completionsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  habit_id: z.lazy(() => SortOrderSchema).optional(),
  electric_user_id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Habits_completionsCreateNestedManyWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completionsCreateNestedManyWithoutHabitsInput> = z.object({
  create: z.union([ z.lazy(() => Habits_completionsCreateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsCreateWithoutHabitsInputSchema).array(),z.lazy(() => Habits_completionsUncheckedCreateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUncheckedCreateWithoutHabitsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Habits_completionsCreateOrConnectWithoutHabitsInputSchema),z.lazy(() => Habits_completionsCreateOrConnectWithoutHabitsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Habits_completionsCreateManyHabitsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Habits_completionsWhereUniqueInputSchema),z.lazy(() => Habits_completionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Habits_completionsUncheckedCreateNestedManyWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completionsUncheckedCreateNestedManyWithoutHabitsInput> = z.object({
  create: z.union([ z.lazy(() => Habits_completionsCreateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsCreateWithoutHabitsInputSchema).array(),z.lazy(() => Habits_completionsUncheckedCreateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUncheckedCreateWithoutHabitsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Habits_completionsCreateOrConnectWithoutHabitsInputSchema),z.lazy(() => Habits_completionsCreateOrConnectWithoutHabitsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Habits_completionsCreateManyHabitsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Habits_completionsWhereUniqueInputSchema),z.lazy(() => Habits_completionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableEnumhabit_typeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumhabit_typeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => habit_typeSchema).optional().nullable()
}).strict();

export const NullableEnumperiodFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumperiodFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => periodSchema).optional().nullable()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const Habits_completionsUpdateManyWithoutHabitsNestedInputSchema: z.ZodType<Prisma.Habits_completionsUpdateManyWithoutHabitsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Habits_completionsCreateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsCreateWithoutHabitsInputSchema).array(),z.lazy(() => Habits_completionsUncheckedCreateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUncheckedCreateWithoutHabitsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Habits_completionsCreateOrConnectWithoutHabitsInputSchema),z.lazy(() => Habits_completionsCreateOrConnectWithoutHabitsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Habits_completionsUpsertWithWhereUniqueWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUpsertWithWhereUniqueWithoutHabitsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Habits_completionsCreateManyHabitsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Habits_completionsWhereUniqueInputSchema),z.lazy(() => Habits_completionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Habits_completionsWhereUniqueInputSchema),z.lazy(() => Habits_completionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Habits_completionsWhereUniqueInputSchema),z.lazy(() => Habits_completionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Habits_completionsWhereUniqueInputSchema),z.lazy(() => Habits_completionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Habits_completionsUpdateWithWhereUniqueWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUpdateWithWhereUniqueWithoutHabitsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Habits_completionsUpdateManyWithWhereWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUpdateManyWithWhereWithoutHabitsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Habits_completionsScalarWhereInputSchema),z.lazy(() => Habits_completionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Habits_completionsUncheckedUpdateManyWithoutHabitsNestedInputSchema: z.ZodType<Prisma.Habits_completionsUncheckedUpdateManyWithoutHabitsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Habits_completionsCreateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsCreateWithoutHabitsInputSchema).array(),z.lazy(() => Habits_completionsUncheckedCreateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUncheckedCreateWithoutHabitsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Habits_completionsCreateOrConnectWithoutHabitsInputSchema),z.lazy(() => Habits_completionsCreateOrConnectWithoutHabitsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Habits_completionsUpsertWithWhereUniqueWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUpsertWithWhereUniqueWithoutHabitsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Habits_completionsCreateManyHabitsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Habits_completionsWhereUniqueInputSchema),z.lazy(() => Habits_completionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Habits_completionsWhereUniqueInputSchema),z.lazy(() => Habits_completionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Habits_completionsWhereUniqueInputSchema),z.lazy(() => Habits_completionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Habits_completionsWhereUniqueInputSchema),z.lazy(() => Habits_completionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Habits_completionsUpdateWithWhereUniqueWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUpdateWithWhereUniqueWithoutHabitsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Habits_completionsUpdateManyWithWhereWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUpdateManyWithWhereWithoutHabitsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Habits_completionsScalarWhereInputSchema),z.lazy(() => Habits_completionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const HabitsCreateNestedOneWithoutHabits_completionsInputSchema: z.ZodType<Prisma.HabitsCreateNestedOneWithoutHabits_completionsInput> = z.object({
  create: z.union([ z.lazy(() => HabitsCreateWithoutHabits_completionsInputSchema),z.lazy(() => HabitsUncheckedCreateWithoutHabits_completionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HabitsCreateOrConnectWithoutHabits_completionsInputSchema).optional(),
  connect: z.lazy(() => HabitsWhereUniqueInputSchema).optional()
}).strict();

export const HabitsUpdateOneRequiredWithoutHabits_completionsNestedInputSchema: z.ZodType<Prisma.HabitsUpdateOneRequiredWithoutHabits_completionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => HabitsCreateWithoutHabits_completionsInputSchema),z.lazy(() => HabitsUncheckedCreateWithoutHabits_completionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HabitsCreateOrConnectWithoutHabits_completionsInputSchema).optional(),
  upsert: z.lazy(() => HabitsUpsertWithoutHabits_completionsInputSchema).optional(),
  connect: z.lazy(() => HabitsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HabitsUpdateWithoutHabits_completionsInputSchema),z.lazy(() => HabitsUncheckedUpdateWithoutHabits_completionsInputSchema) ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedEnumhabit_typeNullableFilterSchema: z.ZodType<Prisma.NestedEnumhabit_typeNullableFilter> = z.object({
  equals: z.lazy(() => habit_typeSchema).optional().nullable(),
  in: z.lazy(() => habit_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => habit_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => habit_typeSchema),z.lazy(() => NestedEnumhabit_typeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumperiodNullableFilterSchema: z.ZodType<Prisma.NestedEnumperiodNullableFilter> = z.object({
  equals: z.lazy(() => periodSchema).optional().nullable(),
  in: z.lazy(() => periodSchema).array().optional().nullable(),
  notIn: z.lazy(() => periodSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => periodSchema),z.lazy(() => NestedEnumperiodNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedUuidNullableFilterSchema: z.ZodType<Prisma.NestedUuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumhabit_typeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumhabit_typeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => habit_typeSchema).optional().nullable(),
  in: z.lazy(() => habit_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => habit_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => habit_typeSchema),z.lazy(() => NestedEnumhabit_typeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumhabit_typeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumhabit_typeNullableFilterSchema).optional()
}).strict();

export const NestedEnumperiodNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumperiodNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => periodSchema).optional().nullable(),
  in: z.lazy(() => periodSchema).array().optional().nullable(),
  notIn: z.lazy(() => periodSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => periodSchema),z.lazy(() => NestedEnumperiodNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumperiodNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumperiodNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedUuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const Habits_completionsCreateWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completionsCreateWithoutHabitsInput> = z.object({
  id: z.string(),
  user_id: z.string(),
  electric_user_id: z.string(),
  date: z.coerce.date().optional().nullable()
}).strict();

export const Habits_completionsUncheckedCreateWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completionsUncheckedCreateWithoutHabitsInput> = z.object({
  id: z.string(),
  user_id: z.string(),
  electric_user_id: z.string(),
  date: z.coerce.date().optional().nullable()
}).strict();

export const Habits_completionsCreateOrConnectWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completionsCreateOrConnectWithoutHabitsInput> = z.object({
  where: z.lazy(() => Habits_completionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Habits_completionsCreateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUncheckedCreateWithoutHabitsInputSchema) ]),
}).strict();

export const Habits_completionsCreateManyHabitsInputEnvelopeSchema: z.ZodType<Prisma.Habits_completionsCreateManyHabitsInputEnvelope> = z.object({
  data: z.lazy(() => Habits_completionsCreateManyHabitsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Habits_completionsUpsertWithWhereUniqueWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completionsUpsertWithWhereUniqueWithoutHabitsInput> = z.object({
  where: z.lazy(() => Habits_completionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Habits_completionsUpdateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUncheckedUpdateWithoutHabitsInputSchema) ]),
  create: z.union([ z.lazy(() => Habits_completionsCreateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUncheckedCreateWithoutHabitsInputSchema) ]),
}).strict();

export const Habits_completionsUpdateWithWhereUniqueWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completionsUpdateWithWhereUniqueWithoutHabitsInput> = z.object({
  where: z.lazy(() => Habits_completionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Habits_completionsUpdateWithoutHabitsInputSchema),z.lazy(() => Habits_completionsUncheckedUpdateWithoutHabitsInputSchema) ]),
}).strict();

export const Habits_completionsUpdateManyWithWhereWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completionsUpdateManyWithWhereWithoutHabitsInput> = z.object({
  where: z.lazy(() => Habits_completionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Habits_completionsUpdateManyMutationInputSchema),z.lazy(() => Habits_completionsUncheckedUpdateManyWithoutHabits_completionsInputSchema) ]),
}).strict();

export const Habits_completionsScalarWhereInputSchema: z.ZodType<Prisma.Habits_completionsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Habits_completionsScalarWhereInputSchema),z.lazy(() => Habits_completionsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Habits_completionsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Habits_completionsScalarWhereInputSchema),z.lazy(() => Habits_completionsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  habit_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  electric_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const HabitsCreateWithoutHabits_completionsInputSchema: z.ZodType<Prisma.HabitsCreateWithoutHabits_completionsInput> = z.object({
  id: z.string(),
  habit_type: z.lazy(() => habit_typeSchema).optional().nullable(),
  period: z.lazy(() => periodSchema).optional().nullable(),
  amount: z.number().optional().nullable(),
  habit_order2: z.number().optional().nullable(),
  time: z.coerce.date().optional().nullable(),
  monday: z.boolean().optional().nullable(),
  tuesday: z.boolean().optional().nullable(),
  wednesday: z.boolean().optional().nullable(),
  thursday: z.boolean().optional().nullable(),
  friday: z.boolean().optional().nullable(),
  saturday: z.boolean().optional().nullable(),
  sunday: z.boolean().optional().nullable(),
  name: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  user_id: z.string().optional().nullable(),
  electric_user_id: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  monday_not_id: z.string(),
  tuesday_not_id: z.string(),
  wednesday_not_id: z.string(),
  thursday_not_id: z.string(),
  friday_not_id: z.string(),
  saturday_not_id: z.string(),
  sunday_not_id: z.string()
}).strict();

export const HabitsUncheckedCreateWithoutHabits_completionsInputSchema: z.ZodType<Prisma.HabitsUncheckedCreateWithoutHabits_completionsInput> = z.object({
  id: z.string(),
  habit_type: z.lazy(() => habit_typeSchema).optional().nullable(),
  period: z.lazy(() => periodSchema).optional().nullable(),
  amount: z.number().optional().nullable(),
  habit_order2: z.number().optional().nullable(),
  time: z.coerce.date().optional().nullable(),
  monday: z.boolean().optional().nullable(),
  tuesday: z.boolean().optional().nullable(),
  wednesday: z.boolean().optional().nullable(),
  thursday: z.boolean().optional().nullable(),
  friday: z.boolean().optional().nullable(),
  saturday: z.boolean().optional().nullable(),
  sunday: z.boolean().optional().nullable(),
  name: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  user_id: z.string().optional().nullable(),
  electric_user_id: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  monday_not_id: z.string(),
  tuesday_not_id: z.string(),
  wednesday_not_id: z.string(),
  thursday_not_id: z.string(),
  friday_not_id: z.string(),
  saturday_not_id: z.string(),
  sunday_not_id: z.string()
}).strict();

export const HabitsCreateOrConnectWithoutHabits_completionsInputSchema: z.ZodType<Prisma.HabitsCreateOrConnectWithoutHabits_completionsInput> = z.object({
  where: z.lazy(() => HabitsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HabitsCreateWithoutHabits_completionsInputSchema),z.lazy(() => HabitsUncheckedCreateWithoutHabits_completionsInputSchema) ]),
}).strict();

export const HabitsUpsertWithoutHabits_completionsInputSchema: z.ZodType<Prisma.HabitsUpsertWithoutHabits_completionsInput> = z.object({
  update: z.union([ z.lazy(() => HabitsUpdateWithoutHabits_completionsInputSchema),z.lazy(() => HabitsUncheckedUpdateWithoutHabits_completionsInputSchema) ]),
  create: z.union([ z.lazy(() => HabitsCreateWithoutHabits_completionsInputSchema),z.lazy(() => HabitsUncheckedCreateWithoutHabits_completionsInputSchema) ]),
}).strict();

export const HabitsUpdateWithoutHabits_completionsInputSchema: z.ZodType<Prisma.HabitsUpdateWithoutHabits_completionsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  habit_type: z.union([ z.lazy(() => habit_typeSchema),z.lazy(() => NullableEnumhabit_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period: z.union([ z.lazy(() => periodSchema),z.lazy(() => NullableEnumperiodFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  habit_order2: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tuesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wednesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thursday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  friday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saturday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sunday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  electric_user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tuesday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  wednesday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thursday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  friday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  saturday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sunday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HabitsUncheckedUpdateWithoutHabits_completionsInputSchema: z.ZodType<Prisma.HabitsUncheckedUpdateWithoutHabits_completionsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  habit_type: z.union([ z.lazy(() => habit_typeSchema),z.lazy(() => NullableEnumhabit_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  period: z.union([ z.lazy(() => periodSchema),z.lazy(() => NullableEnumperiodFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  habit_order2: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tuesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wednesday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thursday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  friday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saturday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sunday: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  electric_user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tuesday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  wednesday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thursday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  friday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  saturday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sunday_not_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Habits_completionsCreateManyHabitsInputSchema: z.ZodType<Prisma.Habits_completionsCreateManyHabitsInput> = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  electric_user_id: z.string().uuid(),
  date: z.coerce.date().optional().nullable()
}).strict();

export const Habits_completionsUpdateWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completionsUpdateWithoutHabitsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  electric_user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Habits_completionsUncheckedUpdateWithoutHabitsInputSchema: z.ZodType<Prisma.Habits_completionsUncheckedUpdateWithoutHabitsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  electric_user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Habits_completionsUncheckedUpdateManyWithoutHabits_completionsInputSchema: z.ZodType<Prisma.Habits_completionsUncheckedUpdateManyWithoutHabits_completionsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  electric_user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const HabitsFindFirstArgsSchema: z.ZodType<Prisma.HabitsFindFirstArgs> = z.object({
  select: HabitsSelectSchema.optional(),
  include: HabitsIncludeSchema.optional(),
  where: HabitsWhereInputSchema.optional(),
  orderBy: z.union([ HabitsOrderByWithRelationInputSchema.array(),HabitsOrderByWithRelationInputSchema ]).optional(),
  cursor: HabitsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: HabitsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.HabitsFindFirstArgs>

export const HabitsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HabitsFindFirstOrThrowArgs> = z.object({
  select: HabitsSelectSchema.optional(),
  include: HabitsIncludeSchema.optional(),
  where: HabitsWhereInputSchema.optional(),
  orderBy: z.union([ HabitsOrderByWithRelationInputSchema.array(),HabitsOrderByWithRelationInputSchema ]).optional(),
  cursor: HabitsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: HabitsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.HabitsFindFirstOrThrowArgs>

export const HabitsFindManyArgsSchema: z.ZodType<Prisma.HabitsFindManyArgs> = z.object({
  select: HabitsSelectSchema.optional(),
  include: HabitsIncludeSchema.optional(),
  where: HabitsWhereInputSchema.optional(),
  orderBy: z.union([ HabitsOrderByWithRelationInputSchema.array(),HabitsOrderByWithRelationInputSchema ]).optional(),
  cursor: HabitsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: HabitsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.HabitsFindManyArgs>

export const HabitsAggregateArgsSchema: z.ZodType<Prisma.HabitsAggregateArgs> = z.object({
  where: HabitsWhereInputSchema.optional(),
  orderBy: z.union([ HabitsOrderByWithRelationInputSchema.array(),HabitsOrderByWithRelationInputSchema ]).optional(),
  cursor: HabitsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.HabitsAggregateArgs>

export const HabitsGroupByArgsSchema: z.ZodType<Prisma.HabitsGroupByArgs> = z.object({
  where: HabitsWhereInputSchema.optional(),
  orderBy: z.union([ HabitsOrderByWithAggregationInputSchema.array(),HabitsOrderByWithAggregationInputSchema ]).optional(),
  by: HabitsScalarFieldEnumSchema.array(),
  having: HabitsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.HabitsGroupByArgs>

export const HabitsFindUniqueArgsSchema: z.ZodType<Prisma.HabitsFindUniqueArgs> = z.object({
  select: HabitsSelectSchema.optional(),
  include: HabitsIncludeSchema.optional(),
  where: HabitsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.HabitsFindUniqueArgs>

export const HabitsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HabitsFindUniqueOrThrowArgs> = z.object({
  select: HabitsSelectSchema.optional(),
  include: HabitsIncludeSchema.optional(),
  where: HabitsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.HabitsFindUniqueOrThrowArgs>

export const Habits_completionsFindFirstArgsSchema: z.ZodType<Prisma.Habits_completionsFindFirstArgs> = z.object({
  select: Habits_completionsSelectSchema.optional(),
  include: Habits_completionsIncludeSchema.optional(),
  where: Habits_completionsWhereInputSchema.optional(),
  orderBy: z.union([ Habits_completionsOrderByWithRelationInputSchema.array(),Habits_completionsOrderByWithRelationInputSchema ]).optional(),
  cursor: Habits_completionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Habits_completionsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Habits_completionsFindFirstArgs>

export const Habits_completionsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Habits_completionsFindFirstOrThrowArgs> = z.object({
  select: Habits_completionsSelectSchema.optional(),
  include: Habits_completionsIncludeSchema.optional(),
  where: Habits_completionsWhereInputSchema.optional(),
  orderBy: z.union([ Habits_completionsOrderByWithRelationInputSchema.array(),Habits_completionsOrderByWithRelationInputSchema ]).optional(),
  cursor: Habits_completionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Habits_completionsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Habits_completionsFindFirstOrThrowArgs>

export const Habits_completionsFindManyArgsSchema: z.ZodType<Prisma.Habits_completionsFindManyArgs> = z.object({
  select: Habits_completionsSelectSchema.optional(),
  include: Habits_completionsIncludeSchema.optional(),
  where: Habits_completionsWhereInputSchema.optional(),
  orderBy: z.union([ Habits_completionsOrderByWithRelationInputSchema.array(),Habits_completionsOrderByWithRelationInputSchema ]).optional(),
  cursor: Habits_completionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Habits_completionsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Habits_completionsFindManyArgs>

export const Habits_completionsAggregateArgsSchema: z.ZodType<Prisma.Habits_completionsAggregateArgs> = z.object({
  where: Habits_completionsWhereInputSchema.optional(),
  orderBy: z.union([ Habits_completionsOrderByWithRelationInputSchema.array(),Habits_completionsOrderByWithRelationInputSchema ]).optional(),
  cursor: Habits_completionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Habits_completionsAggregateArgs>

export const Habits_completionsGroupByArgsSchema: z.ZodType<Prisma.Habits_completionsGroupByArgs> = z.object({
  where: Habits_completionsWhereInputSchema.optional(),
  orderBy: z.union([ Habits_completionsOrderByWithAggregationInputSchema.array(),Habits_completionsOrderByWithAggregationInputSchema ]).optional(),
  by: Habits_completionsScalarFieldEnumSchema.array(),
  having: Habits_completionsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Habits_completionsGroupByArgs>

export const Habits_completionsFindUniqueArgsSchema: z.ZodType<Prisma.Habits_completionsFindUniqueArgs> = z.object({
  select: Habits_completionsSelectSchema.optional(),
  include: Habits_completionsIncludeSchema.optional(),
  where: Habits_completionsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Habits_completionsFindUniqueArgs>

export const Habits_completionsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Habits_completionsFindUniqueOrThrowArgs> = z.object({
  select: Habits_completionsSelectSchema.optional(),
  include: Habits_completionsIncludeSchema.optional(),
  where: Habits_completionsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Habits_completionsFindUniqueOrThrowArgs>

export const HabitsCreateArgsSchema: z.ZodType<Prisma.HabitsCreateArgs> = z.object({
  select: HabitsSelectSchema.optional(),
  include: HabitsIncludeSchema.optional(),
  data: z.union([ HabitsCreateInputSchema,HabitsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.HabitsCreateArgs>

export const HabitsUpsertArgsSchema: z.ZodType<Prisma.HabitsUpsertArgs> = z.object({
  select: HabitsSelectSchema.optional(),
  include: HabitsIncludeSchema.optional(),
  where: HabitsWhereUniqueInputSchema,
  create: z.union([ HabitsCreateInputSchema,HabitsUncheckedCreateInputSchema ]),
  update: z.union([ HabitsUpdateInputSchema,HabitsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.HabitsUpsertArgs>

export const HabitsCreateManyArgsSchema: z.ZodType<Prisma.HabitsCreateManyArgs> = z.object({
  data: HabitsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.HabitsCreateManyArgs>

export const HabitsDeleteArgsSchema: z.ZodType<Prisma.HabitsDeleteArgs> = z.object({
  select: HabitsSelectSchema.optional(),
  include: HabitsIncludeSchema.optional(),
  where: HabitsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.HabitsDeleteArgs>

export const HabitsUpdateArgsSchema: z.ZodType<Prisma.HabitsUpdateArgs> = z.object({
  select: HabitsSelectSchema.optional(),
  include: HabitsIncludeSchema.optional(),
  data: z.union([ HabitsUpdateInputSchema,HabitsUncheckedUpdateInputSchema ]),
  where: HabitsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.HabitsUpdateArgs>

export const HabitsUpdateManyArgsSchema: z.ZodType<Prisma.HabitsUpdateManyArgs> = z.object({
  data: z.union([ HabitsUpdateManyMutationInputSchema,HabitsUncheckedUpdateManyInputSchema ]),
  where: HabitsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.HabitsUpdateManyArgs>

export const HabitsDeleteManyArgsSchema: z.ZodType<Prisma.HabitsDeleteManyArgs> = z.object({
  where: HabitsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.HabitsDeleteManyArgs>

export const Habits_completionsCreateArgsSchema: z.ZodType<Prisma.Habits_completionsCreateArgs> = z.object({
  select: Habits_completionsSelectSchema.optional(),
  include: Habits_completionsIncludeSchema.optional(),
  data: z.union([ Habits_completionsCreateInputSchema,Habits_completionsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Habits_completionsCreateArgs>

export const Habits_completionsUpsertArgsSchema: z.ZodType<Prisma.Habits_completionsUpsertArgs> = z.object({
  select: Habits_completionsSelectSchema.optional(),
  include: Habits_completionsIncludeSchema.optional(),
  where: Habits_completionsWhereUniqueInputSchema,
  create: z.union([ Habits_completionsCreateInputSchema,Habits_completionsUncheckedCreateInputSchema ]),
  update: z.union([ Habits_completionsUpdateInputSchema,Habits_completionsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Habits_completionsUpsertArgs>

export const Habits_completionsCreateManyArgsSchema: z.ZodType<Prisma.Habits_completionsCreateManyArgs> = z.object({
  data: Habits_completionsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Habits_completionsCreateManyArgs>

export const Habits_completionsDeleteArgsSchema: z.ZodType<Prisma.Habits_completionsDeleteArgs> = z.object({
  select: Habits_completionsSelectSchema.optional(),
  include: Habits_completionsIncludeSchema.optional(),
  where: Habits_completionsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Habits_completionsDeleteArgs>

export const Habits_completionsUpdateArgsSchema: z.ZodType<Prisma.Habits_completionsUpdateArgs> = z.object({
  select: Habits_completionsSelectSchema.optional(),
  include: Habits_completionsIncludeSchema.optional(),
  data: z.union([ Habits_completionsUpdateInputSchema,Habits_completionsUncheckedUpdateInputSchema ]),
  where: Habits_completionsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Habits_completionsUpdateArgs>

export const Habits_completionsUpdateManyArgsSchema: z.ZodType<Prisma.Habits_completionsUpdateManyArgs> = z.object({
  data: z.union([ Habits_completionsUpdateManyMutationInputSchema,Habits_completionsUncheckedUpdateManyInputSchema ]),
  where: Habits_completionsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Habits_completionsUpdateManyArgs>

export const Habits_completionsDeleteManyArgsSchema: z.ZodType<Prisma.Habits_completionsDeleteManyArgs> = z.object({
  where: Habits_completionsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Habits_completionsDeleteManyArgs>

interface HabitsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.HabitsArgs
  readonly type: Omit<Prisma.HabitsGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface Habits_completionsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Habits_completionsArgs
  readonly type: Omit<Prisma.Habits_completionsGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

export const tableSchemas = {
  habits: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "habit_type",
        "TEXT"
      ],
      [
        "period",
        "TEXT"
      ],
      [
        "amount",
        "INT4"
      ],
      [
        "habit_order2",
        "INT4"
      ],
      [
        "time",
        "TIME"
      ],
      [
        "monday",
        "BOOL"
      ],
      [
        "tuesday",
        "BOOL"
      ],
      [
        "wednesday",
        "BOOL"
      ],
      [
        "thursday",
        "BOOL"
      ],
      [
        "friday",
        "BOOL"
      ],
      [
        "saturday",
        "BOOL"
      ],
      [
        "sunday",
        "BOOL"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "icon",
        "TEXT"
      ],
      [
        "color",
        "TEXT"
      ],
      [
        "team_id",
        "UUID"
      ],
      [
        "user_id",
        "UUID"
      ],
      [
        "electric_user_id",
        "UUID"
      ],
      [
        "description",
        "TEXT"
      ],
      [
        "monday_not_id",
        "UUID"
      ],
      [
        "tuesday_not_id",
        "UUID"
      ],
      [
        "wednesday_not_id",
        "UUID"
      ],
      [
        "thursday_not_id",
        "UUID"
      ],
      [
        "friday_not_id",
        "UUID"
      ],
      [
        "saturday_not_id",
        "UUID"
      ],
      [
        "sunday_not_id",
        "UUID"
      ]
    ]),
    relations: [
      new Relation("habits_completions", "", "", "habits_completions", "HabitsToHabits_completions", "many"),
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
    deleteManySchema: HabitsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof HabitsUncheckedCreateInputSchema>,
    Prisma.HabitsCreateArgs['data'],
    Prisma.HabitsUpdateArgs['data'],
    Prisma.HabitsFindFirstArgs['select'],
    Prisma.HabitsFindFirstArgs['where'],
    Prisma.HabitsFindUniqueArgs['where'],
    Omit<Prisma.HabitsInclude, '_count'>,
    Prisma.HabitsFindFirstArgs['orderBy'],
    Prisma.HabitsScalarFieldEnum,
    HabitsGetPayload
  >,
  habits_completions: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "user_id",
        "UUID"
      ],
      [
        "habit_id",
        "UUID"
      ],
      [
        "electric_user_id",
        "UUID"
      ],
      [
        "date",
        "TIMESTAMPTZ"
      ]
    ]),
    relations: [
      new Relation("habits", "habit_id", "id", "habits", "HabitsToHabits_completions", "one"),
    ],
    modelSchema: (Habits_completionsCreateInputSchema as any)
      .partial()
      .or((Habits_completionsUncheckedCreateInputSchema as any).partial()),
    createSchema: Habits_completionsCreateArgsSchema,
    createManySchema: Habits_completionsCreateManyArgsSchema,
    findUniqueSchema: Habits_completionsFindUniqueArgsSchema,
    findSchema: Habits_completionsFindFirstArgsSchema,
    updateSchema: Habits_completionsUpdateArgsSchema,
    updateManySchema: Habits_completionsUpdateManyArgsSchema,
    upsertSchema: Habits_completionsUpsertArgsSchema,
    deleteSchema: Habits_completionsDeleteArgsSchema,
    deleteManySchema: Habits_completionsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Habits_completionsUncheckedCreateInputSchema>,
    Prisma.Habits_completionsCreateArgs['data'],
    Prisma.Habits_completionsUpdateArgs['data'],
    Prisma.Habits_completionsFindFirstArgs['select'],
    Prisma.Habits_completionsFindFirstArgs['where'],
    Prisma.Habits_completionsFindUniqueArgs['where'],
    Omit<Prisma.Habits_completionsInclude, '_count'>,
    Prisma.Habits_completionsFindFirstArgs['orderBy'],
    Prisma.Habits_completionsScalarFieldEnum,
    Habits_completionsGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
