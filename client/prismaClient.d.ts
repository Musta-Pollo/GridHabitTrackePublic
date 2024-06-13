
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Habit_completions
 * 
 */
export type Habit_completions = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  user_id: string
  /**
   * @zod.string.uuid()
   */
  habit_id: string
  date: Date
  /**
   * @zod.string.uuid()
   */
  electric_user_id: string | null
}

/**
 * Model Habits
 * 
 */
export type Habits = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  amount: number
  time: Date
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
  name: string
  icon: string
  color: string
  habit_type: habit_type
  period: period
  /**
   * @zod.string.uuid()
   */
  team_id: string | null
  /**
   * @zod.string.uuid()
   */
  user_id: string | null
  /**
   * @zod.string.uuid()
   */
  electric_user_id: string | null
}

/**
 * Model Habits_completers
 * 
 */
export type Habits_completers = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  user_id: string
  /**
   * @zod.string.uuid()
   */
  habit_id: string
}

/**
 * Model Profiles
 * 
 */
export type Profiles = {
  /**
   * @zod.string.uuid()
   */
  id: string
  email: string
  nickname: string
  /**
   * @zod.string.uuid()
   */
  user_id: string
  /**
   * @zod.string.uuid()
   */
  electric_user_id: string | null
}

/**
 * Model Teams
 * 
 */
export type Teams = {
  /**
   * @zod.string.uuid()
   */
  id: string
  name: string
  /**
   * @zod.string.uuid()
   */
  user_id: string
  link_pswd: string
  link_exp: Date
}

/**
 * Model Teams_users
 * 
 */
export type Teams_users = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  user_id: string
  /**
   * @zod.string.uuid()
   */
  team_id: string
  role: team_role
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const habit_type: {
  Personal: 'Personal',
  Team: 'Team'
};

export type habit_type = (typeof habit_type)[keyof typeof habit_type]


export const period: {
  Week: 'Week',
  Month: 'Month'
};

export type period = (typeof period)[keyof typeof period]


export const team_role: {
  owner: 'owner',
  member: 'member'
};

