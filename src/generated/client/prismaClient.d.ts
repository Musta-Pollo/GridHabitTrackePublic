
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
 * Model Habits
 * 
 */
export type Habits = {
  /**
   * @zod.string.uuid()
   */
  id: string
  habit_type: habit_type | null
  period: period | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
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
  description: string | null
  /**
   * @zod.string.uuid()
   */
  monday_not_id: string
  /**
   * @zod.string.uuid()
   */
  tuesday_not_id: string
  /**
   * @zod.string.uuid()
   */
  wednesday_not_id: string
  /**
   * @zod.string.uuid()
   */
  thursday_not_id: string
  /**
   * @zod.string.uuid()
   */
  friday_not_id: string
  /**
   * @zod.string.uuid()
   */
  saturday_not_id: string
  /**
   * @zod.string.uuid()
   */
  sunday_not_id: string
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  habit_order: number | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  habit_order2: number
}

/**
 * Model Habits_completions
 * 
 */
export type Habits_completions = {
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
  /**
   * @zod.string.uuid()
   */
  electric_user_id: string
  date: Date | null
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


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Habits
 * const habits = await prisma.habits.findMany()
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
   * // Fetch zero or more Habits
   * const habits = await prisma.habits.findMany()
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
   * `prisma.habits`: Exposes CRUD operations for the **Habits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habits.findMany()
    * ```
    */
  get habits(): Prisma.HabitsDelegate<GlobalReject>;

  /**
   * `prisma.habits_completions`: Exposes CRUD operations for the **Habits_completions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits_completions
    * const habits_completions = await prisma.habits_completions.findMany()
    * ```
    */
  get habits_completions(): Prisma.Habits_completionsDelegate<GlobalReject>;
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
    Habits: 'Habits',
    Habits_completions: 'Habits_completions'
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
    habits_completions: number
  }

  export type HabitsCountOutputTypeSelect = {
    habits_completions?: boolean
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
   * Models
   */

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
    habit_order: number | null
    habit_order2: number | null
  }

  export type HabitsSumAggregateOutputType = {
    amount: number | null
    habit_order: number | null
    habit_order2: number | null
  }

  export type HabitsMinAggregateOutputType = {
    id: string | null
    habit_type: habit_type | null
    period: period | null
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
    team_id: string | null
    user_id: string | null
    electric_user_id: string | null
    description: string | null
    monday_not_id: string | null
    tuesday_not_id: string | null
    wednesday_not_id: string | null
    thursday_not_id: string | null
    friday_not_id: string | null
    saturday_not_id: string | null
    sunday_not_id: string | null
    habit_order: number | null
    habit_order2: number | null
  }

  export type HabitsMaxAggregateOutputType = {
    id: string | null
    habit_type: habit_type | null
    period: period | null
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
    team_id: string | null
    user_id: string | null
    electric_user_id: string | null
    description: string | null
    monday_not_id: string | null
    tuesday_not_id: string | null
    wednesday_not_id: string | null
    thursday_not_id: string | null
    friday_not_id: string | null
    saturday_not_id: string | null
    sunday_not_id: string | null
    habit_order: number | null
    habit_order2: number | null
  }

  export type HabitsCountAggregateOutputType = {
    id: number
    habit_type: number
    period: number
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
    team_id: number
    user_id: number
    electric_user_id: number
    description: number
    monday_not_id: number
    tuesday_not_id: number
    wednesday_not_id: number
    thursday_not_id: number
    friday_not_id: number
    saturday_not_id: number
    sunday_not_id: number
    habit_order: number
    habit_order2: number
    _all: number
  }


  export type HabitsAvgAggregateInputType = {
    amount?: true
    habit_order?: true
    habit_order2?: true
  }

  export type HabitsSumAggregateInputType = {
    amount?: true
    habit_order?: true
    habit_order2?: true
  }

  export type HabitsMinAggregateInputType = {
    id?: true
    habit_type?: true
    period?: true
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
    team_id?: true
    user_id?: true
    electric_user_id?: true
    description?: true
    monday_not_id?: true
    tuesday_not_id?: true
    wednesday_not_id?: true
    thursday_not_id?: true
    friday_not_id?: true
    saturday_not_id?: true
    sunday_not_id?: true
    habit_order?: true
    habit_order2?: true
  }

  export type HabitsMaxAggregateInputType = {
    id?: true
    habit_type?: true
    period?: true
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
    team_id?: true
    user_id?: true
    electric_user_id?: true
    description?: true
    monday_not_id?: true
    tuesday_not_id?: true
    wednesday_not_id?: true
    thursday_not_id?: true
    friday_not_id?: true
    saturday_not_id?: true
    sunday_not_id?: true
    habit_order?: true
    habit_order2?: true
  }

  export type HabitsCountAggregateInputType = {
    id?: true
    habit_type?: true
    period?: true
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
    team_id?: true
    user_id?: true
    electric_user_id?: true
    description?: true
    monday_not_id?: true
    tuesday_not_id?: true
    wednesday_not_id?: true
    thursday_not_id?: true
    friday_not_id?: true
    saturday_not_id?: true
    sunday_not_id?: true
    habit_order?: true
    habit_order2?: true
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
    habit_type: habit_type | null
    period: period | null
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
    team_id: string | null
    user_id: string | null
    electric_user_id: string | null
    description: string | null
    monday_not_id: string
    tuesday_not_id: string
    wednesday_not_id: string
    thursday_not_id: string
    friday_not_id: string
    saturday_not_id: string
    sunday_not_id: string
    habit_order: number | null
    habit_order2: number
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
    habit_type?: boolean
    period?: boolean
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
    team_id?: boolean
    user_id?: boolean
    electric_user_id?: boolean
    description?: boolean
    monday_not_id?: boolean
    tuesday_not_id?: boolean
    wednesday_not_id?: boolean
    thursday_not_id?: boolean
    friday_not_id?: boolean
    saturday_not_id?: boolean
    sunday_not_id?: boolean
    habit_order?: boolean
    habit_order2?: boolean
    habits_completions?: boolean | Habits$habits_completionsArgs
    _count?: boolean | HabitsCountOutputTypeArgs
  }


  export type HabitsInclude = {
    habits_completions?: boolean | Habits$habits_completionsArgs
    _count?: boolean | HabitsCountOutputTypeArgs
  } 

  export type HabitsGetPayload<S extends boolean | null | undefined | HabitsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Habits :
    S extends undefined ? never :
    S extends { include: any } & (HabitsArgs | HabitsFindManyArgs)
    ? Habits  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'habits_completions' ? Array < Habits_completionsGetPayload<S['include'][P]>>  :
        P extends '_count' ? HabitsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HabitsArgs | HabitsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'habits_completions' ? Array < Habits_completionsGetPayload<S['select'][P]>>  :
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

    habits_completions<T extends Habits$habits_completionsArgs= {}>(args?: Subset<T, Habits$habits_completionsArgs>): PrismaPromise<Array<Habits_completionsGetPayload<T>>| Null>;

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
   * Habits.habits_completions
   */
  export type Habits$habits_completionsArgs = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
    where?: Habits_completionsWhereInput
    orderBy?: Enumerable<Habits_completionsOrderByWithRelationInput>
    cursor?: Habits_completionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Habits_completionsScalarFieldEnum>
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
   * Model Habits_completions
   */


  export type AggregateHabits_completions = {
    _count: Habits_completionsCountAggregateOutputType | null
    _min: Habits_completionsMinAggregateOutputType | null
    _max: Habits_completionsMaxAggregateOutputType | null
  }

  export type Habits_completionsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    habit_id: string | null
    electric_user_id: string | null
    date: Date | null
  }

  export type Habits_completionsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    habit_id: string | null
    electric_user_id: string | null
    date: Date | null
  }

  export type Habits_completionsCountAggregateOutputType = {
    id: number
    user_id: number
    habit_id: number
    electric_user_id: number
    date: number
    _all: number
  }


  export type Habits_completionsMinAggregateInputType = {
    id?: true
    user_id?: true
    habit_id?: true
    electric_user_id?: true
    date?: true
  }

  export type Habits_completionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    habit_id?: true
    electric_user_id?: true
    date?: true
  }

  export type Habits_completionsCountAggregateInputType = {
    id?: true
    user_id?: true
    habit_id?: true
    electric_user_id?: true
    date?: true
    _all?: true
  }

  export type Habits_completionsAggregateArgs = {
    /**
     * Filter which Habits_completions to aggregate.
     * 
    **/
    where?: Habits_completionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits_completions to fetch.
     * 
    **/
    orderBy?: Enumerable<Habits_completionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Habits_completionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits_completions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits_completions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits_completions
    **/
    _count?: true | Habits_completionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Habits_completionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Habits_completionsMaxAggregateInputType
  }

  export type GetHabits_completionsAggregateType<T extends Habits_completionsAggregateArgs> = {
        [P in keyof T & keyof AggregateHabits_completions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabits_completions[P]>
      : GetScalarType<T[P], AggregateHabits_completions[P]>
  }




  export type Habits_completionsGroupByArgs = {
    where?: Habits_completionsWhereInput
    orderBy?: Enumerable<Habits_completionsOrderByWithAggregationInput>
    by: Array<Habits_completionsScalarFieldEnum>
    having?: Habits_completionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Habits_completionsCountAggregateInputType | true
    _min?: Habits_completionsMinAggregateInputType
    _max?: Habits_completionsMaxAggregateInputType
  }


  export type Habits_completionsGroupByOutputType = {
    id: string
    user_id: string
    habit_id: string
    electric_user_id: string
    date: Date | null
    _count: Habits_completionsCountAggregateOutputType | null
    _min: Habits_completionsMinAggregateOutputType | null
    _max: Habits_completionsMaxAggregateOutputType | null
  }

  type GetHabits_completionsGroupByPayload<T extends Habits_completionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Habits_completionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Habits_completionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Habits_completionsGroupByOutputType[P]>
            : GetScalarType<T[P], Habits_completionsGroupByOutputType[P]>
        }
      >
    >


  export type Habits_completionsSelect = {
    id?: boolean
    user_id?: boolean
    habit_id?: boolean
    electric_user_id?: boolean
    date?: boolean
    habits?: boolean | HabitsArgs
  }


  export type Habits_completionsInclude = {
    habits?: boolean | HabitsArgs
  } 

  export type Habits_completionsGetPayload<S extends boolean | null | undefined | Habits_completionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Habits_completions :
    S extends undefined ? never :
    S extends { include: any } & (Habits_completionsArgs | Habits_completionsFindManyArgs)
    ? Habits_completions  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'habits' ? HabitsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Habits_completionsArgs | Habits_completionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'habits' ? HabitsGetPayload<S['select'][P]> :  P extends keyof Habits_completions ? Habits_completions[P] : never
  } 
      : Habits_completions


  type Habits_completionsCountArgs = Merge<
    Omit<Habits_completionsFindManyArgs, 'select' | 'include'> & {
      select?: Habits_completionsCountAggregateInputType | true
    }
  >

  export interface Habits_completionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Habits_completions that matches the filter.
     * @param {Habits_completionsFindUniqueArgs} args - Arguments to find a Habits_completions
     * @example
     * // Get one Habits_completions
     * const habits_completions = await prisma.habits_completions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Habits_completionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Habits_completionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Habits_completions'> extends True ? Prisma__Habits_completionsClient<Habits_completionsGetPayload<T>> : Prisma__Habits_completionsClient<Habits_completionsGetPayload<T> | null, null>

    /**
     * Find one Habits_completions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Habits_completionsFindUniqueOrThrowArgs} args - Arguments to find a Habits_completions
     * @example
     * // Get one Habits_completions
     * const habits_completions = await prisma.habits_completions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Habits_completionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Habits_completionsFindUniqueOrThrowArgs>
    ): Prisma__Habits_completionsClient<Habits_completionsGetPayload<T>>

    /**
     * Find the first Habits_completions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completionsFindFirstArgs} args - Arguments to find a Habits_completions
     * @example
     * // Get one Habits_completions
     * const habits_completions = await prisma.habits_completions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Habits_completionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Habits_completionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Habits_completions'> extends True ? Prisma__Habits_completionsClient<Habits_completionsGetPayload<T>> : Prisma__Habits_completionsClient<Habits_completionsGetPayload<T> | null, null>

    /**
     * Find the first Habits_completions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completionsFindFirstOrThrowArgs} args - Arguments to find a Habits_completions
     * @example
     * // Get one Habits_completions
     * const habits_completions = await prisma.habits_completions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Habits_completionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Habits_completionsFindFirstOrThrowArgs>
    ): Prisma__Habits_completionsClient<Habits_completionsGetPayload<T>>

    /**
     * Find zero or more Habits_completions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits_completions
     * const habits_completions = await prisma.habits_completions.findMany()
     * 
     * // Get first 10 Habits_completions
     * const habits_completions = await prisma.habits_completions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habits_completionsWithIdOnly = await prisma.habits_completions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Habits_completionsFindManyArgs>(
      args?: SelectSubset<T, Habits_completionsFindManyArgs>
    ): PrismaPromise<Array<Habits_completionsGetPayload<T>>>

    /**
     * Create a Habits_completions.
     * @param {Habits_completionsCreateArgs} args - Arguments to create a Habits_completions.
     * @example
     * // Create one Habits_completions
     * const Habits_completions = await prisma.habits_completions.create({
     *   data: {
     *     // ... data to create a Habits_completions
     *   }
     * })
     * 
    **/
    create<T extends Habits_completionsCreateArgs>(
      args: SelectSubset<T, Habits_completionsCreateArgs>
    ): Prisma__Habits_completionsClient<Habits_completionsGetPayload<T>>

    /**
     * Create many Habits_completions.
     *     @param {Habits_completionsCreateManyArgs} args - Arguments to create many Habits_completions.
     *     @example
     *     // Create many Habits_completions
     *     const habits_completions = await prisma.habits_completions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Habits_completionsCreateManyArgs>(
      args?: SelectSubset<T, Habits_completionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Habits_completions.
     * @param {Habits_completionsDeleteArgs} args - Arguments to delete one Habits_completions.
     * @example
     * // Delete one Habits_completions
     * const Habits_completions = await prisma.habits_completions.delete({
     *   where: {
     *     // ... filter to delete one Habits_completions
     *   }
     * })
     * 
    **/
    delete<T extends Habits_completionsDeleteArgs>(
      args: SelectSubset<T, Habits_completionsDeleteArgs>
    ): Prisma__Habits_completionsClient<Habits_completionsGetPayload<T>>

    /**
     * Update one Habits_completions.
     * @param {Habits_completionsUpdateArgs} args - Arguments to update one Habits_completions.
     * @example
     * // Update one Habits_completions
     * const habits_completions = await prisma.habits_completions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Habits_completionsUpdateArgs>(
      args: SelectSubset<T, Habits_completionsUpdateArgs>
    ): Prisma__Habits_completionsClient<Habits_completionsGetPayload<T>>

    /**
     * Delete zero or more Habits_completions.
     * @param {Habits_completionsDeleteManyArgs} args - Arguments to filter Habits_completions to delete.
     * @example
     * // Delete a few Habits_completions
     * const { count } = await prisma.habits_completions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Habits_completionsDeleteManyArgs>(
      args?: SelectSubset<T, Habits_completionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits_completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits_completions
     * const habits_completions = await prisma.habits_completions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Habits_completionsUpdateManyArgs>(
      args: SelectSubset<T, Habits_completionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Habits_completions.
     * @param {Habits_completionsUpsertArgs} args - Arguments to update or create a Habits_completions.
     * @example
     * // Update or create a Habits_completions
     * const habits_completions = await prisma.habits_completions.upsert({
     *   create: {
     *     // ... data to create a Habits_completions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habits_completions we want to update
     *   }
     * })
    **/
    upsert<T extends Habits_completionsUpsertArgs>(
      args: SelectSubset<T, Habits_completionsUpsertArgs>
    ): Prisma__Habits_completionsClient<Habits_completionsGetPayload<T>>

    /**
     * Count the number of Habits_completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completionsCountArgs} args - Arguments to filter Habits_completions to count.
     * @example
     * // Count the number of Habits_completions
     * const count = await prisma.habits_completions.count({
     *   where: {
     *     // ... the filter for the Habits_completions we want to count
     *   }
     * })
    **/
    count<T extends Habits_completionsCountArgs>(
      args?: Subset<T, Habits_completionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Habits_completionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habits_completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Habits_completionsAggregateArgs>(args: Subset<T, Habits_completionsAggregateArgs>): PrismaPromise<GetHabits_completionsAggregateType<T>>

    /**
     * Group by Habits_completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habits_completionsGroupByArgs} args - Group by arguments.
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
      T extends Habits_completionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Habits_completionsGroupByArgs['orderBy'] }
        : { orderBy?: Habits_completionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Habits_completionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabits_completionsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Habits_completions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Habits_completionsClient<T, Null = never> implements PrismaPromise<T> {
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
   * Habits_completions base type for findUnique actions
   */
  export type Habits_completionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
    /**
     * Filter, which Habits_completions to fetch.
     * 
    **/
    where: Habits_completionsWhereUniqueInput
  }

  /**
   * Habits_completions findUnique
   */
  export interface Habits_completionsFindUniqueArgs extends Habits_completionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Habits_completions findUniqueOrThrow
   */
  export type Habits_completionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
    /**
     * Filter, which Habits_completions to fetch.
     * 
    **/
    where: Habits_completionsWhereUniqueInput
  }


  /**
   * Habits_completions base type for findFirst actions
   */
  export type Habits_completionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
    /**
     * Filter, which Habits_completions to fetch.
     * 
    **/
    where?: Habits_completionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits_completions to fetch.
     * 
    **/
    orderBy?: Enumerable<Habits_completionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits_completions.
     * 
    **/
    cursor?: Habits_completionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits_completions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits_completions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits_completions.
     * 
    **/
    distinct?: Enumerable<Habits_completionsScalarFieldEnum>
  }

  /**
   * Habits_completions findFirst
   */
  export interface Habits_completionsFindFirstArgs extends Habits_completionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Habits_completions findFirstOrThrow
   */
  export type Habits_completionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
    /**
     * Filter, which Habits_completions to fetch.
     * 
    **/
    where?: Habits_completionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits_completions to fetch.
     * 
    **/
    orderBy?: Enumerable<Habits_completionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits_completions.
     * 
    **/
    cursor?: Habits_completionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits_completions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits_completions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits_completions.
     * 
    **/
    distinct?: Enumerable<Habits_completionsScalarFieldEnum>
  }


  /**
   * Habits_completions findMany
   */
  export type Habits_completionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
    /**
     * Filter, which Habits_completions to fetch.
     * 
    **/
    where?: Habits_completionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits_completions to fetch.
     * 
    **/
    orderBy?: Enumerable<Habits_completionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits_completions.
     * 
    **/
    cursor?: Habits_completionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits_completions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits_completions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Habits_completionsScalarFieldEnum>
  }


  /**
   * Habits_completions create
   */
  export type Habits_completionsCreateArgs = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
    /**
     * The data needed to create a Habits_completions.
     * 
    **/
    data: XOR<Habits_completionsCreateInput, Habits_completionsUncheckedCreateInput>
  }


  /**
   * Habits_completions createMany
   */
  export type Habits_completionsCreateManyArgs = {
    /**
     * The data used to create many Habits_completions.
     * 
    **/
    data: Enumerable<Habits_completionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Habits_completions update
   */
  export type Habits_completionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
    /**
     * The data needed to update a Habits_completions.
     * 
    **/
    data: XOR<Habits_completionsUpdateInput, Habits_completionsUncheckedUpdateInput>
    /**
     * Choose, which Habits_completions to update.
     * 
    **/
    where: Habits_completionsWhereUniqueInput
  }


  /**
   * Habits_completions updateMany
   */
  export type Habits_completionsUpdateManyArgs = {
    /**
     * The data used to update Habits_completions.
     * 
    **/
    data: XOR<Habits_completionsUpdateManyMutationInput, Habits_completionsUncheckedUpdateManyInput>
    /**
     * Filter which Habits_completions to update
     * 
    **/
    where?: Habits_completionsWhereInput
  }


  /**
   * Habits_completions upsert
   */
  export type Habits_completionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
    /**
     * The filter to search for the Habits_completions to update in case it exists.
     * 
    **/
    where: Habits_completionsWhereUniqueInput
    /**
     * In case the Habits_completions found by the `where` argument doesn't exist, create a new Habits_completions with this data.
     * 
    **/
    create: XOR<Habits_completionsCreateInput, Habits_completionsUncheckedCreateInput>
    /**
     * In case the Habits_completions was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Habits_completionsUpdateInput, Habits_completionsUncheckedUpdateInput>
  }


  /**
   * Habits_completions delete
   */
  export type Habits_completionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
    /**
     * Filter which Habits_completions to delete.
     * 
    **/
    where: Habits_completionsWhereUniqueInput
  }


  /**
   * Habits_completions deleteMany
   */
  export type Habits_completionsDeleteManyArgs = {
    /**
     * Filter which Habits_completions to delete
     * 
    **/
    where?: Habits_completionsWhereInput
  }


  /**
   * Habits_completions without action
   */
  export type Habits_completionsArgs = {
    /**
     * Select specific fields to fetch from the Habits_completions
     * 
    **/
    select?: Habits_completionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Habits_completionsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const HabitsScalarFieldEnum: {
    id: 'id',
    habit_type: 'habit_type',
    period: 'period',
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
    team_id: 'team_id',
    user_id: 'user_id',
    electric_user_id: 'electric_user_id',
    description: 'description',
    monday_not_id: 'monday_not_id',
    tuesday_not_id: 'tuesday_not_id',
    wednesday_not_id: 'wednesday_not_id',
    thursday_not_id: 'thursday_not_id',
    friday_not_id: 'friday_not_id',
    saturday_not_id: 'saturday_not_id',
    sunday_not_id: 'sunday_not_id',
    habit_order: 'habit_order',
    habit_order2: 'habit_order2'
  };

  export type HabitsScalarFieldEnum = (typeof HabitsScalarFieldEnum)[keyof typeof HabitsScalarFieldEnum]


  export const Habits_completionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    habit_id: 'habit_id',
    electric_user_id: 'electric_user_id',
    date: 'date'
  };

  export type Habits_completionsScalarFieldEnum = (typeof Habits_completionsScalarFieldEnum)[keyof typeof Habits_completionsScalarFieldEnum]


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


  export type HabitsWhereInput = {
    AND?: Enumerable<HabitsWhereInput>
    OR?: Enumerable<HabitsWhereInput>
    NOT?: Enumerable<HabitsWhereInput>
    id?: UuidFilter | string
    habit_type?: Enumhabit_typeNullableFilter | habit_type | null
    period?: EnumperiodNullableFilter | period | null
    amount?: IntNullableFilter | number | null
    time?: DateTimeNullableFilter | Date | string | null
    monday?: BoolNullableFilter | boolean | null
    tuesday?: BoolNullableFilter | boolean | null
    wednesday?: BoolNullableFilter | boolean | null
    thursday?: BoolNullableFilter | boolean | null
    friday?: BoolNullableFilter | boolean | null
    saturday?: BoolNullableFilter | boolean | null
    sunday?: BoolNullableFilter | boolean | null
    name?: StringNullableFilter | string | null
    icon?: StringNullableFilter | string | null
    color?: StringNullableFilter | string | null
    team_id?: UuidNullableFilter | string | null
    user_id?: UuidNullableFilter | string | null
    electric_user_id?: UuidNullableFilter | string | null
    description?: StringNullableFilter | string | null
    monday_not_id?: UuidFilter | string
    tuesday_not_id?: UuidFilter | string
    wednesday_not_id?: UuidFilter | string
    thursday_not_id?: UuidFilter | string
    friday_not_id?: UuidFilter | string
    saturday_not_id?: UuidFilter | string
    sunday_not_id?: UuidFilter | string
    habit_order?: IntNullableFilter | number | null
    habit_order2?: IntFilter | number
    habits_completions?: Habits_completionsListRelationFilter
  }

  export type HabitsOrderByWithRelationInput = {
    id?: SortOrder
    habit_type?: SortOrder
    period?: SortOrder
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
    team_id?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
    description?: SortOrder
    monday_not_id?: SortOrder
    tuesday_not_id?: SortOrder
    wednesday_not_id?: SortOrder
    thursday_not_id?: SortOrder
    friday_not_id?: SortOrder
    saturday_not_id?: SortOrder
    sunday_not_id?: SortOrder
    habit_order?: SortOrder
    habit_order2?: SortOrder
    habits_completions?: Habits_completionsOrderByRelationAggregateInput
  }

  export type HabitsWhereUniqueInput = {
    id?: string
  }

  export type HabitsOrderByWithAggregationInput = {
    id?: SortOrder
    habit_type?: SortOrder
    period?: SortOrder
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
    team_id?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
    description?: SortOrder
    monday_not_id?: SortOrder
    tuesday_not_id?: SortOrder
    wednesday_not_id?: SortOrder
    thursday_not_id?: SortOrder
    friday_not_id?: SortOrder
    saturday_not_id?: SortOrder
    sunday_not_id?: SortOrder
    habit_order?: SortOrder
    habit_order2?: SortOrder
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
    habit_type?: Enumhabit_typeNullableWithAggregatesFilter | habit_type | null
    period?: EnumperiodNullableWithAggregatesFilter | period | null
    amount?: IntNullableWithAggregatesFilter | number | null
    time?: DateTimeNullableWithAggregatesFilter | Date | string | null
    monday?: BoolNullableWithAggregatesFilter | boolean | null
    tuesday?: BoolNullableWithAggregatesFilter | boolean | null
    wednesday?: BoolNullableWithAggregatesFilter | boolean | null
    thursday?: BoolNullableWithAggregatesFilter | boolean | null
    friday?: BoolNullableWithAggregatesFilter | boolean | null
    saturday?: BoolNullableWithAggregatesFilter | boolean | null
    sunday?: BoolNullableWithAggregatesFilter | boolean | null
    name?: StringNullableWithAggregatesFilter | string | null
    icon?: StringNullableWithAggregatesFilter | string | null
    color?: StringNullableWithAggregatesFilter | string | null
    team_id?: UuidNullableWithAggregatesFilter | string | null
    user_id?: UuidNullableWithAggregatesFilter | string | null
    electric_user_id?: UuidNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    monday_not_id?: UuidWithAggregatesFilter | string
    tuesday_not_id?: UuidWithAggregatesFilter | string
    wednesday_not_id?: UuidWithAggregatesFilter | string
    thursday_not_id?: UuidWithAggregatesFilter | string
    friday_not_id?: UuidWithAggregatesFilter | string
    saturday_not_id?: UuidWithAggregatesFilter | string
    sunday_not_id?: UuidWithAggregatesFilter | string
    habit_order?: IntNullableWithAggregatesFilter | number | null
    habit_order2?: IntWithAggregatesFilter | number
  }

  export type Habits_completionsWhereInput = {
    AND?: Enumerable<Habits_completionsWhereInput>
    OR?: Enumerable<Habits_completionsWhereInput>
    NOT?: Enumerable<Habits_completionsWhereInput>
    id?: UuidFilter | string
    user_id?: UuidFilter | string
    habit_id?: UuidFilter | string
    electric_user_id?: UuidFilter | string
    date?: DateTimeNullableFilter | Date | string | null
    habits?: XOR<HabitsRelationFilter, HabitsWhereInput>
  }

  export type Habits_completionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    electric_user_id?: SortOrder
    date?: SortOrder
    habits?: HabitsOrderByWithRelationInput
  }

  export type Habits_completionsWhereUniqueInput = {
    id?: string
  }

  export type Habits_completionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    electric_user_id?: SortOrder
    date?: SortOrder
    _count?: Habits_completionsCountOrderByAggregateInput
    _max?: Habits_completionsMaxOrderByAggregateInput
    _min?: Habits_completionsMinOrderByAggregateInput
  }

  export type Habits_completionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Habits_completionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Habits_completionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Habits_completionsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    user_id?: UuidWithAggregatesFilter | string
    habit_id?: UuidWithAggregatesFilter | string
    electric_user_id?: UuidWithAggregatesFilter | string
    date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type HabitsCreateInput = {
    id: string
    habit_type?: habit_type | null
    period?: period | null
    amount?: number | null
    time?: Date | string | null
    monday?: boolean | null
    tuesday?: boolean | null
    wednesday?: boolean | null
    thursday?: boolean | null
    friday?: boolean | null
    saturday?: boolean | null
    sunday?: boolean | null
    name?: string | null
    icon?: string | null
    color?: string | null
    team_id?: string | null
    user_id?: string | null
    electric_user_id?: string | null
    description?: string | null
    monday_not_id: string
    tuesday_not_id: string
    wednesday_not_id: string
    thursday_not_id: string
    friday_not_id: string
    saturday_not_id: string
    sunday_not_id: string
    habit_order?: number | null
    habit_order2: number
    habits_completions?: Habits_completionsCreateNestedManyWithoutHabitsInput
  }

  export type HabitsUncheckedCreateInput = {
    id: string
    habit_type?: habit_type | null
    period?: period | null
    amount?: number | null
    time?: Date | string | null
    monday?: boolean | null
    tuesday?: boolean | null
    wednesday?: boolean | null
    thursday?: boolean | null
    friday?: boolean | null
    saturday?: boolean | null
    sunday?: boolean | null
    name?: string | null
    icon?: string | null
    color?: string | null
    team_id?: string | null
    user_id?: string | null
    electric_user_id?: string | null
    description?: string | null
    monday_not_id: string
    tuesday_not_id: string
    wednesday_not_id: string
    thursday_not_id: string
    friday_not_id: string
    saturday_not_id: string
    sunday_not_id: string
    habit_order?: number | null
    habit_order2: number
    habits_completions?: Habits_completionsUncheckedCreateNestedManyWithoutHabitsInput
  }

  export type HabitsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit_type?: NullableEnumhabit_typeFieldUpdateOperationsInput | habit_type | null
    period?: NullableEnumperiodFieldUpdateOperationsInput | period | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tuesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wednesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    thursday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    friday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    saturday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sunday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monday_not_id?: StringFieldUpdateOperationsInput | string
    tuesday_not_id?: StringFieldUpdateOperationsInput | string
    wednesday_not_id?: StringFieldUpdateOperationsInput | string
    thursday_not_id?: StringFieldUpdateOperationsInput | string
    friday_not_id?: StringFieldUpdateOperationsInput | string
    saturday_not_id?: StringFieldUpdateOperationsInput | string
    sunday_not_id?: StringFieldUpdateOperationsInput | string
    habit_order?: NullableIntFieldUpdateOperationsInput | number | null
    habit_order2?: IntFieldUpdateOperationsInput | number
    habits_completions?: Habits_completionsUpdateManyWithoutHabitsNestedInput
  }

  export type HabitsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit_type?: NullableEnumhabit_typeFieldUpdateOperationsInput | habit_type | null
    period?: NullableEnumperiodFieldUpdateOperationsInput | period | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tuesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wednesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    thursday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    friday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    saturday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sunday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monday_not_id?: StringFieldUpdateOperationsInput | string
    tuesday_not_id?: StringFieldUpdateOperationsInput | string
    wednesday_not_id?: StringFieldUpdateOperationsInput | string
    thursday_not_id?: StringFieldUpdateOperationsInput | string
    friday_not_id?: StringFieldUpdateOperationsInput | string
    saturday_not_id?: StringFieldUpdateOperationsInput | string
    sunday_not_id?: StringFieldUpdateOperationsInput | string
    habit_order?: NullableIntFieldUpdateOperationsInput | number | null
    habit_order2?: IntFieldUpdateOperationsInput | number
    habits_completions?: Habits_completionsUncheckedUpdateManyWithoutHabitsNestedInput
  }

  export type HabitsCreateManyInput = {
    id: string
    habit_type?: habit_type | null
    period?: period | null
    amount?: number | null
    time?: Date | string | null
    monday?: boolean | null
    tuesday?: boolean | null
    wednesday?: boolean | null
    thursday?: boolean | null
    friday?: boolean | null
    saturday?: boolean | null
    sunday?: boolean | null
    name?: string | null
    icon?: string | null
    color?: string | null
    team_id?: string | null
    user_id?: string | null
    electric_user_id?: string | null
    description?: string | null
    monday_not_id: string
    tuesday_not_id: string
    wednesday_not_id: string
    thursday_not_id: string
    friday_not_id: string
    saturday_not_id: string
    sunday_not_id: string
    habit_order?: number | null
    habit_order2: number
  }

  export type HabitsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit_type?: NullableEnumhabit_typeFieldUpdateOperationsInput | habit_type | null
    period?: NullableEnumperiodFieldUpdateOperationsInput | period | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tuesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wednesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    thursday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    friday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    saturday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sunday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monday_not_id?: StringFieldUpdateOperationsInput | string
    tuesday_not_id?: StringFieldUpdateOperationsInput | string
    wednesday_not_id?: StringFieldUpdateOperationsInput | string
    thursday_not_id?: StringFieldUpdateOperationsInput | string
    friday_not_id?: StringFieldUpdateOperationsInput | string
    saturday_not_id?: StringFieldUpdateOperationsInput | string
    sunday_not_id?: StringFieldUpdateOperationsInput | string
    habit_order?: NullableIntFieldUpdateOperationsInput | number | null
    habit_order2?: IntFieldUpdateOperationsInput | number
  }

  export type HabitsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit_type?: NullableEnumhabit_typeFieldUpdateOperationsInput | habit_type | null
    period?: NullableEnumperiodFieldUpdateOperationsInput | period | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tuesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wednesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    thursday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    friday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    saturday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sunday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monday_not_id?: StringFieldUpdateOperationsInput | string
    tuesday_not_id?: StringFieldUpdateOperationsInput | string
    wednesday_not_id?: StringFieldUpdateOperationsInput | string
    thursday_not_id?: StringFieldUpdateOperationsInput | string
    friday_not_id?: StringFieldUpdateOperationsInput | string
    saturday_not_id?: StringFieldUpdateOperationsInput | string
    sunday_not_id?: StringFieldUpdateOperationsInput | string
    habit_order?: NullableIntFieldUpdateOperationsInput | number | null
    habit_order2?: IntFieldUpdateOperationsInput | number
  }

  export type Habits_completionsCreateInput = {
    id: string
    user_id: string
    electric_user_id: string
    date?: Date | string | null
    habits: HabitsCreateNestedOneWithoutHabits_completionsInput
  }

  export type Habits_completionsUncheckedCreateInput = {
    id: string
    user_id: string
    habit_id: string
    electric_user_id: string
    date?: Date | string | null
  }

  export type Habits_completionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    habits?: HabitsUpdateOneRequiredWithoutHabits_completionsNestedInput
  }

  export type Habits_completionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Habits_completionsCreateManyInput = {
    id: string
    user_id: string
    habit_id: string
    electric_user_id: string
    date?: Date | string | null
  }

  export type Habits_completionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Habits_completionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type Enumhabit_typeNullableFilter = {
    equals?: habit_type | null
    in?: Enumerable<habit_type> | null
    notIn?: Enumerable<habit_type> | null
    not?: NestedEnumhabit_typeNullableFilter | habit_type | null
  }

  export type EnumperiodNullableFilter = {
    equals?: period | null
    in?: Enumerable<period> | null
    notIn?: Enumerable<period> | null
    not?: NestedEnumperiodNullableFilter | period | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type StringNullableFilter = {
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
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
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

  export type Habits_completionsListRelationFilter = {
    every?: Habits_completionsWhereInput
    some?: Habits_completionsWhereInput
    none?: Habits_completionsWhereInput
  }

  export type Habits_completionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitsCountOrderByAggregateInput = {
    id?: SortOrder
    habit_type?: SortOrder
    period?: SortOrder
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
    team_id?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
    description?: SortOrder
    monday_not_id?: SortOrder
    tuesday_not_id?: SortOrder
    wednesday_not_id?: SortOrder
    thursday_not_id?: SortOrder
    friday_not_id?: SortOrder
    saturday_not_id?: SortOrder
    sunday_not_id?: SortOrder
    habit_order?: SortOrder
    habit_order2?: SortOrder
  }

  export type HabitsAvgOrderByAggregateInput = {
    amount?: SortOrder
    habit_order?: SortOrder
    habit_order2?: SortOrder
  }

  export type HabitsMaxOrderByAggregateInput = {
    id?: SortOrder
    habit_type?: SortOrder
    period?: SortOrder
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
    team_id?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
    description?: SortOrder
    monday_not_id?: SortOrder
    tuesday_not_id?: SortOrder
    wednesday_not_id?: SortOrder
    thursday_not_id?: SortOrder
    friday_not_id?: SortOrder
    saturday_not_id?: SortOrder
    sunday_not_id?: SortOrder
    habit_order?: SortOrder
    habit_order2?: SortOrder
  }

  export type HabitsMinOrderByAggregateInput = {
    id?: SortOrder
    habit_type?: SortOrder
    period?: SortOrder
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
    team_id?: SortOrder
    user_id?: SortOrder
    electric_user_id?: SortOrder
    description?: SortOrder
    monday_not_id?: SortOrder
    tuesday_not_id?: SortOrder
    wednesday_not_id?: SortOrder
    thursday_not_id?: SortOrder
    friday_not_id?: SortOrder
    saturday_not_id?: SortOrder
    sunday_not_id?: SortOrder
    habit_order?: SortOrder
    habit_order2?: SortOrder
  }

  export type HabitsSumOrderByAggregateInput = {
    amount?: SortOrder
    habit_order?: SortOrder
    habit_order2?: SortOrder
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

  export type Enumhabit_typeNullableWithAggregatesFilter = {
    equals?: habit_type | null
    in?: Enumerable<habit_type> | null
    notIn?: Enumerable<habit_type> | null
    not?: NestedEnumhabit_typeNullableWithAggregatesFilter | habit_type | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumhabit_typeNullableFilter
    _max?: NestedEnumhabit_typeNullableFilter
  }

  export type EnumperiodNullableWithAggregatesFilter = {
    equals?: period | null
    in?: Enumerable<period> | null
    notIn?: Enumerable<period> | null
    not?: NestedEnumperiodNullableWithAggregatesFilter | period | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumperiodNullableFilter
    _max?: NestedEnumperiodNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
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

  export type HabitsRelationFilter = {
    is?: HabitsWhereInput
    isNot?: HabitsWhereInput
  }

  export type Habits_completionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    electric_user_id?: SortOrder
    date?: SortOrder
  }

  export type Habits_completionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    electric_user_id?: SortOrder
    date?: SortOrder
  }

  export type Habits_completionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    habit_id?: SortOrder
    electric_user_id?: SortOrder
    date?: SortOrder
  }

  export type Habits_completionsCreateNestedManyWithoutHabitsInput = {
    create?: XOR<Enumerable<Habits_completionsCreateWithoutHabitsInput>, Enumerable<Habits_completionsUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habits_completionsCreateOrConnectWithoutHabitsInput>
    createMany?: Habits_completionsCreateManyHabitsInputEnvelope
    connect?: Enumerable<Habits_completionsWhereUniqueInput>
  }

  export type Habits_completionsUncheckedCreateNestedManyWithoutHabitsInput = {
    create?: XOR<Enumerable<Habits_completionsCreateWithoutHabitsInput>, Enumerable<Habits_completionsUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habits_completionsCreateOrConnectWithoutHabitsInput>
    createMany?: Habits_completionsCreateManyHabitsInputEnvelope
    connect?: Enumerable<Habits_completionsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumhabit_typeFieldUpdateOperationsInput = {
    set?: habit_type | null
  }

  export type NullableEnumperiodFieldUpdateOperationsInput = {
    set?: period | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Habits_completionsUpdateManyWithoutHabitsNestedInput = {
    create?: XOR<Enumerable<Habits_completionsCreateWithoutHabitsInput>, Enumerable<Habits_completionsUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habits_completionsCreateOrConnectWithoutHabitsInput>
    upsert?: Enumerable<Habits_completionsUpsertWithWhereUniqueWithoutHabitsInput>
    createMany?: Habits_completionsCreateManyHabitsInputEnvelope
    set?: Enumerable<Habits_completionsWhereUniqueInput>
    disconnect?: Enumerable<Habits_completionsWhereUniqueInput>
    delete?: Enumerable<Habits_completionsWhereUniqueInput>
    connect?: Enumerable<Habits_completionsWhereUniqueInput>
    update?: Enumerable<Habits_completionsUpdateWithWhereUniqueWithoutHabitsInput>
    updateMany?: Enumerable<Habits_completionsUpdateManyWithWhereWithoutHabitsInput>
    deleteMany?: Enumerable<Habits_completionsScalarWhereInput>
  }

  export type Habits_completionsUncheckedUpdateManyWithoutHabitsNestedInput = {
    create?: XOR<Enumerable<Habits_completionsCreateWithoutHabitsInput>, Enumerable<Habits_completionsUncheckedCreateWithoutHabitsInput>>
    connectOrCreate?: Enumerable<Habits_completionsCreateOrConnectWithoutHabitsInput>
    upsert?: Enumerable<Habits_completionsUpsertWithWhereUniqueWithoutHabitsInput>
    createMany?: Habits_completionsCreateManyHabitsInputEnvelope
    set?: Enumerable<Habits_completionsWhereUniqueInput>
    disconnect?: Enumerable<Habits_completionsWhereUniqueInput>
    delete?: Enumerable<Habits_completionsWhereUniqueInput>
    connect?: Enumerable<Habits_completionsWhereUniqueInput>
    update?: Enumerable<Habits_completionsUpdateWithWhereUniqueWithoutHabitsInput>
    updateMany?: Enumerable<Habits_completionsUpdateManyWithWhereWithoutHabitsInput>
    deleteMany?: Enumerable<Habits_completionsScalarWhereInput>
  }

  export type HabitsCreateNestedOneWithoutHabits_completionsInput = {
    create?: XOR<HabitsCreateWithoutHabits_completionsInput, HabitsUncheckedCreateWithoutHabits_completionsInput>
    connectOrCreate?: HabitsCreateOrConnectWithoutHabits_completionsInput
    connect?: HabitsWhereUniqueInput
  }

  export type HabitsUpdateOneRequiredWithoutHabits_completionsNestedInput = {
    create?: XOR<HabitsCreateWithoutHabits_completionsInput, HabitsUncheckedCreateWithoutHabits_completionsInput>
    connectOrCreate?: HabitsCreateOrConnectWithoutHabits_completionsInput
    upsert?: HabitsUpsertWithoutHabits_completionsInput
    connect?: HabitsWhereUniqueInput
    update?: XOR<HabitsUpdateWithoutHabits_completionsInput, HabitsUncheckedUpdateWithoutHabits_completionsInput>
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

  export type NestedEnumhabit_typeNullableFilter = {
    equals?: habit_type | null
    in?: Enumerable<habit_type> | null
    notIn?: Enumerable<habit_type> | null
    not?: NestedEnumhabit_typeNullableFilter | habit_type | null
  }

  export type NestedEnumperiodNullableFilter = {
    equals?: period | null
    in?: Enumerable<period> | null
    notIn?: Enumerable<period> | null
    not?: NestedEnumperiodNullableFilter | period | null
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

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
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

  export type NestedEnumhabit_typeNullableWithAggregatesFilter = {
    equals?: habit_type | null
    in?: Enumerable<habit_type> | null
    notIn?: Enumerable<habit_type> | null
    not?: NestedEnumhabit_typeNullableWithAggregatesFilter | habit_type | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumhabit_typeNullableFilter
    _max?: NestedEnumhabit_typeNullableFilter
  }

  export type NestedEnumperiodNullableWithAggregatesFilter = {
    equals?: period | null
    in?: Enumerable<period> | null
    notIn?: Enumerable<period> | null
    not?: NestedEnumperiodNullableWithAggregatesFilter | period | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumperiodNullableFilter
    _max?: NestedEnumperiodNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
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
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
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

  export type Habits_completionsCreateWithoutHabitsInput = {
    id: string
    user_id: string
    electric_user_id: string
    date?: Date | string | null
  }

  export type Habits_completionsUncheckedCreateWithoutHabitsInput = {
    id: string
    user_id: string
    electric_user_id: string
    date?: Date | string | null
  }

  export type Habits_completionsCreateOrConnectWithoutHabitsInput = {
    where: Habits_completionsWhereUniqueInput
    create: XOR<Habits_completionsCreateWithoutHabitsInput, Habits_completionsUncheckedCreateWithoutHabitsInput>
  }

  export type Habits_completionsCreateManyHabitsInputEnvelope = {
    data: Enumerable<Habits_completionsCreateManyHabitsInput>
    skipDuplicates?: boolean
  }

  export type Habits_completionsUpsertWithWhereUniqueWithoutHabitsInput = {
    where: Habits_completionsWhereUniqueInput
    update: XOR<Habits_completionsUpdateWithoutHabitsInput, Habits_completionsUncheckedUpdateWithoutHabitsInput>
    create: XOR<Habits_completionsCreateWithoutHabitsInput, Habits_completionsUncheckedCreateWithoutHabitsInput>
  }

  export type Habits_completionsUpdateWithWhereUniqueWithoutHabitsInput = {
    where: Habits_completionsWhereUniqueInput
    data: XOR<Habits_completionsUpdateWithoutHabitsInput, Habits_completionsUncheckedUpdateWithoutHabitsInput>
  }

  export type Habits_completionsUpdateManyWithWhereWithoutHabitsInput = {
    where: Habits_completionsScalarWhereInput
    data: XOR<Habits_completionsUpdateManyMutationInput, Habits_completionsUncheckedUpdateManyWithoutHabits_completionsInput>
  }

  export type Habits_completionsScalarWhereInput = {
    AND?: Enumerable<Habits_completionsScalarWhereInput>
    OR?: Enumerable<Habits_completionsScalarWhereInput>
    NOT?: Enumerable<Habits_completionsScalarWhereInput>
    id?: UuidFilter | string
    user_id?: UuidFilter | string
    habit_id?: UuidFilter | string
    electric_user_id?: UuidFilter | string
    date?: DateTimeNullableFilter | Date | string | null
  }

  export type HabitsCreateWithoutHabits_completionsInput = {
    id: string
    habit_type?: habit_type | null
    period?: period | null
    amount?: number | null
    time?: Date | string | null
    monday?: boolean | null
    tuesday?: boolean | null
    wednesday?: boolean | null
    thursday?: boolean | null
    friday?: boolean | null
    saturday?: boolean | null
    sunday?: boolean | null
    name?: string | null
    icon?: string | null
    color?: string | null
    team_id?: string | null
    user_id?: string | null
    electric_user_id?: string | null
    description?: string | null
    monday_not_id: string
    tuesday_not_id: string
    wednesday_not_id: string
    thursday_not_id: string
    friday_not_id: string
    saturday_not_id: string
    sunday_not_id: string
    habit_order?: number | null
    habit_order2: number
  }

  export type HabitsUncheckedCreateWithoutHabits_completionsInput = {
    id: string
    habit_type?: habit_type | null
    period?: period | null
    amount?: number | null
    time?: Date | string | null
    monday?: boolean | null
    tuesday?: boolean | null
    wednesday?: boolean | null
    thursday?: boolean | null
    friday?: boolean | null
    saturday?: boolean | null
    sunday?: boolean | null
    name?: string | null
    icon?: string | null
    color?: string | null
    team_id?: string | null
    user_id?: string | null
    electric_user_id?: string | null
    description?: string | null
    monday_not_id: string
    tuesday_not_id: string
    wednesday_not_id: string
    thursday_not_id: string
    friday_not_id: string
    saturday_not_id: string
    sunday_not_id: string
    habit_order?: number | null
    habit_order2: number
  }

  export type HabitsCreateOrConnectWithoutHabits_completionsInput = {
    where: HabitsWhereUniqueInput
    create: XOR<HabitsCreateWithoutHabits_completionsInput, HabitsUncheckedCreateWithoutHabits_completionsInput>
  }

  export type HabitsUpsertWithoutHabits_completionsInput = {
    update: XOR<HabitsUpdateWithoutHabits_completionsInput, HabitsUncheckedUpdateWithoutHabits_completionsInput>
    create: XOR<HabitsCreateWithoutHabits_completionsInput, HabitsUncheckedCreateWithoutHabits_completionsInput>
  }

  export type HabitsUpdateWithoutHabits_completionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit_type?: NullableEnumhabit_typeFieldUpdateOperationsInput | habit_type | null
    period?: NullableEnumperiodFieldUpdateOperationsInput | period | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tuesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wednesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    thursday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    friday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    saturday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sunday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monday_not_id?: StringFieldUpdateOperationsInput | string
    tuesday_not_id?: StringFieldUpdateOperationsInput | string
    wednesday_not_id?: StringFieldUpdateOperationsInput | string
    thursday_not_id?: StringFieldUpdateOperationsInput | string
    friday_not_id?: StringFieldUpdateOperationsInput | string
    saturday_not_id?: StringFieldUpdateOperationsInput | string
    sunday_not_id?: StringFieldUpdateOperationsInput | string
    habit_order?: NullableIntFieldUpdateOperationsInput | number | null
    habit_order2?: IntFieldUpdateOperationsInput | number
  }

  export type HabitsUncheckedUpdateWithoutHabits_completionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit_type?: NullableEnumhabit_typeFieldUpdateOperationsInput | habit_type | null
    period?: NullableEnumperiodFieldUpdateOperationsInput | period | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tuesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wednesday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    thursday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    friday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    saturday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sunday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    team_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    electric_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monday_not_id?: StringFieldUpdateOperationsInput | string
    tuesday_not_id?: StringFieldUpdateOperationsInput | string
    wednesday_not_id?: StringFieldUpdateOperationsInput | string
    thursday_not_id?: StringFieldUpdateOperationsInput | string
    friday_not_id?: StringFieldUpdateOperationsInput | string
    saturday_not_id?: StringFieldUpdateOperationsInput | string
    sunday_not_id?: StringFieldUpdateOperationsInput | string
    habit_order?: NullableIntFieldUpdateOperationsInput | number | null
    habit_order2?: IntFieldUpdateOperationsInput | number
  }

  export type Habits_completionsCreateManyHabitsInput = {
    id: string
    user_id: string
    electric_user_id: string
    date?: Date | string | null
  }

  export type Habits_completionsUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Habits_completionsUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Habits_completionsUncheckedUpdateManyWithoutHabits_completionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    electric_user_id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

type Buffer = Omit<Uint8Array, 'set'>