export type team_role = (typeof team_role)[keyof typeof team_role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Habit_completions
 * const habit_completions = await prisma.habit_completions.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Habit_completions
   * const habit_completions = await prisma.habit_completions.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.habit_completions`: Exposes CRUD operations for the **Habit_completions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habit_completions
    * const habit_completions = await prisma.habit_completions.findMany()
    * ```
    */
  get habit_completions(): Prisma.Habit_completionsDelegate<GlobalReject>;

  /**
   * `prisma.habits`: Exposes CRUD operations for the **Habits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habits.findMany()
    * ```
    */
  get habits(): Prisma.HabitsDelegate<GlobalReject>;

  /**
   * `prisma.habits_completers`: Exposes CRUD operations for the **Habits_completers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits_completers
    * const habits_completers = await prisma.habits_completers.findMany()
    * ```
    */
  get habits_completers(): Prisma.Habits_completersDelegate<GlobalReject>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **Profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.ProfilesDelegate<GlobalReject>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **Teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.TeamsDelegate<GlobalReject>;

  /**
   * `prisma.teams_users`: Exposes CRUD operations for the **Teams_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams_users
    * const teams_users = await prisma.teams_users.findMany()
    * ```
    */
  get teams_users(): Prisma.Teams_usersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Habit_completions: 'Habit_completions',
    Habits: 'Habits',
    Habits_completers: 'Habits_completers',
    Profiles: 'Profiles',
    Teams: 'Teams',
    Teams_users: 'Teams_users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HabitsCountOutputType
   */


  export type HabitsCountOutputType = {
    habit_completions: number
    habits_completers: number
  }

  export type HabitsCountOutputTypeSelect = {
    habit_completions?: boolean
    habits_completers?: boolean
  }

  export type HabitsCountOutputTypeGetPayload<S extends boolean | null | undefined | HabitsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HabitsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HabitsCountOutputTypeArgs)
    ? HabitsCountOutputType 
    : S extends { select: any } & (HabitsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HabitsCountOutputType ? HabitsCountOutputType[P] : never
  } 
      : HabitsCountOutputType




  // Custom InputTypes

  /**
   * HabitsCountOutputType without action
   */
  export type HabitsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HabitsCountOutputType
     * 
    **/
    select?: HabitsCountOutputTypeSelect | null
  }



  /**
   * Count Type TeamsCountOutputType
   */


  export type TeamsCountOutputType = {
    habits: number
    teams_users: number
  }

  export type TeamsCountOutputTypeSelect = {
    habits?: boolean
    teams_users?: boolean
  }

  export type TeamsCountOutputTypeGetPayload<S extends boolean | null | undefined | TeamsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TeamsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TeamsCountOutputTypeArgs)
    ? TeamsCountOutputType 
    : S extends { select: any } & (TeamsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TeamsCountOutputType ? TeamsCountOutputType[P] : never
  } 
      : TeamsCountOutputType




  // Custom InputTypes

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     * 
    **/
    select?: TeamsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Habit_completions
   */


  export type AggregateHabit_completions = {
    _count: Habit_completionsCountAggregateOutputType | null
    _min: Habit_completionsMinAggregateOutputType | null
    _max: Habit_completionsMaxAggregateOutputType | null
  }

  export type Habit_completionsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    habit_id: string | null
    date: Date | null
    electric_user_id: string | null
  }

  export type Habit_completionsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    habit_id: string | null
    date: Date | null
    electric_user_id: string | null
  }

  export type Habit_completionsCountAggregateOutputType = {
    id: number
    user_id: number
    habit_id: number
    date: number
    electric_user_id: number
    _all: number
  }


  export type Habit_completionsMinAggregateInputType = {
    id?: true
    user_id?: true
    habit_id?: true
    date?: true
    electric_user_id?: true
  }

  export type Habit_completionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    habit_id?: true
    date?: true
    electric_user_id?: true
  }

  export type Habit_completionsCountAggregateInputType = {
    id?: true
    user_id?: true
    habit_id?: true
    date?: true
    electric_user_id?: true
    _all?: true
  }

  export type Habit_completionsAggregateArgs = {
    /**
     * Filter which Habit_completions to aggregate.
     * 
    **/
    where?: Habit_completionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habit_completions to fetch.
     * 
    **/
    orderBy?: Enumerable<Habit_completionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Habit_completionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habit_completions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habit_completions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habit_completions
    **/
    _count?: true | Habit_completionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Habit_completionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Habit_completionsMaxAggregateInputType
  }

  export type GetHabit_completionsAggregateType<T extends Habit_completionsAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit_completions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit_completions[P]>
      : GetScalarType<T[P], AggregateHabit_completions[P]>
  }




  export type Habit_completionsGroupByArgs = {
    where?: Habit_completionsWhereInput
    orderBy?: Enumerable<Habit_completionsOrderByWithAggregationInput>
    by: Array<Habit_completionsScalarFieldEnum>
    having?: Habit_completionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Habit_completionsCountAggregateInputType | true
    _min?: Habit_completionsMinAggregateInputType
    _max?: Habit_completionsMaxAggregateInputType
  }


  export type Habit_completionsGroupByOutputType = {
    id: string
    user_id: string
    habit_id: string
    date: Date
    electric_user_id: string | null
    _count: Habit_completionsCountAggregateOutputType | null
    _min: Habit_completionsMinAggregateOutputType | null
    _max: Habit_completionsMaxAggregateOutputType | null
  }

  type GetHabit_completionsGroupByPayload<T extends Habit_completionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Habit_completionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Habit_completionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Habit_completionsGroupByOutputType[P]>
            : GetScalarType<T[P], Habit_completionsGroupByOutputType[P]>
        }
      >
    >


  export type Habit_completionsSelect = {
    id?: boolean
    user_id?: boolean
    habit_id?: boolean
    date?: boolean
    electric_user_id?: boolean
    habits?: boolean | HabitsArgs
  }


  export type Habit_completionsInclude = {
    habits?: boolean | HabitsArgs
  } 

  export type Habit_completionsGetPayload<S extends boolean | null | undefined | Habit_completionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Habit_completions :
    S extends undefined ? never :
    S extends { include: any } & (Habit_completionsArgs | Habit_completionsFindManyArgs)
    ? Habit_completions  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'habits' ? HabitsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Habit_completionsArgs | Habit_completionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'habits' ? HabitsGetPayload<S['select'][P]> :  P extends keyof Habit_completions ? Habit_completions[P] : never
  } 
      : Habit_completions


  type Habit_completionsCountArgs = Merge<
    Omit<Habit_completionsFindManyArgs, 'select' | 'include'> & {
      select?: Habit_completionsCountAggregateInputType | true
    }
  >

  export interface Habit_completionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Habit_completions that matches the filter.
     * @param {Habit_completionsFindUniqueArgs} args - Arguments to find a Habit_completions
     * @example
     * // Get one Habit_completions
     * const habit_completions = await prisma.habit_completions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Habit_completionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Habit_completionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Habit_completions'> extends True ? Prisma__Habit_completionsClient<Habit_completionsGetPayload<T>> : Prisma__Habit_completionsClient<Habit_completionsGetPayload<T> | null, null>

    /**
     * Find one Habit_completions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Habit_completionsFindUniqueOrThrowArgs} args - Arguments to find a Habit_completions
     * @example
     * // Get one Habit_completions
     * const habit_completions = await prisma.habit_completions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Habit_completionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Habit_completionsFindUniqueOrThrowArgs>
    ): Prisma__Habit_completionsClient<Habit_completionsGetPayload<T>>

    /**
     * Find the first Habit_completions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_completionsFindFirstArgs} args - Arguments to find a Habit_completions
     * @example
     * // Get one Habit_completions
     * const habit_completions = await prisma.habit_completions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Habit_completionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Habit_completionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Habit_completions'> extends True ? Prisma__Habit_completionsClient<Habit_completionsGetPayload<T>> : Prisma__Habit_completionsClient<Habit_completionsGetPayload<T> | null, null>

    /**
     * Find the first Habit_completions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_completionsFindFirstOrThrowArgs} args - Arguments to find a Habit_completions
     * @example
     * // Get one Habit_completions
     * const habit_completions = await prisma.habit_completions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Habit_completionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Habit_completionsFindFirstOrThrowArgs>
    ): Prisma__Habit_completionsClient<Habit_completionsGetPayload<T>>

    /**
     * Find zero or more Habit_completions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_completionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habit_completions
     * const habit_completions = await prisma.habit_completions.findMany()
     * 
     * // Get first 10 Habit_completions
     * const habit_completions = await prisma.habit_completions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habit_completionsWithIdOnly = await prisma.habit_completions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Habit_completionsFindManyArgs>(
      args?: SelectSubset<T, Habit_completionsFindManyArgs>
    ): PrismaPromise<Array<Habit_completionsGetPayload<T>>>

    /**
     * Create a Habit_completions.
     * @param {Habit_completionsCreateArgs} args - Arguments to create a Habit_completions.
     * @example
     * // Create one Habit_completions
     * const Habit_completions = await prisma.habit_completions.create({
     *   data: {
     *     // ... data to create a Habit_completions
     *   }
     * })
     * 
    **/
    create<T extends Habit_completionsCreateArgs>(
      args: SelectSubset<T, Habit_completionsCreateArgs>
    ): Prisma__Habit_completionsClient<Habit_completionsGetPayload<T>>

    /**
     * Create many Habit_completions.
     *     @param {Habit_completionsCreateManyArgs} args - Arguments to create many Habit_completions.
     *     @example
     *     // Create many Habit_completions
     *     const habit_completions = await prisma.habit_completions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Habit_completionsCreateManyArgs>(
      args?: SelectSubset<T, Habit_completionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Habit_completions.
     * @param {Habit_completionsDeleteArgs} args - Arguments to delete one Habit_completions.
     * @example
     * // Delete one Habit_completions
     * const Habit_completions = await prisma.habit_completions.delete({
     *   where: {
     *     // ... filter to delete one Habit_completions
     *   }
     * })
     * 
    **/
    delete<T extends Habit_completionsDeleteArgs>(
      args: SelectSubset<T, Habit_completionsDeleteArgs>
    ): Prisma__Habit_completionsClient<Habit_completionsGetPayload<T>>

    /**
     * Update one Habit_completions.
     * @param {Habit_completionsUpdateArgs} args - Arguments to update one Habit_completions.
     * @example
     * // Update one Habit_completions
     * const habit_completions = await prisma.habit_completions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Habit_completionsUpdateArgs>(
      args: SelectSubset<T, Habit_completionsUpdateArgs>
    ): Prisma__Habit_completionsClient<Habit_completionsGetPayload<T>>

    /**
     * Delete zero or more Habit_completions.
     * @param {Habit_completionsDeleteManyArgs} args - Arguments to filter Habit_completions to delete.
     * @example
     * // Delete a few Habit_completions
     * const { count } = await prisma.habit_completions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Habit_completionsDeleteManyArgs>(
      args?: SelectSubset<T, Habit_completionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habit_completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_completionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habit_completions
     * const habit_completions = await prisma.habit_completions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Habit_completionsUpdateManyArgs>(
      args: SelectSubset<T, Habit_completionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Habit_completions.
     * @param {Habit_completionsUpsertArgs} args - Arguments to update or create a Habit_completions.
     * @example
     * // Update or create a Habit_completions
     * const habit_completions = await prisma.habit_completions.upsert({
     *   create: {
     *     // ... data to create a Habit_completions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit_completions we want to update
     *   }
     * })
    **/
    upsert<T extends Habit_completionsUpsertArgs>(
      args: SelectSubset<T, Habit_completionsUpsertArgs>
    ): Prisma__Habit_completionsClient<Habit_completionsGetPayload<T>>

    /**
     * Count the number of Habit_completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_completionsCountArgs} args - Arguments to filter Habit_completions to count.
     * @example
     * // Count the number of Habit_completions
     * const count = await prisma.habit_completions.count({
     *   where: {
     *     // ... the filter for the Habit_completions we want to count
     *   }
     * })
    **/
    count<T extends Habit_completionsCountArgs>(
      args?: Subset<T, Habit_completionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Habit_completionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit_completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_completionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Habit_completionsAggregateArgs>(args: Subset<T, Habit_completionsAggregateArgs>): PrismaPromise<GetHabit_completionsAggregateType<T>>

    /**
     * Group by Habit_completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_completionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Habit_completionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Habit_completionsGroupByArgs['orderBy'] }
        : { orderBy?: Habit_completionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Habit_completionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabit_completionsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit_completions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Habit_completionsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    habits<T extends HabitsArgs= {}>(args?: Subset<T, HabitsArgs>): Prisma__HabitsClient<HabitsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Habit_completions base type for findUnique actions
   */
  export type Habit_completionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
    /**
     * Filter, which Habit_completions to fetch.
     * 
    **/
    where: Habit_completionsWhereUniqueInput
  }

  /**
   * Habit_completions findUnique
   */
  export interface Habit_completionsFindUniqueArgs extends Habit_completionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Habit_completions findUniqueOrThrow
   */
  export type Habit_completionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
    /**
     * Filter, which Habit_completions to fetch.
     * 
    **/
    where: Habit_completionsWhereUniqueInput
  }


  /**
   * Habit_completions base type for findFirst actions
   */
  export type Habit_completionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
    /**
     * Filter, which Habit_completions to fetch.
     * 
    **/
    where?: Habit_completionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habit_completions to fetch.
     * 
    **/
    orderBy?: Enumerable<Habit_completionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habit_completions.
     * 
    **/
    cursor?: Habit_completionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habit_completions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habit_completions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habit_completions.
     * 
    **/
    distinct?: Enumerable<Habit_completionsScalarFieldEnum>
  }

  /**
   * Habit_completions findFirst
   */
  export interface Habit_completionsFindFirstArgs extends Habit_completionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Habit_completions findFirstOrThrow
   */
  export type Habit_completionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
    /**
     * Filter, which Habit_completions to fetch.
     * 
    **/
    where?: Habit_completionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habit_completions to fetch.
     * 
    **/
    orderBy?: Enumerable<Habit_completionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habit_completions.
     * 
    **/
    cursor?: Habit_completionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habit_completions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habit_completions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habit_completions.
     * 
    **/
    distinct?: Enumerable<Habit_completionsScalarFieldEnum>
  }


  /**
   * Habit_completions findMany
   */
  export type Habit_completionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
    /**
     * Filter, which Habit_completions to fetch.
     * 
    **/
    where?: Habit_completionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habit_completions to fetch.
     * 
    **/
    orderBy?: Enumerable<Habit_completionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habit_completions.
     * 
    **/
    cursor?: Habit_completionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habit_completions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habit_completions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Habit_completionsScalarFieldEnum>
  }


  /**
   * Habit_completions create
   */
  export type Habit_completionsCreateArgs = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
    /**
     * The data needed to create a Habit_completions.
     * 
    **/
    data: XOR<Habit_completionsCreateInput, Habit_completionsUncheckedCreateInput>
  }


  /**
   * Habit_completions createMany
   */
  export type Habit_completionsCreateManyArgs = {
    /**
     * The data used to create many Habit_completions.
     * 
    **/
    data: Enumerable<Habit_completionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Habit_completions update
   */
  export type Habit_completionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
    /**
     * The data needed to update a Habit_completions.
     * 
    **/
    data: XOR<Habit_completionsUpdateInput, Habit_completionsUncheckedUpdateInput>
    /**
     * Choose, which Habit_completions to update.
     * 
    **/
    where: Habit_completionsWhereUniqueInput
  }


  /**
   * Habit_completions updateMany
   */
  export type Habit_completionsUpdateManyArgs = {
    /**
     * The data used to update Habit_completions.
     * 
    **/
    data: XOR<Habit_completionsUpdateManyMutationInput, Habit_completionsUncheckedUpdateManyInput>
    /**
     * Filter which Habit_completions to update
     * 
    **/
    where?: Habit_completionsWhereInput
  }


  /**
   * Habit_completions upsert
   */
  export type Habit_completionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
    /**
     * The filter to search for the Habit_completions to update in case it exists.
     * 
    **/
    where: Habit_completionsWhereUniqueInput
    /**
     * In case the Habit_completions found by the `where` argument doesn't exist, create a new Habit_completions with this data.
     * 
    **/
    create: XOR<Habit_completionsCreateInput, Habit_completionsUncheckedCreateInput>
    /**
     * In case the Habit_completions was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Habit_completionsUpdateInput, Habit_completionsUncheckedUpdateInput>
  }


  /**
   * Habit_completions delete
   */
  export type Habit_completionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
    /**
     * Filter which Habit_completions to delete.
     * 
    **/
    where: Habit_completionsWhereUniqueInput
  }


  /**
   * Habit_completions deleteMany
   */
  export type Habit_completionsDeleteManyArgs = {
    /**
     * Filter which Habit_completions to delete
     * 
    **/
    where?: Habit_completionsWhereInput
  }


  /**
   * Habit_completions without action
   */
  export type Habit_completionsArgs = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
  }



  /**
   * Model Habits
   */


  export type AggregateHabits = {
    _count: HabitsCountAggregateOutputType | null
    _avg: HabitsAvgAggregateOutputType | null
    _sum: HabitsSumAggregateOutputType | null
    _min: HabitsMinAggregateOutputType | null
    _max: HabitsMaxAggregateOutputType | null
  }

  export type HabitsAvgAggregateOutputType = {
    amount: number | null
  }

  export type HabitsSumAggregateOutputType = {
    amount: number | null
  }

  export type HabitsMinAggregateOutputType = {
    id: string | null
    amount: number | null
    time: Date | null
    monday: boolean | null
    tuesday: boolean | null
    wednesday: boolean | null
    thursday: boolean | null
    friday: boolean | null
    saturday: boolean | null
    sunday: boolean | null
    name: string | null
    icon: string | null
    color: string | null
    habit_type: habit_type | null
    period: period | null
    team_id: string | null
    user_id: string | null
    electric_user_id: string | null
  }

  export type HabitsMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    time: Date | null
    monday: boolean | null
    tuesday: boolean | null
    wednesday: boolean | null
    thursday: boolean | null
    friday: boolean | null
    saturday: boolean | null
    sunday: boolean | null
    name: string | null
    icon: string | null
    color: string | null
    habit_type: habit_type | null
    period: period | null
    team_id: string | null
    user_id: string | null
    electric_user_id: string | null
  }

  export type HabitsCountAggregateOutputType = {
    id: number
    amount: number
    time: number
    monday: number
    tuesday: number
    wednesday: number
    thursday: number
    friday: number
    saturday: number
    sunday: number
    name: number
    icon: number
    color: number
    habit_type: number
    period: number
    team_id: number
    user_id: number
    electric_user_id: number
    _all: number
  }


  export type HabitsAvgAggregateInputType = {
    amount?: true
  }

  export type HabitsSumAggregateInputType = {
    amount?: true
  }

  export type HabitsMinAggregateInputType = {
    id?: true
    amount?: true
    time?: true
    monday?: true
    tuesday?: true
    wednesday?: true
    thursday?: true
    friday?: true
    saturday?: true
    sunday?: true
    name?: true
    icon?: true
    color?: true
    habit_type?: true
    period?: true
    team_id?: true
    user_id?: true
    electric_user_id?: true
  }

  export type HabitsMaxAggregateInputType = {
    id?: true
    amount?: true
    time?: true
    monday?: true
    tuesday?: true
    wednesday?: true
    thursday?: true
    friday?: true
    saturday?: true
    sunday?: true
    name?: true
    icon?: true
    color?: true
    habit_type?: true
    period?: true
    team_id?: true
    user_id?: true
    electric_user_id?: true
  }

  export type HabitsCountAggregateInputType = {
    id?: true
    amount?: true
    time?: true
    monday?: true
    tuesday?: true
    wednesday?: true
    thursday?: true
    friday?: true
    saturday?: true
    sunday?: true
    name?: true
    icon?: true
    color?: true
    habit_type?: true
    period?: true
    team_id?: true
    user_id?: true
    electric_user_id?: true
    _all?: true
  }

  export type HabitsAggregateArgs = {
    /**
     * Filter which Habits to aggregate.
     * 
    **/
    where?: HabitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     * 
    **/
    orderBy?: Enumerable<HabitsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: HabitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitsMaxAggregateInputType
  }

  export type GetHabitsAggregateType<T extends HabitsAggregateArgs> = {
        [P in keyof T & keyof AggregateHabits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabits[P]>
      : GetScalarType<T[P], AggregateHabits[P]>
  }




  export type HabitsGroupByArgs = {
    where?: HabitsWhereInput
    orderBy?: Enumerable<HabitsOrderByWithAggregationInput>
    by: Array<HabitsScalarFieldEnum>
    having?: HabitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitsCountAggregateInputType | true
    _avg?: HabitsAvgAggregateInputType
    _sum?: HabitsSumAggregateInputType
    _min?: HabitsMinAggregateInputType
    _max?: HabitsMaxAggregateInputType
  }


  export type HabitsGroupByOutputType = {
    id: string
    amount: number
    time: Date
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    team_id: string | null
    user_id: string | null
    electric_user_id: string | null
    _count: HabitsCountAggregateOutputType | null
    _avg: HabitsAvgAggregateOutputType | null
    _sum: HabitsSumAggregateOutputType | null
    _min: HabitsMinAggregateOutputType | null
    _max: HabitsMaxAggregateOutputType | null
  }

  type GetHabitsGroupByPayload<T extends HabitsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<HabitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitsGroupByOutputType[P]>
            : GetScalarType<T[P], HabitsGroupByOutputType[P]>
        }
      >
    >


  export type HabitsSelect = {
    id?: boolean
    amount?: boolean
    time?: boolean
    monday?: boolean
    tuesday?: boolean
    wednesday?: boolean
    thursday?: boolean
    friday?: boolean
    saturday?: boolean
    sunday?: boolean
    name?: boolean
    icon?: boolean
    color?: boolean
    habit_type?: boolean
    period?: boolean
    team_id?: boolean
    user_id?: boolean
    electric_user_id?: boolean
    habit_completions?: boolean | Habits$habit_completionsArgs
    teams?: boolean | TeamsArgs
    habits_completers?: boolean | Habits$habits_completersArgs
    _count?: boolean | HabitsCountOutputTypeArgs
  }


  export type HabitsInclude = {
    habit_completions?: boolean | Habits$habit_completionsArgs
    teams?: boolean | TeamsArgs
    habits_completers?: boolean | Habits$habits_completersArgs
    _count?: boolean | HabitsCountOutputTypeArgs
  } 

  export type HabitsGetPayload<S extends boolean | null | undefined | HabitsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Habits :
    S extends undefined ? never :
    S extends { include: any } & (HabitsArgs | HabitsFindManyArgs)
    ? Habits  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'habit_completions' ? Array < Habit_completionsGetPayload<S['include'][P]>>  :
        P extends 'teams' ? TeamsGetPayload<S['include'][P]> | null :
        P extends 'habits_completers' ? Array < Habits_completersGetPayload<S['include'][P]>>  :
        P extends '_count' ? HabitsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HabitsArgs | HabitsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'habit_completions' ? Array < Habit_completionsGetPayload<S['select'][P]>>  :
        P extends 'teams' ? TeamsGetPayload<S['select'][P]> | null :
        P extends 'habits_completers' ? Array < Habits_completersGetPayload<S['select'][P]>>  :
        P extends '_count' ? HabitsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Habits ? Habits[P] : never
  } 
      : Habits


  type HabitsCountArgs = Merge<
    Omit<HabitsFindManyArgs, 'select' | 'include'> & {
      select?: HabitsCountAggregateInputType | true
    }
  >

  export interface HabitsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Habits that matches the filter.
     * @param {HabitsFindUniqueArgs} args - Arguments to find a Habits
     * @example
     * // Get one Habits
     * const habits = await prisma.habits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HabitsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HabitsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Habits'> extends True ? Prisma__HabitsClient<HabitsGetPayload<T>> : Prisma__HabitsClient<HabitsGetPayload<T> | null, null>

    /**
     * Find one Habits that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HabitsFindUniqueOrThrowArgs} args - Arguments to find a Habits
     * @example
     * // Get one Habits
     * const habits = await prisma.habits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HabitsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HabitsFindUniqueOrThrowArgs>
    ): Prisma__HabitsClient<HabitsGetPayload<T>>

    /**
     * Find the first Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsFindFirstArgs} args - Arguments to find a Habits
     * @example
     * // Get one Habits
     * const habits = await prisma.habits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HabitsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HabitsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Habits'> extends True ? Prisma__HabitsClient<HabitsGetPayload<T>> : Prisma__HabitsClient<HabitsGetPayload<T> | null, null>

    /**
     * Find the first Habits that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsFindFirstOrThrowArgs} args - Arguments to find a Habits
     * @example
     * // Get one Habits
     * const habits = await prisma.habits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HabitsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HabitsFindFirstOrThrowArgs>
    ): Prisma__HabitsClient<HabitsGetPayload<T>>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habits.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitsWithIdOnly = await prisma.habits.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HabitsFindManyArgs>(
      args?: SelectSubset<T, HabitsFindManyArgs>
    ): PrismaPromise<Array<HabitsGetPayload<T>>>

    /**
     * Create a Habits.
     * @param {HabitsCreateArgs} args - Arguments to create a Habits.
     * @example
     * // Create one Habits
     * const Habits = await prisma.habits.create({
     *   data: {
     *     // ... data to create a Habits
     *   }
     * })
     * 
    **/
    create<T extends HabitsCreateArgs>(
      args: SelectSubset<T, HabitsCreateArgs>
    ): Prisma__HabitsClient<HabitsGetPayload<T>>

    /**
     * Create many Habits.
     *     @param {HabitsCreateManyArgs} args - Arguments to create many Habits.
     *     @example
     *     // Create many Habits
     *     const habits = await prisma.habits.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HabitsCreateManyArgs>(
      args?: SelectSubset<T, HabitsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Habits.
     * @param {HabitsDeleteArgs} args - Arguments to delete one Habits.
     * @example
     * // Delete one Habits
     * const Habits = await prisma.habits.delete({
     *   where: {
     *     // ... filter to delete one Habits
     *   }
     * })
     * 
    **/
    delete<T extends HabitsDeleteArgs>(
      args: SelectSubset<T, HabitsDeleteArgs>
    ): Prisma__HabitsClient<HabitsGetPayload<T>>

    /**
     * Update one Habits.
     * @param {HabitsUpdateArgs} args - Arguments to update one Habits.
     * @example
     * // Update one Habits
     * const habits = await prisma.habits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HabitsUpdateArgs>(
      args: SelectSubset<T, HabitsUpdateArgs>
    ): Prisma__HabitsClient<HabitsGetPayload<T>>

    /**
     * Delete zero or more Habits.
     * @param {HabitsDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HabitsDeleteManyArgs>(
      args?: SelectSubset<T, HabitsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habits = await prisma.habits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HabitsUpdateManyArgs>(
      args: SelectSubset<T, HabitsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Habits.
     * @param {HabitsUpsertArgs} args - Arguments to update or create a Habits.
     * @example
     * // Update or create a Habits
     * const habits = await prisma.habits.upsert({
     *   create: {
     *     // ... data to create a Habits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habits we want to update
     *   }
     * })
    **/
    upsert<T extends HabitsUpsertArgs>(
      args: SelectSubset<T, HabitsUpsertArgs>
    ): Prisma__HabitsClient<HabitsGetPayload<T>>

    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habits.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitsCountArgs>(
      args?: Subset<T, HabitsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitsAggregateArgs>(args: Subset<T, HabitsAggregateArgs>): PrismaPromise<GetHabitsAggregateType<T>>

    /**
     * Group by Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitsGroupByArgs['orderBy'] }
        : { orderBy?: HabitsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Habits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HabitsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    habit_completions<T extends Habits$habit_completionsArgs= {}>(args?: Subset<T, Habits$habit_completionsArgs>): PrismaPromise<Array<Habit_completionsGetPayload<T>>| Null>;

    teams<T extends TeamsArgs= {}>(args?: Subset<T, TeamsArgs>): Prisma__TeamsClient<TeamsGetPayload<T> | Null>;

    habits_completers<T extends Habits$habits_completersArgs= {}>(args?: Subset<T, Habits$habits_completersArgs>): PrismaPromise<Array<Habits_completersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Habits base type for findUnique actions
   */
  export type HabitsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
    /**
     * Filter, which Habits to fetch.
     * 
    **/
    where: HabitsWhereUniqueInput
  }

  /**
   * Habits findUnique
   */
  export interface HabitsFindUniqueArgs extends HabitsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Habits findUniqueOrThrow
   */
  export type HabitsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
    /**
     * Filter, which Habits to fetch.
     * 
    **/
    where: HabitsWhereUniqueInput
  }


  /**
   * Habits base type for findFirst actions
   */
  export type HabitsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
    /**
     * Filter, which Habits to fetch.
     * 
    **/
    where?: HabitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     * 
    **/
    orderBy?: Enumerable<HabitsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     * 
    **/
    cursor?: HabitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     * 
    **/
    distinct?: Enumerable<HabitsScalarFieldEnum>
  }

  /**
   * Habits findFirst
   */
  export interface HabitsFindFirstArgs extends HabitsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Habits findFirstOrThrow
   */
  export type HabitsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
    /**
     * Filter, which Habits to fetch.
     * 
    **/
    where?: HabitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     * 
    **/
    orderBy?: Enumerable<HabitsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     * 
    **/
    cursor?: HabitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     * 
    **/
    distinct?: Enumerable<HabitsScalarFieldEnum>
  }


  /**
   * Habits findMany
   */
  export type HabitsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
    /**
     * Filter, which Habits to fetch.
     * 
    **/
    where?: HabitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     * 
    **/
    orderBy?: Enumerable<HabitsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     * 
    **/
    cursor?: HabitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     * 
    **/
    skip?: number
    distinct?: Enumerable<HabitsScalarFieldEnum>
  }


  /**
   * Habits create
   */
  export type HabitsCreateArgs = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
    /**
     * The data needed to create a Habits.
     * 
    **/
    data: XOR<HabitsCreateInput, HabitsUncheckedCreateInput>
  }


  /**
   * Habits createMany
   */
  export type HabitsCreateManyArgs = {
    /**
     * The data used to create many Habits.
     * 
    **/
    data: Enumerable<HabitsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Habits update
   */
  export type HabitsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
    /**
     * The data needed to update a Habits.
     * 
    **/
    data: XOR<HabitsUpdateInput, HabitsUncheckedUpdateInput>
    /**
     * Choose, which Habits to update.
     * 
    **/
    where: HabitsWhereUniqueInput
  }


  /**
   * Habits updateMany
   */
  export type HabitsUpdateManyArgs = {
    /**
     * The data used to update Habits.
     * 
    **/
    data: XOR<HabitsUpdateManyMutationInput, HabitsUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     * 
    **/
    where?: HabitsWhereInput
  }


  /**
   * Habits upsert
   */
  export type HabitsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
    /**
     * The filter to search for the Habits to update in case it exists.
     * 
    **/
    where: HabitsWhereUniqueInput
    /**
     * In case the Habits found by the `where` argument doesn't exist, create a new Habits with this data.
     * 
    **/
    create: XOR<HabitsCreateInput, HabitsUncheckedCreateInput>
    /**
     * In case the Habits was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<HabitsUpdateInput, HabitsUncheckedUpdateInput>
  }


  /**
   * Habits delete
   */
  export type HabitsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
    /**
     * Filter which Habits to delete.
     * 
    **/
    where: HabitsWhereUniqueInput
  }


  /**
   * Habits deleteMany
   */
  export type HabitsDeleteManyArgs = {
    /**
     * Filter which Habits to delete
     * 
    **/
    where?: HabitsWhereInput
  }


  /**
   * Habits.habit_completions
   */
  export type Habits$habit_completionsArgs = {
    /**
     * Select specific fields to fetch from the Habit_completions
     * 
    **/
    select?: Habit_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habit_completionsInclude | null
    where?: Habit_completionsWhereInput
    orderBy?: Enumerable<Habit_completionsOrderByWithRelationInput>
    cursor?: Habit_completionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Habit_completionsScalarFieldEnum>
  }


  /**
   * Habits.habits_completers
   */
  export type Habits$habits_completersArgs = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
    where?: Habits_completersWhereInput
    orderBy?: Enumerable<Habits_completersOrderByWithRelationInput>
    cursor?: Habits_completersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Habits_completersScalarFieldEnum>
  }


  /**
   * Habits without action
   */
  export type HabitsArgs = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
  }



  /**
   * Model Habits_completers
   */


  export type AggregateHabits_completers = {
    _count: Habits_completersCountAggregateOutputType | null
    _min: Habits_completersMinAggregateOutputType | null
    _max: Habits_completersMaxAggregateOutputType | null
  }

  export type Habits_completersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    habit_id: string | null
  }

  export type Habits_completersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    habit_id: string | null
  }

  export type Habits_completersCountAggregateOutputType = {
    id: number
    user_id: number
    habit_id: number
    _all: number
  }


  export type Habits_completersMinAggregateInputType = {
    id?: true
    user_id?: true
    habit_id?: true
  }

  export type Habits_completersMaxAggregateInputType = {
    id?: true
    user_id?: true
    habit_id?: true
  }

  export type Habits_completersCountAggregateInputType = {
    id?: true
    user_id?: true
    habit_id?: true
    _all?: true
  }

  export type Habits_completersAggregateArgs = {
    /**
     * Filter which Habits_completers to aggregate.
     * 
    **/
    where?: Habits_completersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits_completers to fetch.
     * 
    **/
    orderBy?: Enumerable<Habits_completersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Habits_completersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits_completers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits_completers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits_completers
    **/
    _count?: true | Habits_completersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Habits_completersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Habits_completersMaxAggregateInputType
  }

  export type GetHabits_completersAggregateType<T extends Habits_completersAggregateArgs> = {
        [P in keyof T & keyof AggregateHabits_completers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabits_completers[P]>
      : GetScalarType<T[P], AggregateHabits_completers[P]>
  }




  export type Habits_completersGroupByArgs = {
    where?: Habits_completersWhereInput
    orderBy?: Enumerable<Habits_completersOrderByWithAggregationInput>
    by: Array<Habits_completersScalarFieldEnum>
    having?: Habits_completersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Habits_completersCountAggregateInputType | true
    _min?: Habits_completersMinAggregateInputType
    _max?: Habits_completersMaxAggregateInputType
  }


  export type Habits_completersGroupByOutputType = {
    id: string
    user_id: string
    habit_id: string
    _count: Habits_completersCountAggregateOutputType | null
    _min: Habits_completersMinAggregateOutputType | null
    _max: Habits_completersMaxAggregateOutputType | null
  }

  type GetHabits_completersGroupByPayload<T extends Habits_completersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Habits_completersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Habits_completersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Habits_completersGroupByOutputType[P]>
            : GetScalarType<T[P], Habits_completersGroupByOutputType[P]>
        }
      >
    >


  export type Habits_completersSelect = {
    id?: boolean
    user_id?: boolean
    habit_id?: boolean
    habits?: boolean | HabitsArgs
  }


  export type Habits_completersInclude = {
    habits?: boolean | HabitsArgs
  } 

  export type Habits_completersGetPayload<S extends boolean | null | undefined | Habits_completersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Habits_completers :
    S extends undefined ? never :
    S extends { include: any } & (Habits_completersArgs | Habits_completersFindManyArgs)
    ? Habits_completers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'habits' ? HabitsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Habits_completersArgs | Habits_completersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'habits' ? HabitsGetPayload<S['select'][P]> :  P extends keyof Habits_completers ? Habits_completers[P] : never
  } 
      : Habits_completers


  type Habits_completersCountArgs = Merge<
    Omit<Habits_completersFindManyArgs, 'select' | 'include'> & {
      select?: Habits_completersCountAggregateInputType | true
    }
  >

  export interface Habits_completersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Habits_completers that matches the filter.
     * @param {Habits_completersFindUniqueArgs} args - Arguments to find a Habits_completers
     * @example
     * // Get one Habits_completers
     * const habits_completers = await prisma.habits_completers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Habits_completersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Habits_completersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Habits_completers'> extends True ? Prisma__Habits_completersClient<Habits_completersGetPayload<T>> : Prisma__Habits_completersClient<Habits_completersGetPayload<T> | null, null>

    /**
     * Find one Habits_completers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Habits_completersFindUniqueOrThrowArgs} args - Arguments to find a Habits_completers
     * @example
     * // Get one Habits_completers
     * const habits_completers = await prisma.habits_completers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Habits_completersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Habits_completersFindUniqueOrThrowArgs>
    ): Prisma__Habits_completersClient<Habits_completersGetPayload<T>>

    /**
     * Find the first Habits_completers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completersFindFirstArgs} args - Arguments to find a Habits_completers
     * @example
     * // Get one Habits_completers
     * const habits_completers = await prisma.habits_completers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Habits_completersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Habits_completersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Habits_completers'> extends True ? Prisma__Habits_completersClient<Habits_completersGetPayload<T>> : Prisma__Habits_completersClient<Habits_completersGetPayload<T> | null, null>

    /**
     * Find the first Habits_completers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completersFindFirstOrThrowArgs} args - Arguments to find a Habits_completers
     * @example
     * // Get one Habits_completers
     * const habits_completers = await prisma.habits_completers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Habits_completersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Habits_completersFindFirstOrThrowArgs>
    ): Prisma__Habits_completersClient<Habits_completersGetPayload<T>>

    /**
     * Find zero or more Habits_completers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits_completers
     * const habits_completers = await prisma.habits_completers.findMany()
     * 
     * // Get first 10 Habits_completers
     * const habits_completers = await prisma.habits_completers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habits_completersWithIdOnly = await prisma.habits_completers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Habits_completersFindManyArgs>(
      args?: SelectSubset<T, Habits_completersFindManyArgs>
    ): PrismaPromise<Array<Habits_completersGetPayload<T>>>

    /**
     * Create a Habits_completers.
     * @param {Habits_completersCreateArgs} args - Arguments to create a Habits_completers.
     * @example
     * // Create one Habits_completers
     * const Habits_completers = await prisma.habits_completers.create({
     *   data: {
     *     // ... data to create a Habits_completers
     *   }
     * })
     * 
    **/
    create<T extends Habits_completersCreateArgs>(
      args: SelectSubset<T, Habits_completersCreateArgs>
    ): Prisma__Habits_completersClient<Habits_completersGetPayload<T>>

    /**
     * Create many Habits_completers.
     *     @param {Habits_completersCreateManyArgs} args - Arguments to create many Habits_completers.
     *     @example
     *     // Create many Habits_completers
     *     const habits_completers = await prisma.habits_completers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Habits_completersCreateManyArgs>(
      args?: SelectSubset<T, Habits_completersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Habits_completers.
     * @param {Habits_completersDeleteArgs} args - Arguments to delete one Habits_completers.
     * @example
     * // Delete one Habits_completers
     * const Habits_completers = await prisma.habits_completers.delete({
     *   where: {
     *     // ... filter to delete one Habits_completers
     *   }
     * })
     * 
    **/
    delete<T extends Habits_completersDeleteArgs>(
      args: SelectSubset<T, Habits_completersDeleteArgs>
    ): Prisma__Habits_completersClient<Habits_completersGetPayload<T>>

    /**
     * Update one Habits_completers.
     * @param {Habits_completersUpdateArgs} args - Arguments to update one Habits_completers.
     * @example
     * // Update one Habits_completers
     * const habits_completers = await prisma.habits_completers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Habits_completersUpdateArgs>(
      args: SelectSubset<T, Habits_completersUpdateArgs>
    ): Prisma__Habits_completersClient<Habits_completersGetPayload<T>>

    /**
     * Delete zero or more Habits_completers.
     * @param {Habits_completersDeleteManyArgs} args - Arguments to filter Habits_completers to delete.
     * @example
     * // Delete a few Habits_completers
     * const { count } = await prisma.habits_completers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Habits_completersDeleteManyArgs>(
      args?: SelectSubset<T, Habits_completersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits_completers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits_completers
     * const habits_completers = await prisma.habits_completers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Habits_completersUpdateManyArgs>(
      args: SelectSubset<T, Habits_completersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Habits_completers.
     * @param {Habits_completersUpsertArgs} args - Arguments to update or create a Habits_completers.
     * @example
     * // Update or create a Habits_completers
     * const habits_completers = await prisma.habits_completers.upsert({
     *   create: {
     *     // ... data to create a Habits_completers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habits_completers we want to update
     *   }
     * })
    **/
    upsert<T extends Habits_completersUpsertArgs>(
      args: SelectSubset<T, Habits_completersUpsertArgs>
    ): Prisma__Habits_completersClient<Habits_completersGetPayload<T>>

    /**
     * Count the number of Habits_completers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completersCountArgs} args - Arguments to filter Habits_completers to count.
     * @example
     * // Count the number of Habits_completers
     * const count = await prisma.habits_completers.count({
     *   where: {
     *     // ... the filter for the Habits_completers we want to count
     *   }
     * })
    **/
    count<T extends Habits_completersCountArgs>(
      args?: Subset<T, Habits_completersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Habits_completersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habits_completers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Habits_completersAggregateArgs>(args: Subset<T, Habits_completersAggregateArgs>): PrismaPromise<GetHabits_completersAggregateType<T>>

    /**
     * Group by Habits_completers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Habits_completersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Habits_completersGroupByArgs['orderBy'] }
        : { orderBy?: Habits_completersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Habits_completersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabits_completersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Habits_completers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Habits_completersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    habits<T extends HabitsArgs= {}>(args?: Subset<T, HabitsArgs>): Prisma__HabitsClient<HabitsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Habits_completers base type for findUnique actions
   */
  export type Habits_completersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
    /**
     * Filter, which Habits_completers to fetch.
     * 
    **/
    where: Habits_completersWhereUniqueInput
  }

  /**
   * Habits_completers findUnique
   */
  export interface Habits_completersFindUniqueArgs extends Habits_completersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Habits_completers findUniqueOrThrow
   */
  export type Habits_completersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
    /**
     * Filter, which Habits_completers to fetch.
     * 
    **/
    where: Habits_completersWhereUniqueInput
  }


  /**
   * Habits_completers base type for findFirst actions
   */
  export type Habits_completersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
    /**
     * Filter, which Habits_completers to fetch.
     * 
    **/
    where?: Habits_completersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits_completers to fetch.
     * 
    **/
    orderBy?: Enumerable<Habits_completersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits_completers.
     * 
    **/
    cursor?: Habits_completersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits_completers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits_completers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits_completers.
     * 
    **/
    distinct?: Enumerable<Habits_completersScalarFieldEnum>
  }

  /**
   * Habits_completers findFirst
   */
  export interface Habits_completersFindFirstArgs extends Habits_completersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Habits_completers findFirstOrThrow
   */
  export type Habits_completersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
    /**
     * Filter, which Habits_completers to fetch.
     * 
    **/
    where?: Habits_completersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits_completers to fetch.
     * 
    **/
    orderBy?: Enumerable<Habits_completersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits_completers.
     * 
    **/
    cursor?: Habits_completersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits_completers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits_completers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits_completers.
     * 
    **/
    distinct?: Enumerable<Habits_completersScalarFieldEnum>
  }


  /**
   * Habits_completers findMany
   */
  export type Habits_completersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
    /**
     * Filter, which Habits_completers to fetch.
     * 
    **/
    where?: Habits_completersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits_completers to fetch.
     * 
    **/
    orderBy?: Enumerable<Habits_completersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits_completers.
     * 
    **/
    cursor?: Habits_completersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits_completers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits_completers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Habits_completersScalarFieldEnum>
  }


  /**
   * Habits_completers create
   */
  export type Habits_completersCreateArgs = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
    /**
     * The data needed to create a Habits_completers.
     * 
    **/
    data: XOR<Habits_completersCreateInput, Habits_completersUncheckedCreateInput>
  }


  /**
   * Habits_completers createMany
   */
  export type Habits_completersCreateManyArgs = {
    /**
     * The data used to create many Habits_completers.
     * 
    **/
    data: Enumerable<Habits_completersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Habits_completers update
   */
  export type Habits_completersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
    /**
     * The data needed to update a Habits_completers.
     * 
    **/
    data: XOR<Habits_completersUpdateInput, Habits_completersUncheckedUpdateInput>
    /**
     * Choose, which Habits_completers to update.
     * 
    **/
    where: Habits_completersWhereUniqueInput
  }


  /**
   * Habits_completers updateMany
   */
  export type Habits_completersUpdateManyArgs = {
    /**
     * The data used to update Habits_completers.
     * 
    **/
    data: XOR<Habits_completersUpdateManyMutationInput, Habits_completersUncheckedUpdateManyInput>
    /**
     * Filter which Habits_completers to update
     * 
    **/
    where?: Habits_completersWhereInput
  }


  /**
   * Habits_completers upsert
   */
  export type Habits_completersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
    /**
     * The filter to search for the Habits_completers to update in case it exists.
     * 
    **/
    where: Habits_completersWhereUniqueInput
    /**
     * In case the Habits_completers found by the `where` argument doesn't exist, create a new Habits_completers with this data.
     * 
    **/
    create: XOR<Habits_completersCreateInput, Habits_completersUncheckedCreateInput>
    /**
     * In case the Habits_completers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Habits_completersUpdateInput, Habits_completersUncheckedUpdateInput>
  }


  /**
   * Habits_completers delete
   */
  export type Habits_completersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
    /**
     * Filter which Habits_completers to delete.
     * 
    **/
    where: Habits_completersWhereUniqueInput
  }


  /**
   * Habits_completers deleteMany
   */
  export type Habits_completersDeleteManyArgs = {
    /**
     * Filter which Habits_completers to delete
     * 
    **/
    where?: Habits_completersWhereInput
  }


  /**
   * Habits_completers without action
   */
  export type Habits_completersArgs = {
    /**
     * Select specific fields to fetch from the Habits_completers
     * 
    **/
    select?: Habits_completersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completersInclude | null
  }



  /**
   * Model Profiles
   */


  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: string | null
    email: string | null
    nickname: string | null
    user_id: string | null
    electric_user_id: string | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nickname: string | null
    user_id: string | null
    electric_user_id: string | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    email: number
    nickname: number
    user_id: number
    electric_user_id: number
    _all: number
  }


  export type ProfilesMinAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    user_id?: true
    electric_user_id?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    user_id?: true
    electric_user_id?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    user_id?: true
    electric_user_id?: true
    _all?: true
  }

  export type ProfilesAggregateArgs = {
    /**
     * Filter which Profiles to aggregate.
     * 
    **/
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfilesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type ProfilesGroupByArgs = {
    where?: ProfilesWhereInput
    orderBy?: Enumerable<ProfilesOrderByWithAggregationInput>
    by: Array<ProfilesScalarFieldEnum>
    having?: ProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }


  export type ProfilesGroupByOutputType = {
    id: string
    email: string
    nickname: string
    user_id: string
    electric_user_id: string | null
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends ProfilesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type ProfilesSelect = {
    id?: boolean
    email?: boolean
    nickname?: boolean
    user_id?: boolean
    electric_user_id?: boolean
  }


  export type ProfilesGetPayload<S extends boolean | null | undefined | ProfilesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Profiles :
    S extends undefined ? never :
    S extends { include: any } & (ProfilesArgs | ProfilesFindManyArgs)
    ? Profiles 
    : S extends { select: any } & (ProfilesArgs | ProfilesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Profiles ? Profiles[P] : never
  } 
      : Profiles


  type ProfilesCountArgs = Merge<
    Omit<ProfilesFindManyArgs, 'select' | 'include'> & {
      select?: ProfilesCountAggregateInputType | true
    }
  >

  export interface ProfilesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {ProfilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfilesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProfilesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Profiles'> extends True ? Prisma__ProfilesClient<ProfilesGetPayload<T>> : Prisma__ProfilesClient<ProfilesGetPayload<T> | null, null>

    /**
     * Find one Profiles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfilesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProfilesFindUniqueOrThrowArgs>
    ): Prisma__ProfilesClient<ProfilesGetPayload<T>>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfilesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProfilesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Profiles'> extends True ? Prisma__ProfilesClient<ProfilesGetPayload<T>> : Prisma__ProfilesClient<ProfilesGetPayload<T> | null, null>

    /**
     * Find the first Profiles that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfilesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProfilesFindFirstOrThrowArgs>
    ): Prisma__ProfilesClient<ProfilesGetPayload<T>>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfilesFindManyArgs>(
      args?: SelectSubset<T, ProfilesFindManyArgs>
    ): PrismaPromise<Array<ProfilesGetPayload<T>>>

    /**
     * Create a Profiles.
     * @param {ProfilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
    **/
    create<T extends ProfilesCreateArgs>(
      args: SelectSubset<T, ProfilesCreateArgs>
    ): Prisma__ProfilesClient<ProfilesGetPayload<T>>

    /**
     * Create many Profiles.
     *     @param {ProfilesCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profiles = await prisma.profiles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfilesCreateManyArgs>(
      args?: SelectSubset<T, ProfilesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Profiles.
     * @param {ProfilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
    **/
    delete<T extends ProfilesDeleteArgs>(
      args: SelectSubset<T, ProfilesDeleteArgs>
    ): Prisma__ProfilesClient<ProfilesGetPayload<T>>

    /**
     * Update one Profiles.
     * @param {ProfilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfilesUpdateArgs>(
      args: SelectSubset<T, ProfilesUpdateArgs>
    ): Prisma__ProfilesClient<ProfilesGetPayload<T>>

    /**
     * Delete zero or more Profiles.
     * @param {ProfilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfilesDeleteManyArgs>(
      args?: SelectSubset<T, ProfilesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfilesUpdateManyArgs>(
      args: SelectSubset<T, ProfilesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profiles.
     * @param {ProfilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
    **/
    upsert<T extends ProfilesUpsertArgs>(
      args: SelectSubset<T, ProfilesUpsertArgs>
    ): Prisma__ProfilesClient<ProfilesGetPayload<T>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfilesCountArgs>(
      args?: Subset<T, ProfilesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilesGroupByArgs['orderBy'] }
        : { orderBy?: ProfilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProfilesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Profiles base type for findUnique actions
   */
  export type ProfilesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Profiles
     * 
    **/
    select?: ProfilesSelect | null
    /**
     * Filter, which Profiles to fetch.
     * 
    **/
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findUnique
   */
  export interface ProfilesFindUniqueArgs extends ProfilesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profiles findUniqueOrThrow
   */
  export type ProfilesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Profiles
     * 
    **/
    select?: ProfilesSelect | null
    /**
     * Filter, which Profiles to fetch.
     * 
    **/
    where: ProfilesWhereUniqueInput
  }


  /**
   * Profiles base type for findFirst actions
   */
  export type ProfilesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Profiles
     * 
    **/
    select?: ProfilesSelect | null
    /**
     * Filter, which Profiles to fetch.
     * 
    **/
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfilesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     * 
    **/
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     * 
    **/
    distinct?: Enumerable<ProfilesScalarFieldEnum>
  }

  /**
   * Profiles findFirst
   */
  export interface ProfilesFindFirstArgs extends ProfilesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profiles findFirstOrThrow
   */
  export type ProfilesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Profiles
     * 
    **/
    select?: ProfilesSelect | null
    /**
     * Filter, which Profiles to fetch.
     * 
    **/
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfilesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     * 
    **/
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     * 
    **/
    distinct?: Enumerable<ProfilesScalarFieldEnum>
  }


  /**
   * Profiles findMany
   */
  export type ProfilesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Profiles
     * 
    **/
    select?: ProfilesSelect | null
    /**
     * Filter, which Profiles to fetch.
     * 
    **/
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfilesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     * 
    **/
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProfilesScalarFieldEnum>
  }


  /**
   * Profiles create
   */
  export type ProfilesCreateArgs = {
    /**
     * Select specific fields to fetch from the Profiles
     * 
    **/
    select?: ProfilesSelect | null
    /**
     * The data needed to create a Profiles.
     * 
    **/
    data: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
  }


  /**
   * Profiles createMany
   */
  export type ProfilesCreateManyArgs = {
    /**
     * The data used to create many Profiles.
     * 
    **/
    data: Enumerable<ProfilesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Profiles update
   */
  export type ProfilesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Profiles
     * 
    **/
    select?: ProfilesSelect | null
    /**
     * The data needed to update a Profiles.
     * 
    **/
    data: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
    /**
     * Choose, which Profiles to update.
     * 
    **/
    where: ProfilesWhereUniqueInput
  }


  /**
   * Profiles updateMany
   */
  export type ProfilesUpdateManyArgs = {
    /**
     * The data used to update Profiles.
     * 
    **/
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     * 
    **/
    where?: ProfilesWhereInput
  }


  /**
   * Profiles upsert
   */
  export type ProfilesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Profiles
     * 
    **/
    select?: ProfilesSelect | null
    /**
     * The filter to search for the Profiles to update in case it exists.
     * 
    **/
    where: ProfilesWhereUniqueInput
    /**
     * In case the Profiles found by the `where` argument doesn't exist, create a new Profiles with this data.
     * 
    **/
    create: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
    /**
     * In case the Profiles was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
  }


  /**
   * Profiles delete
   */
  export type ProfilesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Profiles
     * 
    **/
    select?: ProfilesSelect | null
    /**
     * Filter which Profiles to delete.
     * 
    **/
    where: ProfilesWhereUniqueInput
  }


  /**
   * Profiles deleteMany
   */
  export type ProfilesDeleteManyArgs = {
    /**
     * Filter which Profiles to delete
     * 
    **/
    where?: ProfilesWhereInput
  }


  /**
   * Profiles without action
   */
  export type ProfilesArgs = {
    /**
     * Select specific fields to fetch from the Profiles
     * 
    **/
    select?: ProfilesSelect | null
  }



  /**
   * Model Teams
   */


  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsMinAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
    link_pswd: string | null
    link_exp: Date | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
    link_pswd: string | null
    link_exp: Date | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    link_pswd: number
    link_exp: number
    _all: number
  }


  export type TeamsMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    link_pswd?: true
    link_exp?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    link_pswd?: true
    link_exp?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    link_pswd?: true
    link_exp?: true
    _all?: true
  }

  export type TeamsAggregateArgs = {
    /**
     * Filter which Teams to aggregate.
     * 
    **/
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type TeamsGroupByArgs = {
    where?: TeamsWhereInput
    orderBy?: Enumerable<TeamsOrderByWithAggregationInput>
    by: Array<TeamsScalarFieldEnum>
    having?: TeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }


  export type TeamsGroupByOutputType = {
    id: string
    name: string
    user_id: string
    link_pswd: string
    link_exp: Date
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends TeamsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type TeamsSelect = {
    id?: boolean
    name?: boolean
    user_id?: boolean
    link_pswd?: boolean
    link_exp?: boolean
    habits?: boolean | Teams$habitsArgs
    teams_users?: boolean | Teams$teams_usersArgs
    _count?: boolean | TeamsCountOutputTypeArgs
  }


  export type TeamsInclude = {
    habits?: boolean | Teams$habitsArgs
    teams_users?: boolean | Teams$teams_usersArgs
    _count?: boolean | TeamsCountOutputTypeArgs
  } 

  export type TeamsGetPayload<S extends boolean | null | undefined | TeamsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Teams :
    S extends undefined ? never :
    S extends { include: any } & (TeamsArgs | TeamsFindManyArgs)
    ? Teams  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'habits' ? Array < HabitsGetPayload<S['include'][P]>>  :
        P extends 'teams_users' ? Array < Teams_usersGetPayload<S['include'][P]>>  :
        P extends '_count' ? TeamsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TeamsArgs | TeamsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'habits' ? Array < HabitsGetPayload<S['select'][P]>>  :
        P extends 'teams_users' ? Array < Teams_usersGetPayload<S['select'][P]>>  :
        P extends '_count' ? TeamsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Teams ? Teams[P] : never
  } 
      : Teams


  type TeamsCountArgs = Merge<
    Omit<TeamsFindManyArgs, 'select' | 'include'> & {
      select?: TeamsCountAggregateInputType | true
    }
  >

  export interface TeamsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Teams that matches the filter.
     * @param {TeamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TeamsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Teams'> extends True ? Prisma__TeamsClient<TeamsGetPayload<T>> : Prisma__TeamsClient<TeamsGetPayload<T> | null, null>

    /**
     * Find one Teams that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TeamsFindUniqueOrThrowArgs>
    ): Prisma__TeamsClient<TeamsGetPayload<T>>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TeamsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Teams'> extends True ? Prisma__TeamsClient<TeamsGetPayload<T>> : Prisma__TeamsClient<TeamsGetPayload<T> | null, null>

    /**
     * Find the first Teams that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TeamsFindFirstOrThrowArgs>
    ): Prisma__TeamsClient<TeamsGetPayload<T>>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamsFindManyArgs>(
      args?: SelectSubset<T, TeamsFindManyArgs>
    ): PrismaPromise<Array<TeamsGetPayload<T>>>

    /**
     * Create a Teams.
     * @param {TeamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
    **/
    create<T extends TeamsCreateArgs>(
      args: SelectSubset<T, TeamsCreateArgs>
    ): Prisma__TeamsClient<TeamsGetPayload<T>>

    /**
     * Create many Teams.
     *     @param {TeamsCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const teams = await prisma.teams.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamsCreateManyArgs>(
      args?: SelectSubset<T, TeamsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Teams.
     * @param {TeamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
    **/
    delete<T extends TeamsDeleteArgs>(
      args: SelectSubset<T, TeamsDeleteArgs>
    ): Prisma__TeamsClient<TeamsGetPayload<T>>

    /**
     * Update one Teams.
     * @param {TeamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamsUpdateArgs>(
      args: SelectSubset<T, TeamsUpdateArgs>
    ): Prisma__TeamsClient<TeamsGetPayload<T>>

    /**
     * Delete zero or more Teams.
     * @param {TeamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamsDeleteManyArgs>(
      args?: SelectSubset<T, TeamsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamsUpdateManyArgs>(
      args: SelectSubset<T, TeamsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Teams.
     * @param {TeamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
    **/
    upsert<T extends TeamsUpsertArgs>(
      args: SelectSubset<T, TeamsUpsertArgs>
    ): Prisma__TeamsClient<TeamsGetPayload<T>>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamsCountArgs>(
      args?: Subset<T, TeamsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsGroupByArgs['orderBy'] }
        : { orderBy?: TeamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TeamsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    habits<T extends Teams$habitsArgs= {}>(args?: Subset<T, Teams$habitsArgs>): PrismaPromise<Array<HabitsGetPayload<T>>| Null>;

    teams_users<T extends Teams$teams_usersArgs= {}>(args?: Subset<T, Teams$teams_usersArgs>): PrismaPromise<Array<Teams_usersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Teams base type for findUnique actions
   */
  export type TeamsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * Filter, which Teams to fetch.
     * 
    **/
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findUnique
   */
  export interface TeamsFindUniqueArgs extends TeamsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Teams findUniqueOrThrow
   */
  export type TeamsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * Filter, which Teams to fetch.
     * 
    **/
    where: TeamsWhereUniqueInput
  }


  /**
   * Teams base type for findFirst actions
   */
  export type TeamsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * Filter, which Teams to fetch.
     * 
    **/
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     * 
    **/
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     * 
    **/
    distinct?: Enumerable<TeamsScalarFieldEnum>
  }

  /**
   * Teams findFirst
   */
  export interface TeamsFindFirstArgs extends TeamsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Teams findFirstOrThrow
   */
  export type TeamsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * Filter, which Teams to fetch.
     * 
    **/
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     * 
    **/
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     * 
    **/
    distinct?: Enumerable<TeamsScalarFieldEnum>
  }


  /**
   * Teams findMany
   */
  export type TeamsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * Filter, which Teams to fetch.
     * 
    **/
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     * 
    **/
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TeamsScalarFieldEnum>
  }


  /**
   * Teams create
   */
  export type TeamsCreateArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * The data needed to create a Teams.
     * 
    **/
    data: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
  }


  /**
   * Teams createMany
   */
  export type TeamsCreateManyArgs = {
    /**
     * The data used to create many Teams.
     * 
    **/
    data: Enumerable<TeamsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Teams update
   */
  export type TeamsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * The data needed to update a Teams.
     * 
    **/
    data: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
    /**
     * Choose, which Teams to update.
     * 
    **/
    where: TeamsWhereUniqueInput
  }


  /**
   * Teams updateMany
   */
  export type TeamsUpdateManyArgs = {
    /**
     * The data used to update Teams.
     * 
    **/
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     * 
    **/
    where?: TeamsWhereInput
  }


  /**
   * Teams upsert
   */
  export type TeamsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * The filter to search for the Teams to update in case it exists.
     * 
    **/
    where: TeamsWhereUniqueInput
    /**
     * In case the Teams found by the `where` argument doesn't exist, create a new Teams with this data.
     * 
    **/
    create: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
    /**
     * In case the Teams was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
  }


  /**
   * Teams delete
   */
  export type TeamsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * Filter which Teams to delete.
     * 
    **/
    where: TeamsWhereUniqueInput
  }


  /**
   * Teams deleteMany
   */
  export type TeamsDeleteManyArgs = {
    /**
     * Filter which Teams to delete
     * 
    **/
    where?: TeamsWhereInput
  }


  /**
   * Teams.habits
   */
  export type Teams$habitsArgs = {
    /**
     * Select specific fields to fetch from the Habits
     * 
    **/
    select?: HabitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HabitsInclude | null
    where?: HabitsWhereInput
    orderBy?: Enumerable<HabitsOrderByWithRelationInput>
    cursor?: HabitsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HabitsScalarFieldEnum>
  }


  /**
   * Teams.teams_users
   */
  export type Teams$teams_usersArgs = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
    where?: Teams_usersWhereInput
    orderBy?: Enumerable<Teams_usersOrderByWithRelationInput>
    cursor?: Teams_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Teams_usersScalarFieldEnum>
  }


  /**
   * Teams without action
   */
  export type TeamsArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
  }



  /**
   * Model Teams_users
   */


  export type AggregateTeams_users = {
    _count: Teams_usersCountAggregateOutputType | null
    _min: Teams_usersMinAggregateOutputType | null
    _max: Teams_usersMaxAggregateOutputType | null
  }

  export type Teams_usersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    team_id: string | null
    role: team_role | null
  }

  export type Teams_usersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    team_id: string | null
    role: team_role | null
  }

  export type Teams_usersCountAggregateOutputType = {
    id: number
    user_id: number
    team_id: number
    role: number
    _all: number
  }


  export type Teams_usersMinAggregateInputType = {
    id?: true
    user_id?: true
    team_id?: true
    role?: true
  }

  export type Teams_usersMaxAggregateInputType = {
    id?: true
    user_id?: true
    team_id?: true
    role?: true
  }

  export type Teams_usersCountAggregateInputType = {
    id?: true
    user_id?: true
    team_id?: true
    role?: true
    _all?: true
  }

  export type Teams_usersAggregateArgs = {
    /**
     * Filter which Teams_users to aggregate.
     * 
    **/
    where?: Teams_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Teams_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Teams_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams_users
    **/
    _count?: true | Teams_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Teams_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Teams_usersMaxAggregateInputType
  }

  export type GetTeams_usersAggregateType<T extends Teams_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams_users[P]>
      : GetScalarType<T[P], AggregateTeams_users[P]>
  }




  export type Teams_usersGroupByArgs = {
    where?: Teams_usersWhereInput
    orderBy?: Enumerable<Teams_usersOrderByWithAggregationInput>
    by: Array<Teams_usersScalarFieldEnum>
    having?: Teams_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Teams_usersCountAggregateInputType | true
    _min?: Teams_usersMinAggregateInputType
    _max?: Teams_usersMaxAggregateInputType
  }


  export type Teams_usersGroupByOutputType = {
    id: string
    user_id: string
    team_id: string
    role: team_role
    _count: Teams_usersCountAggregateOutputType | null
    _min: Teams_usersMinAggregateOutputType | null
    _max: Teams_usersMaxAggregateOutputType | null
  }

  type GetTeams_usersGroupByPayload<T extends Teams_usersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Teams_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Teams_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Teams_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Teams_usersGroupByOutputType[P]>
        }
      >
    >


  export type Teams_usersSelect = {
    id?: boolean
    user_id?: boolean
    team_id?: boolean
    role?: boolean
    teams?: boolean | TeamsArgs
  }


  export type Teams_usersInclude = {
    teams?: boolean | TeamsArgs
  } 

  export type Teams_usersGetPayload<S extends boolean | null | undefined | Teams_usersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Teams_users :
    S extends undefined ? never :
    S extends { include: any } & (Teams_usersArgs | Teams_usersFindManyArgs)
    ? Teams_users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'teams' ? TeamsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Teams_usersArgs | Teams_usersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'teams' ? TeamsGetPayload<S['select'][P]> :  P extends keyof Teams_users ? Teams_users[P] : never
  } 
      : Teams_users


  type Teams_usersCountArgs = Merge<
    Omit<Teams_usersFindManyArgs, 'select' | 'include'> & {
      select?: Teams_usersCountAggregateInputType | true
    }
  >

  export interface Teams_usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Teams_users that matches the filter.
     * @param {Teams_usersFindUniqueArgs} args - Arguments to find a Teams_users
     * @example
     * // Get one Teams_users
     * const teams_users = await prisma.teams_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Teams_usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Teams_usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Teams_users'> extends True ? Prisma__Teams_usersClient<Teams_usersGetPayload<T>> : Prisma__Teams_usersClient<Teams_usersGetPayload<T> | null, null>

    /**
     * Find one Teams_users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Teams_usersFindUniqueOrThrowArgs} args - Arguments to find a Teams_users
     * @example
     * // Get one Teams_users
     * const teams_users = await prisma.teams_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Teams_usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Teams_usersFindUniqueOrThrowArgs>
    ): Prisma__Teams_usersClient<Teams_usersGetPayload<T>>

    /**
     * Find the first Teams_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teams_usersFindFirstArgs} args - Arguments to find a Teams_users
     * @example
     * // Get one Teams_users
     * const teams_users = await prisma.teams_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Teams_usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Teams_usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Teams_users'> extends True ? Prisma__Teams_usersClient<Teams_usersGetPayload<T>> : Prisma__Teams_usersClient<Teams_usersGetPayload<T> | null, null>

    /**
     * Find the first Teams_users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teams_usersFindFirstOrThrowArgs} args - Arguments to find a Teams_users
     * @example
     * // Get one Teams_users
     * const teams_users = await prisma.teams_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Teams_usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Teams_usersFindFirstOrThrowArgs>
    ): Prisma__Teams_usersClient<Teams_usersGetPayload<T>>

    /**
     * Find zero or more Teams_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teams_usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams_users
     * const teams_users = await prisma.teams_users.findMany()
     * 
     * // Get first 10 Teams_users
     * const teams_users = await prisma.teams_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teams_usersWithIdOnly = await prisma.teams_users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Teams_usersFindManyArgs>(
      args?: SelectSubset<T, Teams_usersFindManyArgs>
    ): PrismaPromise<Array<Teams_usersGetPayload<T>>>

    /**
     * Create a Teams_users.
     * @param {Teams_usersCreateArgs} args - Arguments to create a Teams_users.
     * @example
     * // Create one Teams_users
     * const Teams_users = await prisma.teams_users.create({
     *   data: {
     *     // ... data to create a Teams_users
     *   }
     * })
     * 
    **/
    create<T extends Teams_usersCreateArgs>(
      args: SelectSubset<T, Teams_usersCreateArgs>
    ): Prisma__Teams_usersClient<Teams_usersGetPayload<T>>

    /**
     * Create many Teams_users.
     *     @param {Teams_usersCreateManyArgs} args - Arguments to create many Teams_users.
     *     @example
     *     // Create many Teams_users
     *     const teams_users = await prisma.teams_users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Teams_usersCreateManyArgs>(
      args?: SelectSubset<T, Teams_usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Teams_users.
     * @param {Teams_usersDeleteArgs} args - Arguments to delete one Teams_users.
     * @example
     * // Delete one Teams_users
     * const Teams_users = await prisma.teams_users.delete({
     *   where: {
     *     // ... filter to delete one Teams_users
     *   }
     * })
     * 
    **/
    delete<T extends Teams_usersDeleteArgs>(
      args: SelectSubset<T, Teams_usersDeleteArgs>
    ): Prisma__Teams_usersClient<Teams_usersGetPayload<T>>

    /**
     * Update one Teams_users.
     * @param {Teams_usersUpdateArgs} args - Arguments to update one Teams_users.
     * @example
     * // Update one Teams_users
     * const teams_users = await prisma.teams_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Teams_usersUpdateArgs>(
      args: SelectSubset<T, Teams_usersUpdateArgs>
    ): Prisma__Teams_usersClient<Teams_usersGetPayload<T>>

    /**
     * Delete zero or more Teams_users.
     * @param {Teams_usersDeleteManyArgs} args - Arguments to filter Teams_users to delete.
     * @example
     * // Delete a few Teams_users
     * const { count } = await prisma.teams_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Teams_usersDeleteManyArgs>(
      args?: SelectSubset<T, Teams_usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teams_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams_users
     * const teams_users = await prisma.teams_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Teams_usersUpdateManyArgs>(
      args: SelectSubset<T, Teams_usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Teams_users.
     * @param {Teams_usersUpsertArgs} args - Arguments to update or create a Teams_users.
     * @example
     * // Update or create a Teams_users
     * const teams_users = await prisma.teams_users.upsert({
     *   create: {
     *     // ... data to create a Teams_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams_users we want to update
     *   }
     * })
    **/
    upsert<T extends Teams_usersUpsertArgs>(
      args: SelectSubset<T, Teams_usersUpsertArgs>
    ): Prisma__Teams_usersClient<Teams_usersGetPayload<T>>

    /**
     * Count the number of Teams_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teams_usersCountArgs} args - Arguments to filter Teams_users to count.
     * @example
     * // Count the number of Teams_users
     * const count = await prisma.teams_users.count({
     *   where: {
     *     // ... the filter for the Teams_users we want to count
     *   }
     * })
    **/
    count<T extends Teams_usersCountArgs>(
      args?: Subset<T, Teams_usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Teams_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teams_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Teams_usersAggregateArgs>(args: Subset<T, Teams_usersAggregateArgs>): PrismaPromise<GetTeams_usersAggregateType<T>>

    /**
     * Group by Teams_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teams_usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Teams_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Teams_usersGroupByArgs['orderBy'] }
        : { orderBy?: Teams_usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Teams_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeams_usersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Teams_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Teams_usersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    teams<T extends TeamsArgs= {}>(args?: Subset<T, TeamsArgs>): Prisma__TeamsClient<TeamsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Teams_users base type for findUnique actions
   */
  export type Teams_usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
    /**
     * Filter, which Teams_users to fetch.
     * 
    **/
    where: Teams_usersWhereUniqueInput
  }

  /**
   * Teams_users findUnique
   */
  export interface Teams_usersFindUniqueArgs extends Teams_usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Teams_users findUniqueOrThrow
   */
  export type Teams_usersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
    /**
     * Filter, which Teams_users to fetch.
     * 
    **/
    where: Teams_usersWhereUniqueInput
  }


  /**
   * Teams_users base type for findFirst actions
   */
  export type Teams_usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
    /**
     * Filter, which Teams_users to fetch.
     * 
    **/
    where?: Teams_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Teams_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams_users.
     * 
    **/
    cursor?: Teams_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams_users.
     * 
    **/
    distinct?: Enumerable<Teams_usersScalarFieldEnum>
  }

  /**
   * Teams_users findFirst
   */
  export interface Teams_usersFindFirstArgs extends Teams_usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Teams_users findFirstOrThrow
   */
  export type Teams_usersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
    /**
     * Filter, which Teams_users to fetch.
     * 
    **/
    where?: Teams_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Teams_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams_users.
     * 
    **/
    cursor?: Teams_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams_users.
     * 
    **/
    distinct?: Enumerable<Teams_usersScalarFieldEnum>
  }


  /**
   * Teams_users findMany
   */
  export type Teams_usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
    /**
     * Filter, which Teams_users to fetch.
     * 
    **/
    where?: Teams_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Teams_usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams_users.
     * 
    **/
    cursor?: Teams_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams_users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Teams_usersScalarFieldEnum>
  }


  /**
   * Teams_users create
   */
  export type Teams_usersCreateArgs = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
    /**
     * The data needed to create a Teams_users.
     * 
    **/
    data: XOR<Teams_usersCreateInput, Teams_usersUncheckedCreateInput>
  }


  /**
   * Teams_users createMany
   */
  export type Teams_usersCreateManyArgs = {
    /**
     * The data used to create many Teams_users.
     * 
    **/
    data: Enumerable<Teams_usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Teams_users update
   */
  export type Teams_usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
    /**
     * The data needed to update a Teams_users.
     * 
    **/
    data: XOR<Teams_usersUpdateInput, Teams_usersUncheckedUpdateInput>
    /**
     * Choose, which Teams_users to update.
     * 
    **/
    where: Teams_usersWhereUniqueInput
  }


  /**
   * Teams_users updateMany
   */
  export type Teams_usersUpdateManyArgs = {
    /**
     * The data used to update Teams_users.
     * 
    **/
    data: XOR<Teams_usersUpdateManyMutationInput, Teams_usersUncheckedUpdateManyInput>
    /**
     * Filter which Teams_users to update
     * 
    **/
    where?: Teams_usersWhereInput
  }


  /**
   * Teams_users upsert
   */
  export type Teams_usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
    /**
     * The filter to search for the Teams_users to update in case it exists.
     * 
    **/
    where: Teams_usersWhereUniqueInput
    /**
     * In case the Teams_users found by the `where` argument doesn't exist, create a new Teams_users with this data.
     * 
    **/
    create: XOR<Teams_usersCreateInput, Teams_usersUncheckedCreateInput>
    /**
     * In case the Teams_users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Teams_usersUpdateInput, Teams_usersUncheckedUpdateInput>
  }


  /**
   * Teams_users delete
   */
  export type Teams_usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
    /**
     * Filter which Teams_users to delete.
     * 
    **/
    where: Teams_usersWhereUniqueInput
  }


  /**
   * Teams_users deleteMany
   */
  export type Teams_usersDeleteManyArgs = {
    /**
     * Filter which Teams_users to delete
     * 
    **/
    where?: Teams_usersWhereInput
  }


  /**
   * Teams_users without action
   */
  export type Teams_usersArgs = {
    /**
     * Select specific fields to fetch from the Teams_users
     * 
    **/
    select?: Teams_usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Teams_usersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Habit_completionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    habit_id: 'habit_id',
    date: 'date',
    electric_user_id: 'electric_user_id'
  };

  export type Habit_completionsScalarFieldEnum = (typeof Habit_completionsScalarFieldEnum)[keyof typeof Habit_completionsScalarFieldEnum]


  export const HabitsScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    time: 'time',
    monday: 'monday',
    tuesday: 'tuesday',
    wednesday: 'wednesday',
    thursday: 'thursday',
    friday: 'friday',
    saturday: 'saturday',
    sunday: 'sunday',
    name: 'name',
    icon: 'icon',
    color: 'color',
    habit_type: 'habit_type',
    period: 'period',
    team_id: 'team_id',
    user_id: 'user_id',
    electric_user_id: 'electric_user_id'
  };

  export type HabitsScalarFieldEnum = (typeof HabitsScalarFieldEnum)[keyof typeof HabitsScalarFieldEnum]


  export const Habits_completersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    habit_id: 'habit_id'
  };

  export type Habits_completersScalarFieldEnum = (typeof Habits_completersScalarFieldEnum)[keyof typeof Habits_completersScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nickname: 'nickname',
    user_id: 'user_id',
    electric_user_id: 'electric_user_id'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id',
    link_pswd: 'link_pswd',
    link_exp: 'link_exp'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const Teams_usersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    team_id: 'team_id',
    role: 'role'
  };

  export type Teams_usersScalarFieldEnum = (typeof Teams_usersScalarFieldEnum)[keyof typeof Teams_usersScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type Habit_completionsWhereInput = {
    AND?: Enumerable<Habit_completionsWhereInput>
    OR?: Enumerable<Habit_completionsWhereInput>
    NOT?: Enumerable<Habit_completionsWhereInput>
    id?: UuidFilter | string
    user_id?: UuidFilter | string
    habit_id?: UuidFilter | string
    date?: DateTimeFilter | Date | string
    electric_user_id?: UuidNullableFilter | string | null
    habits?: XOR<HabitsRelationFilter, HabitsWhereInput>
  }

  export type Habit_completionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    date?: SortOrder
    electric_user_id?: SortOrder
    habits?: HabitsOrderByWithRelationInput
  }

  export type Habit_completionsWhereUniqueInput = {
    id?: string
  }

  export type Habit_completionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    date?: SortOrder
    electric_user_id?: SortOrder
    _count?: Habit_completionsCountOrderByAggregateInput
    _max?: Habit_completionsMaxOrderByAggregateInput
    _min?: Habit_completionsMinOrderByAggregateInput
  }

  export type Habit_completionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Habit_completionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Habit_completionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Habit_completionsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    user_id?: UuidWithAggregatesFilter | string
    habit_id?: UuidWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    electric_user_id?: UuidNullableWithAggregatesFilter | string | null
  }

  export type HabitsWhereInput = {
    AND?: Enumerable<HabitsWhereInput>
    OR?: Enumerable<HabitsWhereInput>
    NOT?: Enumerable<HabitsWhereInput>
    id?: UuidFilter | string
    amount?: IntFilter | number
    time?: DateTimeFilter | Date | string
    monday?: BoolFilter | boolean
    tuesday?: BoolFilter | boolean
    wednesday?: BoolFilter | boolean
    thursday?: BoolFilter | boolean
    friday?: BoolFilter | boolean
    saturday?: BoolFilter | boolean
    sunday?: BoolFilter | boolean
    name?: StringFilter | string
    icon?: StringFilter | string
    color?: StringFilter | string
    habit_type?: Enumhabit_typeFilter | habit_type
    period?: EnumperiodFilter | period
    team_id?: UuidNullableFilter | string | null
    user_id?: UuidNullableFilter | string | null
    electric_user_id?: UuidNullableFilter | string | null
    habit_completions?: Habit_completionsListRelationFilter
    teams?: XOR<TeamsRelationFilter, TeamsWhereInput> | null
    habits_completers?: Habits_completersListRelationFilter
  }

  export type HabitsOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    time?: SortOrder
    monday?: SortOrder
    tuesday?: SortOrder
    wednesday?: SortOrder
    thursday?: SortOrder
    friday?: SortOrder
    saturday?: SortOrder
    sunday?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    habit_type?: SortOrder
    period?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
    habit_completions?: Habit_completionsOrderByRelationAggregateInput
    teams?: TeamsOrderByWithRelationInput
    habits_completers?: Habits_completersOrderByRelationAggregateInput
  }

  export type HabitsWhereUniqueInput = {
    id?: string
  }

  export type HabitsOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    time?: SortOrder
    monday?: SortOrder
    tuesday?: SortOrder
    wednesday?: SortOrder
    thursday?: SortOrder
    friday?: SortOrder
    saturday?: SortOrder
    sunday?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    habit_type?: SortOrder
    period?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
    _count?: HabitsCountOrderByAggregateInput
    _avg?: HabitsAvgOrderByAggregateInput
    _max?: HabitsMaxOrderByAggregateInput
    _min?: HabitsMinOrderByAggregateInput
    _sum?: HabitsSumOrderByAggregateInput
  }

  export type HabitsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HabitsScalarWhereWithAggregatesInput>
    OR?: Enumerable<HabitsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HabitsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    time?: DateTimeWithAggregatesFilter | Date | string
    monday?: BoolWithAggregatesFilter | boolean
    tuesday?: BoolWithAggregatesFilter | boolean
    wednesday?: BoolWithAggregatesFilter | boolean
    thursday?: BoolWithAggregatesFilter | boolean
    friday?: BoolWithAggregatesFilter | boolean
    saturday?: BoolWithAggregatesFilter | boolean
    sunday?: BoolWithAggregatesFilter | boolean
    name?: StringWithAggregatesFilter | string
    icon?: StringWithAggregatesFilter | string
    color?: StringWithAggregatesFilter | string
    habit_type?: Enumhabit_typeWithAggregatesFilter | habit_type
    period?: EnumperiodWithAggregatesFilter | period
    team_id?: UuidNullableWithAggregatesFilter | string | null
    user_id?: UuidNullableWithAggregatesFilter | string | null
    electric_user_id?: UuidNullableWithAggregatesFilter | string | null
  }

  export type Habits_completersWhereInput = {
    AND?: Enumerable<Habits_completersWhereInput>
    OR?: Enumerable<Habits_completersWhereInput>
    NOT?: Enumerable<Habits_completersWhereInput>
    id?: UuidFilter | string
    user_id?: UuidFilter | string
    habit_id?: UuidFilter | string
    habits?: XOR<HabitsRelationFilter, HabitsWhereInput>
  }

  export type Habits_completersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    habits?: HabitsOrderByWithRelationInput
  }

  export type Habits_completersWhereUniqueInput = {
    id?: string
  }

  export type Habits_completersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    _count?: Habits_completersCountOrderByAggregateInput
    _max?: Habits_completersMaxOrderByAggregateInput
    _min?: Habits_completersMinOrderByAggregateInput
  }

  export type Habits_completersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Habits_completersScalarWhereWithAggregatesInput>
    OR?: Enumerable<Habits_completersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Habits_completersScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    user_id?: UuidWithAggregatesFilter | string
    habit_id?: UuidWithAggregatesFilter | string
  }

  export type ProfilesWhereInput = {
    AND?: Enumerable<ProfilesWhereInput>
    OR?: Enumerable<ProfilesWhereInput>
    NOT?: Enumerable<ProfilesWhereInput>
    id?: UuidFilter | string
    email?: StringFilter | string
    nickname?: StringFilter | string
    user_id?: UuidFilter | string
    electric_user_id?: UuidNullableFilter | string | null
  }

  export type ProfilesOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
  }

  export type ProfilesWhereUniqueInput = {
    id?: string
  }

  export type ProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
    _count?: ProfilesCountOrderByAggregateInput
    _max?: ProfilesMaxOrderByAggregateInput
    _min?: ProfilesMinOrderByAggregateInput
  }

  export type ProfilesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProfilesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProfilesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProfilesScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    nickname?: StringWithAggregatesFilter | string
    user_id?: UuidWithAggregatesFilter | string
    electric_user_id?: UuidNullableWithAggregatesFilter | string | null
  }

  export type TeamsWhereInput = {
    AND?: Enumerable<TeamsWhereInput>
    OR?: Enumerable<TeamsWhereInput>
    NOT?: Enumerable<TeamsWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    user_id?: UuidFilter | string
    link_pswd?: StringFilter | string
    link_exp?: DateTimeFilter | Date | string
    habits?: HabitsListRelationFilter
    teams_users?: Teams_usersListRelationFilter
  }

  export type TeamsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    link_pswd?: SortOrder
    link_exp?: SortOrder
    habits?: HabitsOrderByRelationAggregateInput
    teams_users?: Teams_usersOrderByRelationAggregateInput
  }

  export type TeamsWhereUniqueInput = {
    id?: string
  }

  export type TeamsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    link_pswd?: SortOrder
    link_exp?: SortOrder
    _count?: TeamsCountOrderByAggregateInput
    _max?: TeamsMaxOrderByAggregateInput
    _min?: TeamsMinOrderByAggregateInput
  }

  export type TeamsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TeamsScalarWhereWithAggregatesInput>
    OR?: Enumerable<TeamsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TeamsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    user_id?: UuidWithAggregatesFilter | string
    link_pswd?: StringWithAggregatesFilter | string
    link_exp?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Teams_usersWhereInput = {
    AND?: Enumerable<Teams_usersWhereInput>
    OR?: Enumerable<Teams_usersWhereInput>
    NOT?: Enumerable<Teams_usersWhereInput>
    id?: UuidFilter | string
    user_id?: UuidFilter | string
    team_id?: UuidFilter | string
    role?: Enumteam_roleFilter | team_role
    teams?: XOR<TeamsRelationFilter, TeamsWhereInput>
  }

  export type Teams_usersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    role?: SortOrder
    teams?: TeamsOrderByWithRelationInput
  }

  export type Teams_usersWhereUniqueInput = {
    id?: string
  }

  export type Teams_usersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    role?: SortOrder
    _count?: Teams_usersCountOrderByAggregateInput
    _max?: Teams_usersMaxOrderByAggregateInput
    _min?: Teams_usersMinOrderByAggregateInput
  }

  export type Teams_usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Teams_usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<Teams_usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Teams_usersScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    user_id?: UuidWithAggregatesFilter | string
    team_id?: UuidWithAggregatesFilter | string
    role?: Enumteam_roleWithAggregatesFilter | team_role
  }

  export type Habit_completionsCreateInput = {
    id: string
    user_id: string
    date: Date | string
    electric_user_id?: string | null
    habits: HabitsCreateNestedOneWithoutHabit_completionsInput
  }

  export type Habit_completionsUncheckedCreateInput = {
    id: string
    user_id: string
    habit_id: string
    date: Date | string
    electric_user_id?: string | null
  }

  export type Habit_completionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: HabitsUpdateOneRequiredWithoutHabit_completionsNestedInput
  }

  export type Habit_completionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Habit_completionsCreateManyInput = {
    id: string
    user_id: string
    habit_id: string
    date: Date | string
    electric_user_id?: string | null
  }

  export type Habit_completionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Habit_completionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HabitsCreateInput = {
    id: string
    amount: number
    time: Date | string
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    user_id?: string | null
    electric_user_id?: string | null
    habit_completions?: Habit_completionsCreateNestedManyWithoutHabitsInput
    teams?: TeamsCreateNestedOneWithoutHabitsInput
    habits_completers?: Habits_completersCreateNestedManyWithoutHabitsInput
  }

  export type HabitsUncheckedCreateInput = {
    id: string
    amount: number
    time: Date | string
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    team_id?: string | null
    user_id?: string | null
    electric_user_id?: string | null
    habit_completions?: Habit_completionsUncheckedCreateNestedManyWithoutHabitsInput
    habits_completers?: Habits_completersUncheckedCreateNestedManyWithoutHabitsInput
  }

  export type HabitsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    habit_completions?: Habit_completionsUpdateManyWithoutHabitsNestedInput
    teams?: TeamsUpdateOneWithoutHabitsNestedInput
    habits_completers?: Habits_completersUpdateManyWithoutHabitsNestedInput
  }

  export type HabitsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    habit_completions?: Habit_completionsUncheckedUpdateManyWithoutHabitsNestedInput
    habits_completers?: Habits_completersUncheckedUpdateManyWithoutHabitsNestedInput
  }

  export type HabitsCreateManyInput = {
    id: string
    amount: number
    time: Date | string
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    team_id?: string | null
    user_id?: string | null
    electric_user_id?: string | null
  }

  export type HabitsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HabitsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Habits_completersCreateInput = {
    id: string
    user_id: string
    habits: HabitsCreateNestedOneWithoutHabits_completersInput
  }

  export type Habits_completersUncheckedCreateInput = {
    id: string
    user_id: string
    habit_id: string
  }

  export type Habits_completersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    habits?: HabitsUpdateOneRequiredWithoutHabits_completersNestedInput
  }

  export type Habits_completersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
  }

  export type Habits_completersCreateManyInput = {
    id: string
    user_id: string
    habit_id: string
  }

  export type Habits_completersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type Habits_completersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProfilesCreateInput = {
    id: string
    email: string
    nickname: string
    user_id: string
    electric_user_id?: string | null
  }

  export type ProfilesUncheckedCreateInput = {
    id: string
    email: string
    nickname: string
    user_id: string
    electric_user_id?: string | null
  }

  export type ProfilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfilesCreateManyInput = {
    id: string
    email: string
    nickname: string
    user_id: string
    electric_user_id?: string | null
  }

  export type ProfilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamsCreateInput = {
    id: string
    name: string
    user_id: string
    link_pswd: string
    link_exp: Date | string
    habits?: HabitsCreateNestedManyWithoutTeamsInput
    teams_users?: Teams_usersCreateNestedManyWithoutTeamsInput
  }

  export type TeamsUncheckedCreateInput = {
    id: string
    name: string
    user_id: string
    link_pswd: string
    link_exp: Date | string
    habits?: HabitsUncheckedCreateNestedManyWithoutTeamsInput
    teams_users?: Teams_usersUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type TeamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    link_pswd?: StringFieldUpdateOperationsInput | string
    link_exp?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitsUpdateManyWithoutTeamsNestedInput
    teams_users?: Teams_usersUpdateManyWithoutTeamsNestedInput
  }

  export type TeamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    link_pswd?: StringFieldUpdateOperationsInput | string
    link_exp?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitsUncheckedUpdateManyWithoutTeamsNestedInput
    teams_users?: Teams_usersUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type TeamsCreateManyInput = {
    id: string
    name: string
    user_id: string
    link_pswd: string
    link_exp: Date | string
  }

  export type TeamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    link_pswd?: StringFieldUpdateOperationsInput | string
    link_exp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    link_pswd?: StringFieldUpdateOperationsInput | string
    link_exp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Teams_usersCreateInput = {
    id: string
    user_id: string
    role: team_role
    teams: TeamsCreateNestedOneWithoutTeams_usersInput
  }

  export type Teams_usersUncheckedCreateInput = {
    id: string
    user_id: string
    team_id: string
    role: team_role
  }

  export type Teams_usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_roleFieldUpdateOperationsInput | team_role
    teams?: TeamsUpdateOneRequiredWithoutTeams_usersNestedInput
  }

  export type Teams_usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_roleFieldUpdateOperationsInput | team_role
  }

  export type Teams_usersCreateManyInput = {
    id: string
    user_id: string
    team_id: string
    role: team_role
  }

  export type Teams_usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_roleFieldUpdateOperationsInput | team_role
  }

  export type Teams_usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_roleFieldUpdateOperationsInput | team_role
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableFilter | string | null
  }

  export type HabitsRelationFilter = {
    is?: HabitsWhereInput
    isNot?: HabitsWhereInput
  }

  export type Habit_completionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    date?: SortOrder
    electric_user_id?: SortOrder
  }

  export type Habit_completionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    date?: SortOrder
    electric_user_id?: SortOrder
  }

  export type Habit_completionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    date?: SortOrder
    electric_user_id?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type Enumhabit_typeFilter = {
    equals?: habit_type
    in?: Enumerable<habit_type>
    notIn?: Enumerable<habit_type>
    not?: NestedEnumhabit_typeFilter | habit_type
  }

  export type EnumperiodFilter = {
    equals?: period
    in?: Enumerable<period>
    notIn?: Enumerable<period>
    not?: NestedEnumperiodFilter | period
  }

  export type Habit_completionsListRelationFilter = {
    every?: Habit_completionsWhereInput
    some?: Habit_completionsWhereInput
    none?: Habit_completionsWhereInput
  }

  export type TeamsRelationFilter = {
    is?: TeamsWhereInput
    isNot?: TeamsWhereInput
  }

  export type Habits_completersListRelationFilter = {
    every?: Habits_completersWhereInput
    some?: Habits_completersWhereInput
    none?: Habits_completersWhereInput
  }

  export type Habit_completionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Habits_completersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitsCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    time?: SortOrder
    monday?: SortOrder
    tuesday?: SortOrder
    wednesday?: SortOrder
    thursday?: SortOrder
    friday?: SortOrder
    saturday?: SortOrder
    sunday?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    habit_type?: SortOrder
    period?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
  }

  export type HabitsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type HabitsMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    time?: SortOrder
    monday?: SortOrder
    tuesday?: SortOrder
    wednesday?: SortOrder
    thursday?: SortOrder
    friday?: SortOrder
    saturday?: SortOrder
    sunday?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    habit_type?: SortOrder
    period?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
  }

  export type HabitsMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    time?: SortOrder
    monday?: SortOrder
    tuesday?: SortOrder
    wednesday?: SortOrder
    thursday?: SortOrder
    friday?: SortOrder
    saturday?: SortOrder
    sunday?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    habit_type?: SortOrder
    period?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
  }

  export type HabitsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type Enumhabit_typeWithAggregatesFilter = {
    equals?: habit_type
    in?: Enumerable<habit_type>
    notIn?: Enumerable<habit_type>
    not?: NestedEnumhabit_typeWithAggregatesFilter | habit_type
    _count?: NestedIntFilter
    _min?: NestedEnumhabit_typeFilter
    _max?: NestedEnumhabit_typeFilter
  }

  export type EnumperiodWithAggregatesFilter = {
    equals?: period
    in?: Enumerable<period>
    notIn?: Enumerable<period>
    not?: NestedEnumperiodWithAggregatesFilter | period
    _count?: NestedIntFilter
    _min?: NestedEnumperiodFilter
    _max?: NestedEnumperiodFilter
  }

  export type Habits_completersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
  }

  export type Habits_completersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
  }

  export type Habits_completersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
  }

  export type ProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
  }

  export type ProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
  }

  export type ProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
  }

  export type HabitsListRelationFilter = {
    every?: HabitsWhereInput
    some?: HabitsWhereInput
    none?: HabitsWhereInput
  }

  export type Teams_usersListRelationFilter = {
    every?: Teams_usersWhereInput
    some?: Teams_usersWhereInput
    none?: Teams_usersWhereInput
  }

  export type HabitsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Teams_usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    link_pswd?: SortOrder
    link_exp?: SortOrder
  }

  export type TeamsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    link_pswd?: SortOrder
    link_exp?: SortOrder
  }

  export type TeamsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    link_pswd?: SortOrder
    link_exp?: SortOrder
  }

  export type Enumteam_roleFilter = {
    equals?: team_role
    in?: Enumerable<team_role>
    notIn?: Enumerable<team_role>
    not?: NestedEnumteam_roleFilter | team_role
  }

  export type Teams_usersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    role?: SortOrder
  }

  export type Teams_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    role?: SortOrder
  }

  export type Teams_usersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    role?: SortOrder
  }

  export type Enumteam_roleWithAggregatesFilter = {
    equals?: team_role
    in?: Enumerable<team_role>
    notIn?: Enumerable<team_role>
    not?: NestedEnumteam_roleWithAggregatesFilter | team_role
    _count?: NestedIntFilter
    _min?: NestedEnumteam_roleFilter
    _max?: NestedEnumteam_roleFilter
  }

  export type HabitsCreateNestedOneWithoutHabit_completionsInput = {
    create?: XOR<HabitsCreateWithoutHabit_completionsInput, HabitsUncheckedCreateWithoutHabit_completionsInput>
    connectOrCreate?: HabitsCreateOrConnectWithoutHabit_completionsInput
    connect?: HabitsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type HabitsUpdateOneRequiredWithoutHabit_completionsNestedInput = {
    create?: XOR<HabitsCreateWithoutHabit_completionsInput, HabitsUncheckedCreateWithoutHabit_completionsInput>
    connectOrCreate?: HabitsCreateOrConnectWithoutHabit_completionsInput
    upsert?: HabitsUpsertWithoutHabit_completionsInput
    connect?: HabitsWhereUniqueInput
    update?: XOR<HabitsUpdateWithoutHabit_completionsInput, HabitsUncheckedUpdateWithoutHabit_completionsInput>
  }

  export type Habit_completionsCreateNestedManyWithoutHabitsInput = {
    create?: XOR<Enumerable<Habit_completionsCreateWithoutHabitsInput>, Enumerable<Habit_completionsUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habit_completionsCreateOrConnectWithoutHabitsInput>
    createMany?: Habit_completionsCreateManyHabitsInputEnvelope
    connect?: Enumerable<Habit_completionsWhereUniqueInput>
  }

  export type TeamsCreateNestedOneWithoutHabitsInput = {
    create?: XOR<TeamsCreateWithoutHabitsInput, TeamsUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutHabitsInput
    connect?: TeamsWhereUniqueInput
  }

  export type Habits_completersCreateNestedManyWithoutHabitsInput = {
    create?: XOR<Enumerable<Habits_completersCreateWithoutHabitsInput>, Enumerable<Habits_completersUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habits_completersCreateOrConnectWithoutHabitsInput>
    createMany?: Habits_completersCreateManyHabitsInputEnvelope
    connect?: Enumerable<Habits_completersWhereUniqueInput>
  }

  export type Habit_completionsUncheckedCreateNestedManyWithoutHabitsInput = {
    create?: XOR<Enumerable<Habit_completionsCreateWithoutHabitsInput>, Enumerable<Habit_completionsUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habit_completionsCreateOrConnectWithoutHabitsInput>
    createMany?: Habit_completionsCreateManyHabitsInputEnvelope
    connect?: Enumerable<Habit_completionsWhereUniqueInput>
  }

  export type Habits_completersUncheckedCreateNestedManyWithoutHabitsInput = {
    create?: XOR<Enumerable<Habits_completersCreateWithoutHabitsInput>, Enumerable<Habits_completersUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habits_completersCreateOrConnectWithoutHabitsInput>
    createMany?: Habits_completersCreateManyHabitsInputEnvelope
    connect?: Enumerable<Habits_completersWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Enumhabit_typeFieldUpdateOperationsInput = {
    set?: habit_type
  }

  export type EnumperiodFieldUpdateOperationsInput = {
    set?: period
  }

  export type Habit_completionsUpdateManyWithoutHabitsNestedInput = {
    create?: XOR<Enumerable<Habit_completionsCreateWithoutHabitsInput>, Enumerable<Habit_completionsUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habit_completionsCreateOrConnectWithoutHabitsInput>
    upsert?: Enumerable<Habit_completionsUpsertWithWhereUniqueWithoutHabitsInput>
    createMany?: Habit_completionsCreateManyHabitsInputEnvelope
    set?: Enumerable<Habit_completionsWhereUniqueInput>
    disconnect?: Enumerable<Habit_completionsWhereUniqueInput>
    delete?: Enumerable<Habit_completionsWhereUniqueInput>
    connect?: Enumerable<Habit_completionsWhereUniqueInput>
    update?: Enumerable<Habit_completionsUpdateWithWhereUniqueWithoutHabitsInput>
    updateMany?: Enumerable<Habit_completionsUpdateManyWithWhereWithoutHabitsInput>
    deleteMany?: Enumerable<Habit_completionsScalarWhereInput>
  }

  export type TeamsUpdateOneWithoutHabitsNestedInput = {
    create?: XOR<TeamsCreateWithoutHabitsInput, TeamsUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutHabitsInput
    upsert?: TeamsUpsertWithoutHabitsInput
    disconnect?: boolean
    delete?: boolean
    connect?: TeamsWhereUniqueInput
    update?: XOR<TeamsUpdateWithoutHabitsInput, TeamsUncheckedUpdateWithoutHabitsInput>
  }

  export type Habits_completersUpdateManyWithoutHabitsNestedInput = {
    create?: XOR<Enumerable<Habits_completersCreateWithoutHabitsInput>, Enumerable<Habits_completersUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habits_completersCreateOrConnectWithoutHabitsInput>
    upsert?: Enumerable<Habits_completersUpsertWithWhereUniqueWithoutHabitsInput>
    createMany?: Habits_completersCreateManyHabitsInputEnvelope
    set?: Enumerable<Habits_completersWhereUniqueInput>
    disconnect?: Enumerable<Habits_completersWhereUniqueInput>
    delete?: Enumerable<Habits_completersWhereUniqueInput>
    connect?: Enumerable<Habits_completersWhereUniqueInput>
    update?: Enumerable<Habits_completersUpdateWithWhereUniqueWithoutHabitsInput>
    updateMany?: Enumerable<Habits_completersUpdateManyWithWhereWithoutHabitsInput>
    deleteMany?: Enumerable<Habits_completersScalarWhereInput>
  }

  export type Habit_completionsUncheckedUpdateManyWithoutHabitsNestedInput = {
    create?: XOR<Enumerable<Habit_completionsCreateWithoutHabitsInput>, Enumerable<Habit_completionsUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habit_completionsCreateOrConnectWithoutHabitsInput>
    upsert?: Enumerable<Habit_completionsUpsertWithWhereUniqueWithoutHabitsInput>
    createMany?: Habit_completionsCreateManyHabitsInputEnvelope
    set?: Enumerable<Habit_completionsWhereUniqueInput>
    disconnect?: Enumerable<Habit_completionsWhereUniqueInput>
    delete?: Enumerable<Habit_completionsWhereUniqueInput>
    connect?: Enumerable<Habit_completionsWhereUniqueInput>
    update?: Enumerable<Habit_completionsUpdateWithWhereUniqueWithoutHabitsInput>
    updateMany?: Enumerable<Habit_completionsUpdateManyWithWhereWithoutHabitsInput>
    deleteMany?: Enumerable<Habit_completionsScalarWhereInput>
  }

  export type Habits_completersUncheckedUpdateManyWithoutHabitsNestedInput = {
    create?: XOR<Enumerable<Habits_completersCreateWithoutHabitsInput>, Enumerable<Habits_completersUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habits_completersCreateOrConnectWithoutHabitsInput>
    upsert?: Enumerable<Habits_completersUpsertWithWhereUniqueWithoutHabitsInput>
    createMany?: Habits_completersCreateManyHabitsInputEnvelope
    set?: Enumerable<Habits_completersWhereUniqueInput>
    disconnect?: Enumerable<Habits_completersWhereUniqueInput>
    delete?: Enumerable<Habits_completersWhereUniqueInput>
    connect?: Enumerable<Habits_completersWhereUniqueInput>
    update?: Enumerable<Habits_completersUpdateWithWhereUniqueWithoutHabitsInput>
    updateMany?: Enumerable<Habits_completersUpdateManyWithWhereWithoutHabitsInput>
    deleteMany?: Enumerable<Habits_completersScalarWhereInput>
  }

  export type HabitsCreateNestedOneWithoutHabits_completersInput = {
    create?: XOR<HabitsCreateWithoutHabits_completersInput, HabitsUncheckedCreateWithoutHabits_completersInput>
    connectOrCreate?: HabitsCreateOrConnectWithoutHabits_completersInput
    connect?: HabitsWhereUniqueInput
  }

  export type HabitsUpdateOneRequiredWithoutHabits_completersNestedInput = {
    create?: XOR<HabitsCreateWithoutHabits_completersInput, HabitsUncheckedCreateWithoutHabits_completersInput>
    connectOrCreate?: HabitsCreateOrConnectWithoutHabits_completersInput
    upsert?: HabitsUpsertWithoutHabits_completersInput
    connect?: HabitsWhereUniqueInput
    update?: XOR<HabitsUpdateWithoutHabits_completersInput, HabitsUncheckedUpdateWithoutHabits_completersInput>
  }

  export type HabitsCreateNestedManyWithoutTeamsInput = {
    create?: XOR<Enumerable<HabitsCreateWithoutTeamsInput>, Enumerable<HabitsUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<HabitsCreateOrConnectWithoutTeamsInput>
    createMany?: HabitsCreateManyTeamsInputEnvelope
    connect?: Enumerable<HabitsWhereUniqueInput>
  }

  export type Teams_usersCreateNestedManyWithoutTeamsInput = {
    create?: XOR<Enumerable<Teams_usersCreateWithoutTeamsInput>, Enumerable<Teams_usersUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<Teams_usersCreateOrConnectWithoutTeamsInput>
    createMany?: Teams_usersCreateManyTeamsInputEnvelope
    connect?: Enumerable<Teams_usersWhereUniqueInput>
  }

  export type HabitsUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<Enumerable<HabitsCreateWithoutTeamsInput>, Enumerable<HabitsUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<HabitsCreateOrConnectWithoutTeamsInput>
    createMany?: HabitsCreateManyTeamsInputEnvelope
    connect?: Enumerable<HabitsWhereUniqueInput>
  }

  export type Teams_usersUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<Enumerable<Teams_usersCreateWithoutTeamsInput>, Enumerable<Teams_usersUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<Teams_usersCreateOrConnectWithoutTeamsInput>
    createMany?: Teams_usersCreateManyTeamsInputEnvelope
    connect?: Enumerable<Teams_usersWhereUniqueInput>
  }

  export type HabitsUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<Enumerable<HabitsCreateWithoutTeamsInput>, Enumerable<HabitsUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<HabitsCreateOrConnectWithoutTeamsInput>
    upsert?: Enumerable<HabitsUpsertWithWhereUniqueWithoutTeamsInput>
    createMany?: HabitsCreateManyTeamsInputEnvelope
    set?: Enumerable<HabitsWhereUniqueInput>
    disconnect?: Enumerable<HabitsWhereUniqueInput>
    delete?: Enumerable<HabitsWhereUniqueInput>
    connect?: Enumerable<HabitsWhereUniqueInput>
    update?: Enumerable<HabitsUpdateWithWhereUniqueWithoutTeamsInput>
    updateMany?: Enumerable<HabitsUpdateManyWithWhereWithoutTeamsInput>
    deleteMany?: Enumerable<HabitsScalarWhereInput>
  }

  export type Teams_usersUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<Enumerable<Teams_usersCreateWithoutTeamsInput>, Enumerable<Teams_usersUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<Teams_usersCreateOrConnectWithoutTeamsInput>
    upsert?: Enumerable<Teams_usersUpsertWithWhereUniqueWithoutTeamsInput>
    createMany?: Teams_usersCreateManyTeamsInputEnvelope
    set?: Enumerable<Teams_usersWhereUniqueInput>
    disconnect?: Enumerable<Teams_usersWhereUniqueInput>
    delete?: Enumerable<Teams_usersWhereUniqueInput>
    connect?: Enumerable<Teams_usersWhereUniqueInput>
    update?: Enumerable<Teams_usersUpdateWithWhereUniqueWithoutTeamsInput>
    updateMany?: Enumerable<Teams_usersUpdateManyWithWhereWithoutTeamsInput>
    deleteMany?: Enumerable<Teams_usersScalarWhereInput>
  }

  export type HabitsUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<Enumerable<HabitsCreateWithoutTeamsInput>, Enumerable<HabitsUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<HabitsCreateOrConnectWithoutTeamsInput>
    upsert?: Enumerable<HabitsUpsertWithWhereUniqueWithoutTeamsInput>
    createMany?: HabitsCreateManyTeamsInputEnvelope
    set?: Enumerable<HabitsWhereUniqueInput>
    disconnect?: Enumerable<HabitsWhereUniqueInput>
    delete?: Enumerable<HabitsWhereUniqueInput>
    connect?: Enumerable<HabitsWhereUniqueInput>
    update?: Enumerable<HabitsUpdateWithWhereUniqueWithoutTeamsInput>
    updateMany?: Enumerable<HabitsUpdateManyWithWhereWithoutTeamsInput>
    deleteMany?: Enumerable<HabitsScalarWhereInput>
  }

  export type Teams_usersUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<Enumerable<Teams_usersCreateWithoutTeamsInput>, Enumerable<Teams_usersUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<Teams_usersCreateOrConnectWithoutTeamsInput>
    upsert?: Enumerable<Teams_usersUpsertWithWhereUniqueWithoutTeamsInput>
    createMany?: Teams_usersCreateManyTeamsInputEnvelope
    set?: Enumerable<Teams_usersWhereUniqueInput>
    disconnect?: Enumerable<Teams_usersWhereUniqueInput>
    delete?: Enumerable<Teams_usersWhereUniqueInput>
    connect?: Enumerable<Teams_usersWhereUniqueInput>
    update?: Enumerable<Teams_usersUpdateWithWhereUniqueWithoutTeamsInput>
    updateMany?: Enumerable<Teams_usersUpdateManyWithWhereWithoutTeamsInput>
    deleteMany?: Enumerable<Teams_usersScalarWhereInput>
  }

  export type TeamsCreateNestedOneWithoutTeams_usersInput = {
    create?: XOR<TeamsCreateWithoutTeams_usersInput, TeamsUncheckedCreateWithoutTeams_usersInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutTeams_usersInput
    connect?: TeamsWhereUniqueInput
  }

  export type Enumteam_roleFieldUpdateOperationsInput = {
    set?: team_role
  }

  export type TeamsUpdateOneRequiredWithoutTeams_usersNestedInput = {
    create?: XOR<TeamsCreateWithoutTeams_usersInput, TeamsUncheckedCreateWithoutTeams_usersInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutTeams_usersInput
    upsert?: TeamsUpsertWithoutTeams_usersInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<TeamsUpdateWithoutTeams_usersInput, TeamsUncheckedUpdateWithoutTeams_usersInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedUuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableFilter | string | null
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedUuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumhabit_typeFilter = {
    equals?: habit_type
    in?: Enumerable<habit_type>
    notIn?: Enumerable<habit_type>
    not?: NestedEnumhabit_typeFilter | habit_type
  }

  export type NestedEnumperiodFilter = {
    equals?: period
    in?: Enumerable<period>
    notIn?: Enumerable<period>
    not?: NestedEnumperiodFilter | period
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumhabit_typeWithAggregatesFilter = {
    equals?: habit_type
    in?: Enumerable<habit_type>
    notIn?: Enumerable<habit_type>
    not?: NestedEnumhabit_typeWithAggregatesFilter | habit_type
    _count?: NestedIntFilter
    _min?: NestedEnumhabit_typeFilter
    _max?: NestedEnumhabit_typeFilter
  }

  export type NestedEnumperiodWithAggregatesFilter = {
    equals?: period
    in?: Enumerable<period>
    notIn?: Enumerable<period>
    not?: NestedEnumperiodWithAggregatesFilter | period
    _count?: NestedIntFilter
    _min?: NestedEnumperiodFilter
    _max?: NestedEnumperiodFilter
  }

  export type NestedEnumteam_roleFilter = {
    equals?: team_role
    in?: Enumerable<team_role>
    notIn?: Enumerable<team_role>
    not?: NestedEnumteam_roleFilter | team_role
  }

  export type NestedEnumteam_roleWithAggregatesFilter = {
    equals?: team_role
    in?: Enumerable<team_role>
    notIn?: Enumerable<team_role>
    not?: NestedEnumteam_roleWithAggregatesFilter | team_role
    _count?: NestedIntFilter
    _min?: NestedEnumteam_roleFilter
    _max?: NestedEnumteam_roleFilter
  }

  export type HabitsCreateWithoutHabit_completionsInput = {
    id: string
    amount: number
    time: Date | string
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    user_id?: string | null
    electric_user_id?: string | null
    teams?: TeamsCreateNestedOneWithoutHabitsInput
    habits_completers?: Habits_completersCreateNestedManyWithoutHabitsInput
  }

  export type HabitsUncheckedCreateWithoutHabit_completionsInput = {
    id: string
    amount: number
    time: Date | string
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    team_id?: string | null
    user_id?: string | null
    electric_user_id?: string | null
    habits_completers?: Habits_completersUncheckedCreateNestedManyWithoutHabitsInput
  }

  export type HabitsCreateOrConnectWithoutHabit_completionsInput = {
    where: HabitsWhereUniqueInput
    create: XOR<HabitsCreateWithoutHabit_completionsInput, HabitsUncheckedCreateWithoutHabit_completionsInput>
  }

  export type HabitsUpsertWithoutHabit_completionsInput = {
    update: XOR<HabitsUpdateWithoutHabit_completionsInput, HabitsUncheckedUpdateWithoutHabit_completionsInput>
    create: XOR<HabitsCreateWithoutHabit_completionsInput, HabitsUncheckedCreateWithoutHabit_completionsInput>
  }

  export type HabitsUpdateWithoutHabit_completionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamsUpdateOneWithoutHabitsNestedInput
    habits_completers?: Habits_completersUpdateManyWithoutHabitsNestedInput
  }

  export type HabitsUncheckedUpdateWithoutHabit_completionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    habits_completers?: Habits_completersUncheckedUpdateManyWithoutHabitsNestedInput
  }

  export type Habit_completionsCreateWithoutHabitsInput = {
    id: string
    user_id: string
    date: Date | string
    electric_user_id?: string | null
  }

  export type Habit_completionsUncheckedCreateWithoutHabitsInput = {
    id: string
    user_id: string
    date: Date | string
    electric_user_id?: string | null
  }

  export type Habit_completionsCreateOrConnectWithoutHabitsInput = {
    where: Habit_completionsWhereUniqueInput
    create: XOR<Habit_completionsCreateWithoutHabitsInput, Habit_completionsUncheckedCreateWithoutHabitsInput>
  }

  export type Habit_completionsCreateManyHabitsInputEnvelope = {
    data: Enumerable<Habit_completionsCreateManyHabitsInput>
    skipDuplicates?: boolean
  }

  export type TeamsCreateWithoutHabitsInput = {
    id: string
    name: string
    user_id: string
    link_pswd: string
    link_exp: Date | string
    teams_users?: Teams_usersCreateNestedManyWithoutTeamsInput
  }

  export type TeamsUncheckedCreateWithoutHabitsInput = {
    id: string
    name: string
    user_id: string
    link_pswd: string
    link_exp: Date | string
    teams_users?: Teams_usersUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type TeamsCreateOrConnectWithoutHabitsInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutHabitsInput, TeamsUncheckedCreateWithoutHabitsInput>
  }

  export type Habits_completersCreateWithoutHabitsInput = {
    id: string
    user_id: string
  }

  export type Habits_completersUncheckedCreateWithoutHabitsInput = {
    id: string
    user_id: string
  }

  export type Habits_completersCreateOrConnectWithoutHabitsInput = {
    where: Habits_completersWhereUniqueInput
    create: XOR<Habits_completersCreateWithoutHabitsInput, Habits_completersUncheckedCreateWithoutHabitsInput>
  }

  export type Habits_completersCreateManyHabitsInputEnvelope = {
    data: Enumerable<Habits_completersCreateManyHabitsInput>
    skipDuplicates?: boolean
  }

  export type Habit_completionsUpsertWithWhereUniqueWithoutHabitsInput = {
    where: Habit_completionsWhereUniqueInput
    update: XOR<Habit_completionsUpdateWithoutHabitsInput, Habit_completionsUncheckedUpdateWithoutHabitsInput>
    create: XOR<Habit_completionsCreateWithoutHabitsInput, Habit_completionsUncheckedCreateWithoutHabitsInput>
  }

  export type Habit_completionsUpdateWithWhereUniqueWithoutHabitsInput = {
    where: Habit_completionsWhereUniqueInput
    data: XOR<Habit_completionsUpdateWithoutHabitsInput, Habit_completionsUncheckedUpdateWithoutHabitsInput>
  }

  export type Habit_completionsUpdateManyWithWhereWithoutHabitsInput = {
    where: Habit_completionsScalarWhereInput
    data: XOR<Habit_completionsUpdateManyMutationInput, Habit_completionsUncheckedUpdateManyWithoutHabit_completionsInput>
  }

  export type Habit_completionsScalarWhereInput = {
    AND?: Enumerable<Habit_completionsScalarWhereInput>
    OR?: Enumerable<Habit_completionsScalarWhereInput>
    NOT?: Enumerable<Habit_completionsScalarWhereInput>
    id?: UuidFilter | string
    user_id?: UuidFilter | string
    habit_id?: UuidFilter | string
    date?: DateTimeFilter | Date | string
    electric_user_id?: UuidNullableFilter | string | null
  }

  export type TeamsUpsertWithoutHabitsInput = {
    update: XOR<TeamsUpdateWithoutHabitsInput, TeamsUncheckedUpdateWithoutHabitsInput>
    create: XOR<TeamsCreateWithoutHabitsInput, TeamsUncheckedCreateWithoutHabitsInput>
  }

  export type TeamsUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    link_pswd?: StringFieldUpdateOperationsInput | string
    link_exp?: DateTimeFieldUpdateOperationsInput | Date | string
    teams_users?: Teams_usersUpdateManyWithoutTeamsNestedInput
  }

  export type TeamsUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    link_pswd?: StringFieldUpdateOperationsInput | string
    link_exp?: DateTimeFieldUpdateOperationsInput | Date | string
    teams_users?: Teams_usersUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type Habits_completersUpsertWithWhereUniqueWithoutHabitsInput = {
    where: Habits_completersWhereUniqueInput
    update: XOR<Habits_completersUpdateWithoutHabitsInput, Habits_completersUncheckedUpdateWithoutHabitsInput>
    create: XOR<Habits_completersCreateWithoutHabitsInput, Habits_completersUncheckedCreateWithoutHabitsInput>
  }

  export type Habits_completersUpdateWithWhereUniqueWithoutHabitsInput = {
    where: Habits_completersWhereUniqueInput
    data: XOR<Habits_completersUpdateWithoutHabitsInput, Habits_completersUncheckedUpdateWithoutHabitsInput>
  }

  export type Habits_completersUpdateManyWithWhereWithoutHabitsInput = {
    where: Habits_completersScalarWhereInput
    data: XOR<Habits_completersUpdateManyMutationInput, Habits_completersUncheckedUpdateManyWithoutHabits_completersInput>
  }

  export type Habits_completersScalarWhereInput = {
    AND?: Enumerable<Habits_completersScalarWhereInput>
    OR?: Enumerable<Habits_completersScalarWhereInput>
    NOT?: Enumerable<Habits_completersScalarWhereInput>
    id?: UuidFilter | string
    user_id?: UuidFilter | string
    habit_id?: UuidFilter | string
  }

  export type HabitsCreateWithoutHabits_completersInput = {
    id: string
    amount: number
    time: Date | string
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    user_id?: string | null
    electric_user_id?: string | null
    habit_completions?: Habit_completionsCreateNestedManyWithoutHabitsInput
    teams?: TeamsCreateNestedOneWithoutHabitsInput
  }

  export type HabitsUncheckedCreateWithoutHabits_completersInput = {
    id: string
    amount: number
    time: Date | string
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    team_id?: string | null
    user_id?: string | null
    electric_user_id?: string | null
    habit_completions?: Habit_completionsUncheckedCreateNestedManyWithoutHabitsInput
  }

  export type HabitsCreateOrConnectWithoutHabits_completersInput = {
    where: HabitsWhereUniqueInput
    create: XOR<HabitsCreateWithoutHabits_completersInput, HabitsUncheckedCreateWithoutHabits_completersInput>
  }

  export type HabitsUpsertWithoutHabits_completersInput = {
    update: XOR<HabitsUpdateWithoutHabits_completersInput, HabitsUncheckedUpdateWithoutHabits_completersInput>
    create: XOR<HabitsCreateWithoutHabits_completersInput, HabitsUncheckedCreateWithoutHabits_completersInput>
  }

  export type HabitsUpdateWithoutHabits_completersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    habit_completions?: Habit_completionsUpdateManyWithoutHabitsNestedInput
    teams?: TeamsUpdateOneWithoutHabitsNestedInput
  }

  export type HabitsUncheckedUpdateWithoutHabits_completersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    habit_completions?: Habit_completionsUncheckedUpdateManyWithoutHabitsNestedInput
  }

  export type HabitsCreateWithoutTeamsInput = {
    id: string
    amount: number
    time: Date | string
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    user_id?: string | null
    electric_user_id?: string | null
    habit_completions?: Habit_completionsCreateNestedManyWithoutHabitsInput
    habits_completers?: Habits_completersCreateNestedManyWithoutHabitsInput
  }

  export type HabitsUncheckedCreateWithoutTeamsInput = {
    id: string
    amount: number
    time: Date | string
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    user_id?: string | null
    electric_user_id?: string | null
    habit_completions?: Habit_completionsUncheckedCreateNestedManyWithoutHabitsInput
    habits_completers?: Habits_completersUncheckedCreateNestedManyWithoutHabitsInput
  }

  export type HabitsCreateOrConnectWithoutTeamsInput = {
    where: HabitsWhereUniqueInput
    create: XOR<HabitsCreateWithoutTeamsInput, HabitsUncheckedCreateWithoutTeamsInput>
  }

  export type HabitsCreateManyTeamsInputEnvelope = {
    data: Enumerable<HabitsCreateManyTeamsInput>
    skipDuplicates?: boolean
  }

  export type Teams_usersCreateWithoutTeamsInput = {
    id: string
    user_id: string
    role: team_role
  }

  export type Teams_usersUncheckedCreateWithoutTeamsInput = {
    id: string
    user_id: string
    role: team_role
  }

  export type Teams_usersCreateOrConnectWithoutTeamsInput = {
    where: Teams_usersWhereUniqueInput
    create: XOR<Teams_usersCreateWithoutTeamsInput, Teams_usersUncheckedCreateWithoutTeamsInput>
  }

  export type Teams_usersCreateManyTeamsInputEnvelope = {
    data: Enumerable<Teams_usersCreateManyTeamsInput>
    skipDuplicates?: boolean
  }

  export type HabitsUpsertWithWhereUniqueWithoutTeamsInput = {
    where: HabitsWhereUniqueInput
    update: XOR<HabitsUpdateWithoutTeamsInput, HabitsUncheckedUpdateWithoutTeamsInput>
    create: XOR<HabitsCreateWithoutTeamsInput, HabitsUncheckedCreateWithoutTeamsInput>
  }

  export type HabitsUpdateWithWhereUniqueWithoutTeamsInput = {
    where: HabitsWhereUniqueInput
    data: XOR<HabitsUpdateWithoutTeamsInput, HabitsUncheckedUpdateWithoutTeamsInput>
  }

  export type HabitsUpdateManyWithWhereWithoutTeamsInput = {
    where: HabitsScalarWhereInput
    data: XOR<HabitsUpdateManyMutationInput, HabitsUncheckedUpdateManyWithoutHabitsInput>
  }

  export type HabitsScalarWhereInput = {
    AND?: Enumerable<HabitsScalarWhereInput>
    OR?: Enumerable<HabitsScalarWhereInput>
    NOT?: Enumerable<HabitsScalarWhereInput>
    id?: UuidFilter | string
    amount?: IntFilter | number
    time?: DateTimeFilter | Date | string
    monday?: BoolFilter | boolean
    tuesday?: BoolFilter | boolean
    wednesday?: BoolFilter | boolean
    thursday?: BoolFilter | boolean
    friday?: BoolFilter | boolean
    saturday?: BoolFilter | boolean
    sunday?: BoolFilter | boolean
    name?: StringFilter | string
    icon?: StringFilter | string
    color?: StringFilter | string
    habit_type?: Enumhabit_typeFilter | habit_type
    period?: EnumperiodFilter | period
    team_id?: UuidNullableFilter | string | null
    user_id?: UuidNullableFilter | string | null
    electric_user_id?: UuidNullableFilter | string | null
  }

  export type Teams_usersUpsertWithWhereUniqueWithoutTeamsInput = {
    where: Teams_usersWhereUniqueInput
    update: XOR<Teams_usersUpdateWithoutTeamsInput, Teams_usersUncheckedUpdateWithoutTeamsInput>
    create: XOR<Teams_usersCreateWithoutTeamsInput, Teams_usersUncheckedCreateWithoutTeamsInput>
  }

  export type Teams_usersUpdateWithWhereUniqueWithoutTeamsInput = {
    where: Teams_usersWhereUniqueInput
    data: XOR<Teams_usersUpdateWithoutTeamsInput, Teams_usersUncheckedUpdateWithoutTeamsInput>
  }

  export type Teams_usersUpdateManyWithWhereWithoutTeamsInput = {
    where: Teams_usersScalarWhereInput
    data: XOR<Teams_usersUpdateManyMutationInput, Teams_usersUncheckedUpdateManyWithoutTeams_usersInput>
  }

  export type Teams_usersScalarWhereInput = {
    AND?: Enumerable<Teams_usersScalarWhereInput>
    OR?: Enumerable<Teams_usersScalarWhereInput>
    NOT?: Enumerable<Teams_usersScalarWhereInput>
    id?: UuidFilter | string
    user_id?: UuidFilter | string
    team_id?: UuidFilter | string
    role?: Enumteam_roleFilter | team_role
  }

  export type TeamsCreateWithoutTeams_usersInput = {
    id: string
    name: string
    user_id: string
    link_pswd: string
    link_exp: Date | string
    habits?: HabitsCreateNestedManyWithoutTeamsInput
  }

  export type TeamsUncheckedCreateWithoutTeams_usersInput = {
    id: string
    name: string
    user_id: string
    link_pswd: string
    link_exp: Date | string
    habits?: HabitsUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type TeamsCreateOrConnectWithoutTeams_usersInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutTeams_usersInput, TeamsUncheckedCreateWithoutTeams_usersInput>
  }

  export type TeamsUpsertWithoutTeams_usersInput = {
    update: XOR<TeamsUpdateWithoutTeams_usersInput, TeamsUncheckedUpdateWithoutTeams_usersInput>
    create: XOR<TeamsCreateWithoutTeams_usersInput, TeamsUncheckedCreateWithoutTeams_usersInput>
  }

  export type TeamsUpdateWithoutTeams_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    link_pswd?: StringFieldUpdateOperationsInput | string
    link_exp?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitsUpdateManyWithoutTeamsNestedInput
  }

  export type TeamsUncheckedUpdateWithoutTeams_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    link_pswd?: StringFieldUpdateOperationsInput | string
    link_exp?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitsUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type Habit_completionsCreateManyHabitsInput = {
    id: string
    user_id: string
    date: Date | string
    electric_user_id?: string | null
  }

  export type Habits_completersCreateManyHabitsInput = {
    id: string
    user_id: string
  }

  export type Habit_completionsUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Habit_completionsUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Habit_completionsUncheckedUpdateManyWithoutHabit_completionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Habits_completersUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type Habits_completersUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type Habits_completersUncheckedUpdateManyWithoutHabits_completersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type HabitsCreateManyTeamsInput = {
    id: string
    amount: number
    time: Date | string
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
    sunday: boolean
    name: string
    icon: string
    color: string
    habit_type: habit_type
    period: period
    user_id?: string | null
    electric_user_id?: string | null
  }

  export type Teams_usersCreateManyTeamsInput = {
    id: string
    user_id: string
    role: team_role
  }

  export type HabitsUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    habit_completions?: Habit_completionsUpdateManyWithoutHabitsNestedInput
    habits_completers?: Habits_completersUpdateManyWithoutHabitsNestedInput
  }

  export type HabitsUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    habit_completions?: Habit_completionsUncheckedUpdateManyWithoutHabitsNestedInput
    habits_completers?: Habits_completersUncheckedUpdateManyWithoutHabitsNestedInput
  }

  export type HabitsUncheckedUpdateManyWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: BoolFieldUpdateOperationsInput | boolean
    tuesday?: BoolFieldUpdateOperationsInput | boolean
    wednesday?: BoolFieldUpdateOperationsInput | boolean
    thursday?: BoolFieldUpdateOperationsInput | boolean
    friday?: BoolFieldUpdateOperationsInput | boolean
    saturday?: BoolFieldUpdateOperationsInput | boolean
    sunday?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    habit_type?: Enumhabit_typeFieldUpdateOperationsInput | habit_type
    period?: EnumperiodFieldUpdateOperationsInput | period
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Teams_usersUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_roleFieldUpdateOperationsInput | team_role
  }

  export type Teams_usersUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_roleFieldUpdateOperationsInput | team_role
  }

  export type Teams_usersUncheckedUpdateManyWithoutTeams_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_roleFieldUpdateOperationsInput | team_role
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}