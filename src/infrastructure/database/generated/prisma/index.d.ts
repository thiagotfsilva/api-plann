/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Client
 *
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>;
/**
 * Model Goal
 *
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>;
/**
 * Model Event
 *
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>;
/**
 * Model Insurance
 *
 */
export type Insurance = $Result.DefaultSelection<Prisma.$InsurancePayload>;
/**
 * Model Simulation
 *
 */
export type Simulation = $Result.DefaultSelection<Prisma.$SimulationPayload>;
/**
 * Model Wallet
 *
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const FamilyProfile: {
    SINGLE: 'SINGLE';
    COUPLE: 'COUPLE';
    FAMILY: 'FAMILY';
    RETIRED: 'RETIRED';
  };

  export type FamilyProfile =
    (typeof FamilyProfile)[keyof typeof FamilyProfile];

  export const GoalType: {
    RETIREMENT: 'RETIREMENT';
    SHORT_TERM: 'SHORT_TERM';
    MEDIUM_TERM: 'MEDIUM_TERM';
  };

  export type GoalType = (typeof GoalType)[keyof typeof GoalType];

  export const EventFrequency: {
    ONCE: 'ONCE';
    MONTHLY: 'MONTHLY';
    YEARLY: 'YEARLY';
  };

  export type EventFrequency =
    (typeof EventFrequency)[keyof typeof EventFrequency];

  export const EventType: {
    INCOME: 'INCOME';
    EXPENSE: 'EXPENSE';
  };

  export type EventType = (typeof EventType)[keyof typeof EventType];

  export const InsuranceType: {
    LIFE: 'LIFE';
    DISABILITY: 'DISABILITY';
  };

  export type InsuranceType =
    (typeof InsuranceType)[keyof typeof InsuranceType];

  export const UserRole: {
    ADVISOR: 'ADVISOR';
    VIEWER: 'VIEWER';
  };

  export type UserRole = (typeof UserRole)[keyof typeof UserRole];
}

export type FamilyProfile = $Enums.FamilyProfile;

export const FamilyProfile: typeof $Enums.FamilyProfile;

export type GoalType = $Enums.GoalType;

export const GoalType: typeof $Enums.GoalType;

export type EventFrequency = $Enums.EventFrequency;

export const EventFrequency: typeof $Enums.EventFrequency;

export type EventType = $Enums.EventType;

export const EventType: typeof $Enums.EventType;

export type InsuranceType = $Enums.InsuranceType;

export const InsuranceType: typeof $Enums.InsuranceType;

export type UserRole = $Enums.UserRole;

export const UserRole: typeof $Enums.UserRole;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Goals
   * const goals = await prisma.goal.findMany()
   * ```
   */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insurance`: Exposes CRUD operations for the **Insurance** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Insurances
   * const insurances = await prisma.insurance.findMany()
   * ```
   */
  get insurance(): Prisma.InsuranceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.simulation`: Exposes CRUD operations for the **Simulation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Simulations
   * const simulations = await prisma.simulation.findMany()
   * ```
   */
  get simulation(): Prisma.SimulationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Wallets
   * const wallets = await prisma.wallet.findMany()
   * ```
   */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Client: 'Client';
    Goal: 'Goal';
    Event: 'Event';
    Insurance: 'Insurance';
    Simulation: 'Simulation';
    Wallet: 'Wallet';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'client'
        | 'goal'
        | 'event'
        | 'insurance'
        | 'simulation'
        | 'wallet';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>;
        fields: Prisma.ClientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[];
          };
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[];
          };
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[];
          };
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>;
          };
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClient>;
          };
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ClientGroupByOutputType>[];
          };
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>;
            result: $Utils.Optional<ClientCountAggregateOutputType> | number;
          };
        };
      };
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>;
        fields: Prisma.GoalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>;
          };
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>;
          };
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[];
          };
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>;
          };
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[];
          };
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>;
          };
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>;
          };
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[];
          };
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>;
          };
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGoal>;
          };
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GoalGroupByOutputType>[];
          };
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>;
            result: $Utils.Optional<GoalCountAggregateOutputType> | number;
          };
        };
      };
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>;
        fields: Prisma.EventFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEvent>;
          };
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EventGroupByOutputType>[];
          };
          count: {
            args: Prisma.EventCountArgs<ExtArgs>;
            result: $Utils.Optional<EventCountAggregateOutputType> | number;
          };
        };
      };
      Insurance: {
        payload: Prisma.$InsurancePayload<ExtArgs>;
        fields: Prisma.InsuranceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InsuranceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InsuranceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>;
          };
          findFirst: {
            args: Prisma.InsuranceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InsuranceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>;
          };
          findMany: {
            args: Prisma.InsuranceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>[];
          };
          create: {
            args: Prisma.InsuranceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>;
          };
          createMany: {
            args: Prisma.InsuranceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InsuranceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>[];
          };
          delete: {
            args: Prisma.InsuranceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>;
          };
          update: {
            args: Prisma.InsuranceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>;
          };
          deleteMany: {
            args: Prisma.InsuranceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InsuranceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.InsuranceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>[];
          };
          upsert: {
            args: Prisma.InsuranceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>;
          };
          aggregate: {
            args: Prisma.InsuranceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInsurance>;
          };
          groupBy: {
            args: Prisma.InsuranceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InsuranceGroupByOutputType>[];
          };
          count: {
            args: Prisma.InsuranceCountArgs<ExtArgs>;
            result: $Utils.Optional<InsuranceCountAggregateOutputType> | number;
          };
        };
      };
      Simulation: {
        payload: Prisma.$SimulationPayload<ExtArgs>;
        fields: Prisma.SimulationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SimulationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SimulationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>;
          };
          findFirst: {
            args: Prisma.SimulationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SimulationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>;
          };
          findMany: {
            args: Prisma.SimulationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[];
          };
          create: {
            args: Prisma.SimulationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>;
          };
          createMany: {
            args: Prisma.SimulationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SimulationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[];
          };
          delete: {
            args: Prisma.SimulationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>;
          };
          update: {
            args: Prisma.SimulationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>;
          };
          deleteMany: {
            args: Prisma.SimulationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SimulationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SimulationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[];
          };
          upsert: {
            args: Prisma.SimulationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>;
          };
          aggregate: {
            args: Prisma.SimulationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSimulation>;
          };
          groupBy: {
            args: Prisma.SimulationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SimulationGroupByOutputType>[];
          };
          count: {
            args: Prisma.SimulationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SimulationCountAggregateOutputType>
              | number;
          };
        };
      };
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>;
        fields: Prisma.WalletFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[];
          };
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[];
          };
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[];
          };
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWallet>;
          };
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>;
            result: $Utils.Optional<WalletGroupByOutputType>[];
          };
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>;
            result: $Utils.Optional<WalletCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    client?: ClientOmit;
    goal?: GoalOmit;
    event?: EventOmit;
    insurance?: InsuranceOmit;
    simulation?: SimulationOmit;
    wallet?: WalletOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clients: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    clients?: boolean | UserCountOutputTypeCountClientsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ClientWhereInput;
  };

  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    goals: number;
    events: number;
    simulations: number;
    insurances: number;
  };

  export type ClientCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    goals?: boolean | ClientCountOutputTypeCountGoalsArgs;
    events?: boolean | ClientCountOutputTypeCountEventsArgs;
    simulations?: boolean | ClientCountOutputTypeCountSimulationsArgs;
    insurances?: boolean | ClientCountOutputTypeCountInsurancesArgs;
  };

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountGoalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GoalWhereInput;
  };

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountEventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventWhereInput;
  };

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSimulationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SimulationWhereInput;
  };

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountInsurancesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InsuranceWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: $Enums.UserRole;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      clients?: boolean | User$clientsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'email' | 'password' | 'role' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    clients?: boolean | User$clientsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        email: string;
        password: string;
        role: $Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    clients<T extends User$clientsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$clientsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ClientPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'UserRole'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.clients
   */
  export type User$clientsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    where?: ClientWhereInput;
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    cursor?: ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null;
    _avg: ClientAvgAggregateOutputType | null;
    _sum: ClientSumAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
  };

  export type ClientAvgAggregateOutputType = {
    age: number | null;
  };

  export type ClientSumAggregateOutputType = {
    age: number | null;
  };

  export type ClientMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    age: number | null;
    status: boolean | null;
    familyProfile: $Enums.FamilyProfile | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    advisorId: string | null;
  };

  export type ClientMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    age: number | null;
    status: boolean | null;
    familyProfile: $Enums.FamilyProfile | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    advisorId: string | null;
  };

  export type ClientCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    age: number;
    status: number;
    familyProfile: number;
    createdAt: number;
    updatedAt: number;
    advisorId: number;
    _all: number;
  };

  export type ClientAvgAggregateInputType = {
    age?: true;
  };

  export type ClientSumAggregateInputType = {
    age?: true;
  };

  export type ClientMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    age?: true;
    status?: true;
    familyProfile?: true;
    createdAt?: true;
    updatedAt?: true;
    advisorId?: true;
  };

  export type ClientMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    age?: true;
    status?: true;
    familyProfile?: true;
    createdAt?: true;
    updatedAt?: true;
    advisorId?: true;
  };

  export type ClientCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    age?: true;
    status?: true;
    familyProfile?: true;
    createdAt?: true;
    updatedAt?: true;
    advisorId?: true;
    _all?: true;
  };

  export type ClientAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Clients
     **/
    _count?: true | ClientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ClientAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ClientSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClientMaxAggregateInputType;
  };

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>;
  };

  export type ClientGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ClientWhereInput;
    orderBy?:
      | ClientOrderByWithAggregationInput
      | ClientOrderByWithAggregationInput[];
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum;
    having?: ClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInputType | true;
    _avg?: ClientAvgAggregateInputType;
    _sum?: ClientSumAggregateInputType;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
  };

  export type ClientGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt: Date;
    updatedAt: Date;
    advisorId: string | null;
    _count: ClientCountAggregateOutputType | null;
    _avg: ClientAvgAggregateOutputType | null;
    _sum: ClientSumAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
  };

  type GetClientGroupByPayload<T extends ClientGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ClientGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ClientGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>;
        }
      >
    >;

  export type ClientSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      age?: boolean;
      status?: boolean;
      familyProfile?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      advisorId?: boolean;
      goals?: boolean | Client$goalsArgs<ExtArgs>;
      wallet?: boolean | Client$walletArgs<ExtArgs>;
      events?: boolean | Client$eventsArgs<ExtArgs>;
      simulations?: boolean | Client$simulationsArgs<ExtArgs>;
      insurances?: boolean | Client$insurancesArgs<ExtArgs>;
      advisor?: boolean | Client$advisorArgs<ExtArgs>;
      _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['client']
  >;

  export type ClientSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      age?: boolean;
      status?: boolean;
      familyProfile?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      advisorId?: boolean;
      advisor?: boolean | Client$advisorArgs<ExtArgs>;
    },
    ExtArgs['result']['client']
  >;

  export type ClientSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      age?: boolean;
      status?: boolean;
      familyProfile?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      advisorId?: boolean;
      advisor?: boolean | Client$advisorArgs<ExtArgs>;
    },
    ExtArgs['result']['client']
  >;

  export type ClientSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    age?: boolean;
    status?: boolean;
    familyProfile?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    advisorId?: boolean;
  };

  export type ClientOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'email'
    | 'age'
    | 'status'
    | 'familyProfile'
    | 'createdAt'
    | 'updatedAt'
    | 'advisorId',
    ExtArgs['result']['client']
  >;
  export type ClientInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    goals?: boolean | Client$goalsArgs<ExtArgs>;
    wallet?: boolean | Client$walletArgs<ExtArgs>;
    events?: boolean | Client$eventsArgs<ExtArgs>;
    simulations?: boolean | Client$simulationsArgs<ExtArgs>;
    insurances?: boolean | Client$insurancesArgs<ExtArgs>;
    advisor?: boolean | Client$advisorArgs<ExtArgs>;
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ClientIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    advisor?: boolean | Client$advisorArgs<ExtArgs>;
  };
  export type ClientIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    advisor?: boolean | Client$advisorArgs<ExtArgs>;
  };

  export type $ClientPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Client';
    objects: {
      goals: Prisma.$GoalPayload<ExtArgs>[];
      wallet: Prisma.$WalletPayload<ExtArgs> | null;
      events: Prisma.$EventPayload<ExtArgs>[];
      simulations: Prisma.$SimulationPayload<ExtArgs>[];
      insurances: Prisma.$InsurancePayload<ExtArgs>[];
      advisor: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        email: string;
        age: number;
        status: boolean;
        familyProfile: $Enums.FamilyProfile;
        createdAt: Date;
        updatedAt: Date;
        advisorId: string | null;
      },
      ExtArgs['result']['client']
    >;
    composites: {};
  };

  type ClientGetPayload<
    S extends boolean | null | undefined | ClientDefaultArgs,
  > = $Result.GetResult<Prisma.$ClientPayload, S>;

  type ClientCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientCountAggregateInputType | true;
  };

  export interface ClientDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Client'];
      meta: { name: 'Client' };
    };
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(
      args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(
      args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     *
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ClientFindManyArgs>(
      args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     *
     */
    create<T extends ClientCreateArgs>(
      args: SelectSubset<T, ClientCreateArgs<ExtArgs>>
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClientCreateManyArgs>(
      args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     *
     */
    delete<T extends ClientDeleteArgs>(
      args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClientUpdateArgs>(
      args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClientDeleteManyArgs>(
      args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClientUpdateManyArgs>(
      args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(
      args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>
    ): Prisma__ClientClient<
      $Result.GetResult<
        Prisma.$ClientPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
     **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(
      args: Subset<T, ClientAggregateArgs>
    ): Prisma.PrismaPromise<GetClientAggregateType<T>>;

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetClientGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Client model
     */
    readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    goals<T extends Client$goalsArgs<ExtArgs> = {}>(
      args?: Subset<T, Client$goalsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$GoalPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    wallet<T extends Client$walletArgs<ExtArgs> = {}>(
      args?: Subset<T, Client$walletArgs<ExtArgs>>
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    events<T extends Client$eventsArgs<ExtArgs> = {}>(
      args?: Subset<T, Client$eventsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$EventPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    simulations<T extends Client$simulationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Client$simulationsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SimulationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    insurances<T extends Client$insurancesArgs<ExtArgs> = {}>(
      args?: Subset<T, Client$insurancesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$InsurancePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    advisor<T extends Client$advisorArgs<ExtArgs> = {}>(
      args?: Subset<T, Client$advisorArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<'Client', 'String'>;
    readonly name: FieldRef<'Client', 'String'>;
    readonly email: FieldRef<'Client', 'String'>;
    readonly age: FieldRef<'Client', 'Int'>;
    readonly status: FieldRef<'Client', 'Boolean'>;
    readonly familyProfile: FieldRef<'Client', 'FamilyProfile'>;
    readonly createdAt: FieldRef<'Client', 'DateTime'>;
    readonly updatedAt: FieldRef<'Client', 'DateTime'>;
    readonly advisorId: FieldRef<'Client', 'String'>;
  }

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * Client create
   */
  export type ClientCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>;
  };

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Client update
   */
  export type ClientUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>;
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>;
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput;
    /**
     * Limit how many Clients to update.
     */
    limit?: number;
  };

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>;
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput;
    /**
     * Limit how many Clients to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput;
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>;
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>;
  };

  /**
   * Client delete
   */
  export type ClientDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput;
  };

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput;
    /**
     * Limit how many Clients to delete.
     */
    limit?: number;
  };

  /**
   * Client.goals
   */
  export type Client$goalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
    where?: GoalWhereInput;
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[];
    cursor?: GoalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * Client.wallet
   */
  export type Client$walletArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    where?: WalletWhereInput;
  };

  /**
   * Client.events
   */
  export type Client$eventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    cursor?: EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Client.simulations
   */
  export type Client$simulationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
    where?: SimulationWhereInput;
    orderBy?:
      | SimulationOrderByWithRelationInput
      | SimulationOrderByWithRelationInput[];
    cursor?: SimulationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[];
  };

  /**
   * Client.insurances
   */
  export type Client$insurancesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
    where?: InsuranceWhereInput;
    orderBy?:
      | InsuranceOrderByWithRelationInput
      | InsuranceOrderByWithRelationInput[];
    cursor?: InsuranceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InsuranceScalarFieldEnum | InsuranceScalarFieldEnum[];
  };

  /**
   * Client.advisor
   */
  export type Client$advisorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Client without action
   */
  export type ClientDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null;
  };

  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null;
    _avg: GoalAvgAggregateOutputType | null;
    _sum: GoalSumAggregateOutputType | null;
    _min: GoalMinAggregateOutputType | null;
    _max: GoalMaxAggregateOutputType | null;
  };

  export type GoalAvgAggregateOutputType = {
    targetValue: number | null;
  };

  export type GoalSumAggregateOutputType = {
    targetValue: number | null;
  };

  export type GoalMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    type: $Enums.GoalType | null;
    targetValue: number | null;
    targetDate: Date | null;
  };

  export type GoalMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    type: $Enums.GoalType | null;
    targetValue: number | null;
    targetDate: Date | null;
  };

  export type GoalCountAggregateOutputType = {
    id: number;
    clientId: number;
    type: number;
    targetValue: number;
    targetDate: number;
    _all: number;
  };

  export type GoalAvgAggregateInputType = {
    targetValue?: true;
  };

  export type GoalSumAggregateInputType = {
    targetValue?: true;
  };

  export type GoalMinAggregateInputType = {
    id?: true;
    clientId?: true;
    type?: true;
    targetValue?: true;
    targetDate?: true;
  };

  export type GoalMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    type?: true;
    targetValue?: true;
    targetDate?: true;
  };

  export type GoalCountAggregateInputType = {
    id?: true;
    clientId?: true;
    type?: true;
    targetValue?: true;
    targetDate?: true;
    _all?: true;
  };

  export type GoalAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Goals
     **/
    _count?: true | GoalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: GoalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: GoalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GoalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GoalMaxAggregateInputType;
  };

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
    [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>;
  };

  export type GoalGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GoalWhereInput;
    orderBy?:
      | GoalOrderByWithAggregationInput
      | GoalOrderByWithAggregationInput[];
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum;
    having?: GoalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoalCountAggregateInputType | true;
    _avg?: GoalAvgAggregateInputType;
    _sum?: GoalSumAggregateInputType;
    _min?: GoalMinAggregateInputType;
    _max?: GoalMaxAggregateInputType;
  };

  export type GoalGroupByOutputType = {
    id: string;
    clientId: string;
    type: $Enums.GoalType;
    targetValue: number;
    targetDate: Date;
    _count: GoalCountAggregateOutputType | null;
    _avg: GoalAvgAggregateOutputType | null;
    _sum: GoalSumAggregateOutputType | null;
    _min: GoalMinAggregateOutputType | null;
    _max: GoalMaxAggregateOutputType | null;
  };

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GoalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
          : GetScalarType<T[P], GoalGroupByOutputType[P]>;
      }
    >
  >;

  export type GoalSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      type?: boolean;
      targetValue?: boolean;
      targetDate?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['goal']
  >;

  export type GoalSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      type?: boolean;
      targetValue?: boolean;
      targetDate?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['goal']
  >;

  export type GoalSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      type?: boolean;
      targetValue?: boolean;
      targetDate?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['goal']
  >;

  export type GoalSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    type?: boolean;
    targetValue?: boolean;
    targetDate?: boolean;
  };

  export type GoalOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'clientId' | 'type' | 'targetValue' | 'targetDate',
    ExtArgs['result']['goal']
  >;
  export type GoalInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };
  export type GoalIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };
  export type GoalIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };

  export type $GoalPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Goal';
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        clientId: string;
        type: $Enums.GoalType;
        targetValue: number;
        targetDate: Date;
      },
      ExtArgs['result']['goal']
    >;
    composites: {};
  };

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> =
    $Result.GetResult<Prisma.$GoalPayload, S>;

  type GoalCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GoalCountAggregateInputType | true;
  };

  export interface GoalDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Goal'];
      meta: { name: 'Goal' };
    };
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(
      args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>
    ): Prisma__GoalClient<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(
      args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GoalClient<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(
      args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>
    ): Prisma__GoalClient<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GoalClient<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     *
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GoalFindManyArgs>(
      args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     *
     */
    create<T extends GoalCreateArgs>(
      args: SelectSubset<T, GoalCreateArgs<ExtArgs>>
    ): Prisma__GoalClient<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GoalCreateManyArgs>(
      args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(
      args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     *
     */
    delete<T extends GoalDeleteArgs>(
      args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>
    ): Prisma__GoalClient<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GoalUpdateArgs>(
      args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>
    ): Prisma__GoalClient<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GoalDeleteManyArgs>(
      args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GoalUpdateManyArgs>(
      args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(
      args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(
      args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>
    ): Prisma__GoalClient<
      $Result.GetResult<
        Prisma.$GoalPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
     **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(
      args: Subset<T, GoalAggregateArgs>
    ): Prisma.PrismaPromise<GetGoalAggregateType<T>>;

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetGoalGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Goal model
     */
    readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClientDefaultArgs<ExtArgs>>
    ): Prisma__ClientClient<
      | $Result.GetResult<
          Prisma.$ClientPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<'Goal', 'String'>;
    readonly clientId: FieldRef<'Goal', 'String'>;
    readonly type: FieldRef<'Goal', 'GoalType'>;
    readonly targetValue: FieldRef<'Goal', 'Float'>;
    readonly targetDate: FieldRef<'Goal', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput;
  };

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput;
  };

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Goals.
     */
    skip?: number;
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * Goal create
   */
  export type GoalCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>;
  };

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Goal update
   */
  export type GoalUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>;
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput;
  };

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>;
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput;
    /**
     * Limit how many Goals to update.
     */
    limit?: number;
  };

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>;
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput;
    /**
     * Limit how many Goals to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput;
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>;
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>;
  };

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput;
  };

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput;
    /**
     * Limit how many Goals to delete.
     */
    limit?: number;
  };

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null;
  };

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  export type EventAvgAggregateOutputType = {
    value: number | null;
  };

  export type EventSumAggregateOutputType = {
    value: number | null;
  };

  export type EventMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    type: $Enums.EventType | null;
    value: number | null;
    frequency: $Enums.EventFrequency | null;
  };

  export type EventMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    type: $Enums.EventType | null;
    value: number | null;
    frequency: $Enums.EventFrequency | null;
  };

  export type EventCountAggregateOutputType = {
    id: number;
    clientId: number;
    type: number;
    value: number;
    frequency: number;
    _all: number;
  };

  export type EventAvgAggregateInputType = {
    value?: true;
  };

  export type EventSumAggregateInputType = {
    value?: true;
  };

  export type EventMinAggregateInputType = {
    id?: true;
    clientId?: true;
    type?: true;
    value?: true;
    frequency?: true;
  };

  export type EventMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    type?: true;
    value?: true;
    frequency?: true;
  };

  export type EventCountAggregateInputType = {
    id?: true;
    clientId?: true;
    type?: true;
    value?: true;
    frequency?: true;
    _all?: true;
  };

  export type EventAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Events
     **/
    _count?: true | EventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EventAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EventSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EventMaxAggregateInputType;
  };

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>;
  };

  export type EventGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventWhereInput;
    orderBy?:
      | EventOrderByWithAggregationInput
      | EventOrderByWithAggregationInput[];
    by: EventScalarFieldEnum[] | EventScalarFieldEnum;
    having?: EventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _avg?: EventAvgAggregateInputType;
    _sum?: EventSumAggregateInputType;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
  };

  export type EventGroupByOutputType = {
    id: string;
    clientId: string;
    type: $Enums.EventType;
    value: number;
    frequency: $Enums.EventFrequency;
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  type GetEventGroupByPayload<T extends EventGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EventGroupByOutputType, T['by']> & {
          [P in keyof T & keyof EventGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>;
        }
      >
    >;

  export type EventSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      type?: boolean;
      value?: boolean;
      frequency?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['event']
  >;

  export type EventSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      type?: boolean;
      value?: boolean;
      frequency?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['event']
  >;

  export type EventSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      type?: boolean;
      value?: boolean;
      frequency?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['event']
  >;

  export type EventSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    type?: boolean;
    value?: boolean;
    frequency?: boolean;
  };

  export type EventOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'clientId' | 'type' | 'value' | 'frequency',
    ExtArgs['result']['event']
  >;
  export type EventInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };
  export type EventIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };
  export type EventIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };

  export type $EventPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Event';
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        clientId: string;
        type: $Enums.EventType;
        value: number;
        frequency: $Enums.EventFrequency;
      },
      ExtArgs['result']['event']
    >;
    composites: {};
  };

  type EventGetPayload<
    S extends boolean | null | undefined | EventDefaultArgs,
  > = $Result.GetResult<Prisma.$EventPayload, S>;

  type EventCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventCountAggregateInputType | true;
  };

  export interface EventDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Event'];
      meta: { name: 'Event' };
    };
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(
      args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(
      args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(
      args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     *
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventFindManyArgs>(
      args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     *
     */
    create<T extends EventCreateArgs>(
      args: SelectSubset<T, EventCreateArgs<ExtArgs>>
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventCreateManyArgs>(
      args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(
      args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     *
     */
    delete<T extends EventDeleteArgs>(
      args: SelectSubset<T, EventDeleteArgs<ExtArgs>>
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventUpdateArgs>(
      args: SelectSubset<T, EventUpdateArgs<ExtArgs>>
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventDeleteManyArgs>(
      args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventUpdateManyArgs>(
      args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(
      args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(
      args: SelectSubset<T, EventUpsertArgs<ExtArgs>>
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
     **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(
      args: Subset<T, EventAggregateArgs>
    ): Prisma.PrismaPromise<GetEventAggregateType<T>>;

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetEventGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Event model
     */
    readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClientDefaultArgs<ExtArgs>>
    ): Prisma__ClientClient<
      | $Result.GetResult<
          Prisma.$ClientPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<'Event', 'String'>;
    readonly clientId: FieldRef<'Event', 'String'>;
    readonly type: FieldRef<'Event', 'EventType'>;
    readonly value: FieldRef<'Event', 'Float'>;
    readonly frequency: FieldRef<'Event', 'EventFrequency'>;
  }

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event findMany
   */
  export type EventFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event create
   */
  export type EventCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>;
  };

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Event update
   */
  export type EventUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput;
    /**
     * Limit how many Events to update.
     */
    limit?: number;
  };

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput;
    /**
     * Limit how many Events to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Event upsert
   */
  export type EventUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput;
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>;
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
  };

  /**
   * Event delete
   */
  export type EventDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput;
    /**
     * Limit how many Events to delete.
     */
    limit?: number;
  };

  /**
   * Event without action
   */
  export type EventDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
  };

  /**
   * Model Insurance
   */

  export type AggregateInsurance = {
    _count: InsuranceCountAggregateOutputType | null;
    _avg: InsuranceAvgAggregateOutputType | null;
    _sum: InsuranceSumAggregateOutputType | null;
    _min: InsuranceMinAggregateOutputType | null;
    _max: InsuranceMaxAggregateOutputType | null;
  };

  export type InsuranceAvgAggregateOutputType = {
    value: number | null;
  };

  export type InsuranceSumAggregateOutputType = {
    value: number | null;
  };

  export type InsuranceMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    type: $Enums.InsuranceType | null;
    value: number | null;
  };

  export type InsuranceMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    type: $Enums.InsuranceType | null;
    value: number | null;
  };

  export type InsuranceCountAggregateOutputType = {
    id: number;
    clientId: number;
    type: number;
    value: number;
    _all: number;
  };

  export type InsuranceAvgAggregateInputType = {
    value?: true;
  };

  export type InsuranceSumAggregateInputType = {
    value?: true;
  };

  export type InsuranceMinAggregateInputType = {
    id?: true;
    clientId?: true;
    type?: true;
    value?: true;
  };

  export type InsuranceMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    type?: true;
    value?: true;
  };

  export type InsuranceCountAggregateInputType = {
    id?: true;
    clientId?: true;
    type?: true;
    value?: true;
    _all?: true;
  };

  export type InsuranceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Insurance to aggregate.
     */
    where?: InsuranceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Insurances to fetch.
     */
    orderBy?:
      | InsuranceOrderByWithRelationInput
      | InsuranceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InsuranceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Insurances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Insurances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Insurances
     **/
    _count?: true | InsuranceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InsuranceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InsuranceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InsuranceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InsuranceMaxAggregateInputType;
  };

  export type GetInsuranceAggregateType<T extends InsuranceAggregateArgs> = {
    [P in keyof T & keyof AggregateInsurance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsurance[P]>
      : GetScalarType<T[P], AggregateInsurance[P]>;
  };

  export type InsuranceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InsuranceWhereInput;
    orderBy?:
      | InsuranceOrderByWithAggregationInput
      | InsuranceOrderByWithAggregationInput[];
    by: InsuranceScalarFieldEnum[] | InsuranceScalarFieldEnum;
    having?: InsuranceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InsuranceCountAggregateInputType | true;
    _avg?: InsuranceAvgAggregateInputType;
    _sum?: InsuranceSumAggregateInputType;
    _min?: InsuranceMinAggregateInputType;
    _max?: InsuranceMaxAggregateInputType;
  };

  export type InsuranceGroupByOutputType = {
    id: string;
    clientId: string;
    type: $Enums.InsuranceType;
    value: number;
    _count: InsuranceCountAggregateOutputType | null;
    _avg: InsuranceAvgAggregateOutputType | null;
    _sum: InsuranceSumAggregateOutputType | null;
    _min: InsuranceMinAggregateOutputType | null;
    _max: InsuranceMaxAggregateOutputType | null;
  };

  type GetInsuranceGroupByPayload<T extends InsuranceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InsuranceGroupByOutputType, T['by']> & {
          [P in keyof T & keyof InsuranceGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsuranceGroupByOutputType[P]>
            : GetScalarType<T[P], InsuranceGroupByOutputType[P]>;
        }
      >
    >;

  export type InsuranceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      type?: boolean;
      value?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['insurance']
  >;

  export type InsuranceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      type?: boolean;
      value?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['insurance']
  >;

  export type InsuranceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      type?: boolean;
      value?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['insurance']
  >;

  export type InsuranceSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    type?: boolean;
    value?: boolean;
  };

  export type InsuranceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'clientId' | 'type' | 'value',
    ExtArgs['result']['insurance']
  >;
  export type InsuranceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };
  export type InsuranceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };
  export type InsuranceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };

  export type $InsurancePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Insurance';
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        clientId: string;
        type: $Enums.InsuranceType;
        value: number;
      },
      ExtArgs['result']['insurance']
    >;
    composites: {};
  };

  type InsuranceGetPayload<
    S extends boolean | null | undefined | InsuranceDefaultArgs,
  > = $Result.GetResult<Prisma.$InsurancePayload, S>;

  type InsuranceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    InsuranceFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: InsuranceCountAggregateInputType | true;
  };

  export interface InsuranceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Insurance'];
      meta: { name: 'Insurance' };
    };
    /**
     * Find zero or one Insurance that matches the filter.
     * @param {InsuranceFindUniqueArgs} args - Arguments to find a Insurance
     * @example
     * // Get one Insurance
     * const insurance = await prisma.insurance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsuranceFindUniqueArgs>(
      args: SelectSubset<T, InsuranceFindUniqueArgs<ExtArgs>>
    ): Prisma__InsuranceClient<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Insurance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsuranceFindUniqueOrThrowArgs} args - Arguments to find a Insurance
     * @example
     * // Get one Insurance
     * const insurance = await prisma.insurance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsuranceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InsuranceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InsuranceClient<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Insurance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFindFirstArgs} args - Arguments to find a Insurance
     * @example
     * // Get one Insurance
     * const insurance = await prisma.insurance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsuranceFindFirstArgs>(
      args?: SelectSubset<T, InsuranceFindFirstArgs<ExtArgs>>
    ): Prisma__InsuranceClient<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Insurance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFindFirstOrThrowArgs} args - Arguments to find a Insurance
     * @example
     * // Get one Insurance
     * const insurance = await prisma.insurance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsuranceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InsuranceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InsuranceClient<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Insurances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insurances
     * const insurances = await prisma.insurance.findMany()
     *
     * // Get first 10 Insurances
     * const insurances = await prisma.insurance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const insuranceWithIdOnly = await prisma.insurance.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InsuranceFindManyArgs>(
      args?: SelectSubset<T, InsuranceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Insurance.
     * @param {InsuranceCreateArgs} args - Arguments to create a Insurance.
     * @example
     * // Create one Insurance
     * const Insurance = await prisma.insurance.create({
     *   data: {
     *     // ... data to create a Insurance
     *   }
     * })
     *
     */
    create<T extends InsuranceCreateArgs>(
      args: SelectSubset<T, InsuranceCreateArgs<ExtArgs>>
    ): Prisma__InsuranceClient<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Insurances.
     * @param {InsuranceCreateManyArgs} args - Arguments to create many Insurances.
     * @example
     * // Create many Insurances
     * const insurance = await prisma.insurance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InsuranceCreateManyArgs>(
      args?: SelectSubset<T, InsuranceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Insurances and returns the data saved in the database.
     * @param {InsuranceCreateManyAndReturnArgs} args - Arguments to create many Insurances.
     * @example
     * // Create many Insurances
     * const insurance = await prisma.insurance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Insurances and only return the `id`
     * const insuranceWithIdOnly = await prisma.insurance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InsuranceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InsuranceCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Insurance.
     * @param {InsuranceDeleteArgs} args - Arguments to delete one Insurance.
     * @example
     * // Delete one Insurance
     * const Insurance = await prisma.insurance.delete({
     *   where: {
     *     // ... filter to delete one Insurance
     *   }
     * })
     *
     */
    delete<T extends InsuranceDeleteArgs>(
      args: SelectSubset<T, InsuranceDeleteArgs<ExtArgs>>
    ): Prisma__InsuranceClient<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Insurance.
     * @param {InsuranceUpdateArgs} args - Arguments to update one Insurance.
     * @example
     * // Update one Insurance
     * const insurance = await prisma.insurance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InsuranceUpdateArgs>(
      args: SelectSubset<T, InsuranceUpdateArgs<ExtArgs>>
    ): Prisma__InsuranceClient<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Insurances.
     * @param {InsuranceDeleteManyArgs} args - Arguments to filter Insurances to delete.
     * @example
     * // Delete a few Insurances
     * const { count } = await prisma.insurance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InsuranceDeleteManyArgs>(
      args?: SelectSubset<T, InsuranceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Insurances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insurances
     * const insurance = await prisma.insurance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InsuranceUpdateManyArgs>(
      args: SelectSubset<T, InsuranceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Insurances and returns the data updated in the database.
     * @param {InsuranceUpdateManyAndReturnArgs} args - Arguments to update many Insurances.
     * @example
     * // Update many Insurances
     * const insurance = await prisma.insurance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Insurances and only return the `id`
     * const insuranceWithIdOnly = await prisma.insurance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends InsuranceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, InsuranceUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Insurance.
     * @param {InsuranceUpsertArgs} args - Arguments to update or create a Insurance.
     * @example
     * // Update or create a Insurance
     * const insurance = await prisma.insurance.upsert({
     *   create: {
     *     // ... data to create a Insurance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insurance we want to update
     *   }
     * })
     */
    upsert<T extends InsuranceUpsertArgs>(
      args: SelectSubset<T, InsuranceUpsertArgs<ExtArgs>>
    ): Prisma__InsuranceClient<
      $Result.GetResult<
        Prisma.$InsurancePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Insurances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceCountArgs} args - Arguments to filter Insurances to count.
     * @example
     * // Count the number of Insurances
     * const count = await prisma.insurance.count({
     *   where: {
     *     // ... the filter for the Insurances we want to count
     *   }
     * })
     **/
    count<T extends InsuranceCountArgs>(
      args?: Subset<T, InsuranceCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsuranceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Insurance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsuranceAggregateArgs>(
      args: Subset<T, InsuranceAggregateArgs>
    ): Prisma.PrismaPromise<GetInsuranceAggregateType<T>>;

    /**
     * Group by Insurance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceGroupByArgs} args - Group by arguments.
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
      T extends InsuranceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsuranceGroupByArgs['orderBy'] }
        : { orderBy?: InsuranceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, InsuranceGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetInsuranceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Insurance model
     */
    readonly fields: InsuranceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insurance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsuranceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClientDefaultArgs<ExtArgs>>
    ): Prisma__ClientClient<
      | $Result.GetResult<
          Prisma.$ClientPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Insurance model
   */
  interface InsuranceFieldRefs {
    readonly id: FieldRef<'Insurance', 'String'>;
    readonly clientId: FieldRef<'Insurance', 'String'>;
    readonly type: FieldRef<'Insurance', 'InsuranceType'>;
    readonly value: FieldRef<'Insurance', 'Float'>;
  }

  // Custom InputTypes
  /**
   * Insurance findUnique
   */
  export type InsuranceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
    /**
     * Filter, which Insurance to fetch.
     */
    where: InsuranceWhereUniqueInput;
  };

  /**
   * Insurance findUniqueOrThrow
   */
  export type InsuranceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
    /**
     * Filter, which Insurance to fetch.
     */
    where: InsuranceWhereUniqueInput;
  };

  /**
   * Insurance findFirst
   */
  export type InsuranceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
    /**
     * Filter, which Insurance to fetch.
     */
    where?: InsuranceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Insurances to fetch.
     */
    orderBy?:
      | InsuranceOrderByWithRelationInput
      | InsuranceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Insurances.
     */
    cursor?: InsuranceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Insurances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Insurances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Insurances.
     */
    distinct?: InsuranceScalarFieldEnum | InsuranceScalarFieldEnum[];
  };

  /**
   * Insurance findFirstOrThrow
   */
  export type InsuranceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
    /**
     * Filter, which Insurance to fetch.
     */
    where?: InsuranceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Insurances to fetch.
     */
    orderBy?:
      | InsuranceOrderByWithRelationInput
      | InsuranceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Insurances.
     */
    cursor?: InsuranceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Insurances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Insurances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Insurances.
     */
    distinct?: InsuranceScalarFieldEnum | InsuranceScalarFieldEnum[];
  };

  /**
   * Insurance findMany
   */
  export type InsuranceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
    /**
     * Filter, which Insurances to fetch.
     */
    where?: InsuranceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Insurances to fetch.
     */
    orderBy?:
      | InsuranceOrderByWithRelationInput
      | InsuranceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Insurances.
     */
    cursor?: InsuranceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Insurances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Insurances.
     */
    skip?: number;
    distinct?: InsuranceScalarFieldEnum | InsuranceScalarFieldEnum[];
  };

  /**
   * Insurance create
   */
  export type InsuranceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Insurance.
     */
    data: XOR<InsuranceCreateInput, InsuranceUncheckedCreateInput>;
  };

  /**
   * Insurance createMany
   */
  export type InsuranceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Insurances.
     */
    data: InsuranceCreateManyInput | InsuranceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Insurance createManyAndReturn
   */
  export type InsuranceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * The data used to create many Insurances.
     */
    data: InsuranceCreateManyInput | InsuranceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Insurance update
   */
  export type InsuranceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Insurance.
     */
    data: XOR<InsuranceUpdateInput, InsuranceUncheckedUpdateInput>;
    /**
     * Choose, which Insurance to update.
     */
    where: InsuranceWhereUniqueInput;
  };

  /**
   * Insurance updateMany
   */
  export type InsuranceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Insurances.
     */
    data: XOR<
      InsuranceUpdateManyMutationInput,
      InsuranceUncheckedUpdateManyInput
    >;
    /**
     * Filter which Insurances to update
     */
    where?: InsuranceWhereInput;
    /**
     * Limit how many Insurances to update.
     */
    limit?: number;
  };

  /**
   * Insurance updateManyAndReturn
   */
  export type InsuranceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * The data used to update Insurances.
     */
    data: XOR<
      InsuranceUpdateManyMutationInput,
      InsuranceUncheckedUpdateManyInput
    >;
    /**
     * Filter which Insurances to update
     */
    where?: InsuranceWhereInput;
    /**
     * Limit how many Insurances to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Insurance upsert
   */
  export type InsuranceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Insurance to update in case it exists.
     */
    where: InsuranceWhereUniqueInput;
    /**
     * In case the Insurance found by the `where` argument doesn't exist, create a new Insurance with this data.
     */
    create: XOR<InsuranceCreateInput, InsuranceUncheckedCreateInput>;
    /**
     * In case the Insurance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsuranceUpdateInput, InsuranceUncheckedUpdateInput>;
  };

  /**
   * Insurance delete
   */
  export type InsuranceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
    /**
     * Filter which Insurance to delete.
     */
    where: InsuranceWhereUniqueInput;
  };

  /**
   * Insurance deleteMany
   */
  export type InsuranceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Insurances to delete
     */
    where?: InsuranceWhereInput;
    /**
     * Limit how many Insurances to delete.
     */
    limit?: number;
  };

  /**
   * Insurance without action
   */
  export type InsuranceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null;
  };

  /**
   * Model Simulation
   */

  export type AggregateSimulation = {
    _count: SimulationCountAggregateOutputType | null;
    _min: SimulationMinAggregateOutputType | null;
    _max: SimulationMaxAggregateOutputType | null;
  };

  export type SimulationMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    createdAt: Date | null;
  };

  export type SimulationMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    createdAt: Date | null;
  };

  export type SimulationCountAggregateOutputType = {
    id: number;
    clientId: number;
    createdAt: number;
    dataJson: number;
    _all: number;
  };

  export type SimulationMinAggregateInputType = {
    id?: true;
    clientId?: true;
    createdAt?: true;
  };

  export type SimulationMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    createdAt?: true;
  };

  export type SimulationCountAggregateInputType = {
    id?: true;
    clientId?: true;
    createdAt?: true;
    dataJson?: true;
    _all?: true;
  };

  export type SimulationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Simulation to aggregate.
     */
    where?: SimulationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Simulations to fetch.
     */
    orderBy?:
      | SimulationOrderByWithRelationInput
      | SimulationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SimulationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Simulations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Simulations
     **/
    _count?: true | SimulationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SimulationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SimulationMaxAggregateInputType;
  };

  export type GetSimulationAggregateType<T extends SimulationAggregateArgs> = {
    [P in keyof T & keyof AggregateSimulation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimulation[P]>
      : GetScalarType<T[P], AggregateSimulation[P]>;
  };

  export type SimulationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SimulationWhereInput;
    orderBy?:
      | SimulationOrderByWithAggregationInput
      | SimulationOrderByWithAggregationInput[];
    by: SimulationScalarFieldEnum[] | SimulationScalarFieldEnum;
    having?: SimulationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SimulationCountAggregateInputType | true;
    _min?: SimulationMinAggregateInputType;
    _max?: SimulationMaxAggregateInputType;
  };

  export type SimulationGroupByOutputType = {
    id: string;
    clientId: string;
    createdAt: Date;
    dataJson: JsonValue;
    _count: SimulationCountAggregateOutputType | null;
    _min: SimulationMinAggregateOutputType | null;
    _max: SimulationMaxAggregateOutputType | null;
  };

  type GetSimulationGroupByPayload<T extends SimulationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SimulationGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SimulationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SimulationGroupByOutputType[P]>
            : GetScalarType<T[P], SimulationGroupByOutputType[P]>;
        }
      >
    >;

  export type SimulationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      createdAt?: boolean;
      dataJson?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['simulation']
  >;

  export type SimulationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      createdAt?: boolean;
      dataJson?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['simulation']
  >;

  export type SimulationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      createdAt?: boolean;
      dataJson?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['simulation']
  >;

  export type SimulationSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    createdAt?: boolean;
    dataJson?: boolean;
  };

  export type SimulationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'clientId' | 'createdAt' | 'dataJson',
    ExtArgs['result']['simulation']
  >;
  export type SimulationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };
  export type SimulationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };
  export type SimulationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };

  export type $SimulationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Simulation';
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        clientId: string;
        createdAt: Date;
        dataJson: Prisma.JsonValue;
      },
      ExtArgs['result']['simulation']
    >;
    composites: {};
  };

  type SimulationGetPayload<
    S extends boolean | null | undefined | SimulationDefaultArgs,
  > = $Result.GetResult<Prisma.$SimulationPayload, S>;

  type SimulationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SimulationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: SimulationCountAggregateInputType | true;
  };

  export interface SimulationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Simulation'];
      meta: { name: 'Simulation' };
    };
    /**
     * Find zero or one Simulation that matches the filter.
     * @param {SimulationFindUniqueArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimulationFindUniqueArgs>(
      args: SelectSubset<T, SimulationFindUniqueArgs<ExtArgs>>
    ): Prisma__SimulationClient<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Simulation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimulationFindUniqueOrThrowArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimulationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SimulationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SimulationClient<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Simulation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindFirstArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimulationFindFirstArgs>(
      args?: SelectSubset<T, SimulationFindFirstArgs<ExtArgs>>
    ): Prisma__SimulationClient<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Simulation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindFirstOrThrowArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimulationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SimulationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SimulationClient<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Simulations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Simulations
     * const simulations = await prisma.simulation.findMany()
     *
     * // Get first 10 Simulations
     * const simulations = await prisma.simulation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const simulationWithIdOnly = await prisma.simulation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SimulationFindManyArgs>(
      args?: SelectSubset<T, SimulationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Simulation.
     * @param {SimulationCreateArgs} args - Arguments to create a Simulation.
     * @example
     * // Create one Simulation
     * const Simulation = await prisma.simulation.create({
     *   data: {
     *     // ... data to create a Simulation
     *   }
     * })
     *
     */
    create<T extends SimulationCreateArgs>(
      args: SelectSubset<T, SimulationCreateArgs<ExtArgs>>
    ): Prisma__SimulationClient<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Simulations.
     * @param {SimulationCreateManyArgs} args - Arguments to create many Simulations.
     * @example
     * // Create many Simulations
     * const simulation = await prisma.simulation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SimulationCreateManyArgs>(
      args?: SelectSubset<T, SimulationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Simulations and returns the data saved in the database.
     * @param {SimulationCreateManyAndReturnArgs} args - Arguments to create many Simulations.
     * @example
     * // Create many Simulations
     * const simulation = await prisma.simulation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Simulations and only return the `id`
     * const simulationWithIdOnly = await prisma.simulation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SimulationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SimulationCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Simulation.
     * @param {SimulationDeleteArgs} args - Arguments to delete one Simulation.
     * @example
     * // Delete one Simulation
     * const Simulation = await prisma.simulation.delete({
     *   where: {
     *     // ... filter to delete one Simulation
     *   }
     * })
     *
     */
    delete<T extends SimulationDeleteArgs>(
      args: SelectSubset<T, SimulationDeleteArgs<ExtArgs>>
    ): Prisma__SimulationClient<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Simulation.
     * @param {SimulationUpdateArgs} args - Arguments to update one Simulation.
     * @example
     * // Update one Simulation
     * const simulation = await prisma.simulation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SimulationUpdateArgs>(
      args: SelectSubset<T, SimulationUpdateArgs<ExtArgs>>
    ): Prisma__SimulationClient<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Simulations.
     * @param {SimulationDeleteManyArgs} args - Arguments to filter Simulations to delete.
     * @example
     * // Delete a few Simulations
     * const { count } = await prisma.simulation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SimulationDeleteManyArgs>(
      args?: SelectSubset<T, SimulationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Simulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Simulations
     * const simulation = await prisma.simulation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SimulationUpdateManyArgs>(
      args: SelectSubset<T, SimulationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Simulations and returns the data updated in the database.
     * @param {SimulationUpdateManyAndReturnArgs} args - Arguments to update many Simulations.
     * @example
     * // Update many Simulations
     * const simulation = await prisma.simulation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Simulations and only return the `id`
     * const simulationWithIdOnly = await prisma.simulation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SimulationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SimulationUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Simulation.
     * @param {SimulationUpsertArgs} args - Arguments to update or create a Simulation.
     * @example
     * // Update or create a Simulation
     * const simulation = await prisma.simulation.upsert({
     *   create: {
     *     // ... data to create a Simulation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Simulation we want to update
     *   }
     * })
     */
    upsert<T extends SimulationUpsertArgs>(
      args: SelectSubset<T, SimulationUpsertArgs<ExtArgs>>
    ): Prisma__SimulationClient<
      $Result.GetResult<
        Prisma.$SimulationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Simulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationCountArgs} args - Arguments to filter Simulations to count.
     * @example
     * // Count the number of Simulations
     * const count = await prisma.simulation.count({
     *   where: {
     *     // ... the filter for the Simulations we want to count
     *   }
     * })
     **/
    count<T extends SimulationCountArgs>(
      args?: Subset<T, SimulationCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SimulationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Simulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SimulationAggregateArgs>(
      args: Subset<T, SimulationAggregateArgs>
    ): Prisma.PrismaPromise<GetSimulationAggregateType<T>>;

    /**
     * Group by Simulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationGroupByArgs} args - Group by arguments.
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
      T extends SimulationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SimulationGroupByArgs['orderBy'] }
        : { orderBy?: SimulationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SimulationGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetSimulationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Simulation model
     */
    readonly fields: SimulationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Simulation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SimulationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClientDefaultArgs<ExtArgs>>
    ): Prisma__ClientClient<
      | $Result.GetResult<
          Prisma.$ClientPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Simulation model
   */
  interface SimulationFieldRefs {
    readonly id: FieldRef<'Simulation', 'String'>;
    readonly clientId: FieldRef<'Simulation', 'String'>;
    readonly createdAt: FieldRef<'Simulation', 'DateTime'>;
    readonly dataJson: FieldRef<'Simulation', 'Json'>;
  }

  // Custom InputTypes
  /**
   * Simulation findUnique
   */
  export type SimulationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
    /**
     * Filter, which Simulation to fetch.
     */
    where: SimulationWhereUniqueInput;
  };

  /**
   * Simulation findUniqueOrThrow
   */
  export type SimulationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
    /**
     * Filter, which Simulation to fetch.
     */
    where: SimulationWhereUniqueInput;
  };

  /**
   * Simulation findFirst
   */
  export type SimulationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
    /**
     * Filter, which Simulation to fetch.
     */
    where?: SimulationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Simulations to fetch.
     */
    orderBy?:
      | SimulationOrderByWithRelationInput
      | SimulationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Simulations.
     */
    cursor?: SimulationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Simulations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Simulations.
     */
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[];
  };

  /**
   * Simulation findFirstOrThrow
   */
  export type SimulationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
    /**
     * Filter, which Simulation to fetch.
     */
    where?: SimulationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Simulations to fetch.
     */
    orderBy?:
      | SimulationOrderByWithRelationInput
      | SimulationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Simulations.
     */
    cursor?: SimulationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Simulations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Simulations.
     */
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[];
  };

  /**
   * Simulation findMany
   */
  export type SimulationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
    /**
     * Filter, which Simulations to fetch.
     */
    where?: SimulationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Simulations to fetch.
     */
    orderBy?:
      | SimulationOrderByWithRelationInput
      | SimulationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Simulations.
     */
    cursor?: SimulationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Simulations.
     */
    skip?: number;
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[];
  };

  /**
   * Simulation create
   */
  export type SimulationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Simulation.
     */
    data: XOR<SimulationCreateInput, SimulationUncheckedCreateInput>;
  };

  /**
   * Simulation createMany
   */
  export type SimulationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Simulations.
     */
    data: SimulationCreateManyInput | SimulationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Simulation createManyAndReturn
   */
  export type SimulationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * The data used to create many Simulations.
     */
    data: SimulationCreateManyInput | SimulationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Simulation update
   */
  export type SimulationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Simulation.
     */
    data: XOR<SimulationUpdateInput, SimulationUncheckedUpdateInput>;
    /**
     * Choose, which Simulation to update.
     */
    where: SimulationWhereUniqueInput;
  };

  /**
   * Simulation updateMany
   */
  export type SimulationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Simulations.
     */
    data: XOR<
      SimulationUpdateManyMutationInput,
      SimulationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Simulations to update
     */
    where?: SimulationWhereInput;
    /**
     * Limit how many Simulations to update.
     */
    limit?: number;
  };

  /**
   * Simulation updateManyAndReturn
   */
  export type SimulationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * The data used to update Simulations.
     */
    data: XOR<
      SimulationUpdateManyMutationInput,
      SimulationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Simulations to update
     */
    where?: SimulationWhereInput;
    /**
     * Limit how many Simulations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Simulation upsert
   */
  export type SimulationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Simulation to update in case it exists.
     */
    where: SimulationWhereUniqueInput;
    /**
     * In case the Simulation found by the `where` argument doesn't exist, create a new Simulation with this data.
     */
    create: XOR<SimulationCreateInput, SimulationUncheckedCreateInput>;
    /**
     * In case the Simulation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SimulationUpdateInput, SimulationUncheckedUpdateInput>;
  };

  /**
   * Simulation delete
   */
  export type SimulationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
    /**
     * Filter which Simulation to delete.
     */
    where: SimulationWhereUniqueInput;
  };

  /**
   * Simulation deleteMany
   */
  export type SimulationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Simulations to delete
     */
    where?: SimulationWhereInput;
    /**
     * Limit how many Simulations to delete.
     */
    limit?: number;
  };

  /**
   * Simulation without action
   */
  export type SimulationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null;
  };

  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null;
    _avg: WalletAvgAggregateOutputType | null;
    _sum: WalletSumAggregateOutputType | null;
    _min: WalletMinAggregateOutputType | null;
    _max: WalletMaxAggregateOutputType | null;
  };

  export type WalletAvgAggregateOutputType = {
    totalValue: number | null;
  };

  export type WalletSumAggregateOutputType = {
    totalValue: number | null;
  };

  export type WalletMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    totalValue: number | null;
  };

  export type WalletMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    totalValue: number | null;
  };

  export type WalletCountAggregateOutputType = {
    id: number;
    clientId: number;
    totalValue: number;
    allocationJson: number;
    _all: number;
  };

  export type WalletAvgAggregateInputType = {
    totalValue?: true;
  };

  export type WalletSumAggregateInputType = {
    totalValue?: true;
  };

  export type WalletMinAggregateInputType = {
    id?: true;
    clientId?: true;
    totalValue?: true;
  };

  export type WalletMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    totalValue?: true;
  };

  export type WalletCountAggregateInputType = {
    id?: true;
    clientId?: true;
    totalValue?: true;
    allocationJson?: true;
    _all?: true;
  };

  export type WalletAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Wallets
     **/
    _count?: true | WalletCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: WalletAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: WalletSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: WalletMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: WalletMaxAggregateInputType;
  };

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
    [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>;
  };

  export type WalletGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WalletWhereInput;
    orderBy?:
      | WalletOrderByWithAggregationInput
      | WalletOrderByWithAggregationInput[];
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum;
    having?: WalletScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WalletCountAggregateInputType | true;
    _avg?: WalletAvgAggregateInputType;
    _sum?: WalletSumAggregateInputType;
    _min?: WalletMinAggregateInputType;
    _max?: WalletMaxAggregateInputType;
  };

  export type WalletGroupByOutputType = {
    id: string;
    clientId: string;
    totalValue: number;
    allocationJson: JsonValue;
    _count: WalletCountAggregateOutputType | null;
    _avg: WalletAvgAggregateOutputType | null;
    _sum: WalletSumAggregateOutputType | null;
    _min: WalletMinAggregateOutputType | null;
    _max: WalletMaxAggregateOutputType | null;
  };

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<WalletGroupByOutputType, T['by']> & {
          [P in keyof T & keyof WalletGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>;
        }
      >
    >;

  export type WalletSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      totalValue?: boolean;
      allocationJson?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['wallet']
  >;

  export type WalletSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      totalValue?: boolean;
      allocationJson?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['wallet']
  >;

  export type WalletSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clientId?: boolean;
      totalValue?: boolean;
      allocationJson?: boolean;
      client?: boolean | ClientDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['wallet']
  >;

  export type WalletSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    totalValue?: boolean;
    allocationJson?: boolean;
  };

  export type WalletOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'clientId' | 'totalValue' | 'allocationJson',
    ExtArgs['result']['wallet']
  >;
  export type WalletInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };
  export type WalletIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };
  export type WalletIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientDefaultArgs<ExtArgs>;
  };

  export type $WalletPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Wallet';
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        clientId: string;
        totalValue: number;
        allocationJson: Prisma.JsonValue;
      },
      ExtArgs['result']['wallet']
    >;
    composites: {};
  };

  type WalletGetPayload<
    S extends boolean | null | undefined | WalletDefaultArgs,
  > = $Result.GetResult<Prisma.$WalletPayload, S>;

  type WalletCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WalletCountAggregateInputType | true;
  };

  export interface WalletDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Wallet'];
      meta: { name: 'Wallet' };
    };
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(
      args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(
      args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(
      args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     *
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WalletFindManyArgs>(
      args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     *
     */
    create<T extends WalletCreateArgs>(
      args: SelectSubset<T, WalletCreateArgs<ExtArgs>>
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WalletCreateManyArgs>(
      args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(
      args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     *
     */
    delete<T extends WalletDeleteArgs>(
      args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WalletUpdateArgs>(
      args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WalletDeleteManyArgs>(
      args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WalletUpdateManyArgs>(
      args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(
      args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(
      args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>
    ): Prisma__WalletClient<
      $Result.GetResult<
        Prisma.$WalletPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
     **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(
      args: Subset<T, WalletAggregateArgs>
    ): Prisma.PrismaPromise<GetWalletAggregateType<T>>;

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetWalletGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Wallet model
     */
    readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClientDefaultArgs<ExtArgs>>
    ): Prisma__ClientClient<
      | $Result.GetResult<
          Prisma.$ClientPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<'Wallet', 'String'>;
    readonly clientId: FieldRef<'Wallet', 'String'>;
    readonly totalValue: FieldRef<'Wallet', 'Float'>;
    readonly allocationJson: FieldRef<'Wallet', 'Json'>;
  }

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[];
  };

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[];
  };

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[];
  };

  /**
   * Wallet create
   */
  export type WalletCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>;
  };

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>;
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>;
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput;
    /**
     * Limit how many Wallets to update.
     */
    limit?: number;
  };

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>;
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput;
    /**
     * Limit how many Wallets to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput;
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>;
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>;
  };

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput;
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number;
  };

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    password: 'password';
    role: 'role';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ClientScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    age: 'age';
    status: 'status';
    familyProfile: 'familyProfile';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    advisorId: 'advisorId';
  };

  export type ClientScalarFieldEnum =
    (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];

  export const GoalScalarFieldEnum: {
    id: 'id';
    clientId: 'clientId';
    type: 'type';
    targetValue: 'targetValue';
    targetDate: 'targetDate';
  };

  export type GoalScalarFieldEnum =
    (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum];

  export const EventScalarFieldEnum: {
    id: 'id';
    clientId: 'clientId';
    type: 'type';
    value: 'value';
    frequency: 'frequency';
  };

  export type EventScalarFieldEnum =
    (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];

  export const InsuranceScalarFieldEnum: {
    id: 'id';
    clientId: 'clientId';
    type: 'type';
    value: 'value';
  };

  export type InsuranceScalarFieldEnum =
    (typeof InsuranceScalarFieldEnum)[keyof typeof InsuranceScalarFieldEnum];

  export const SimulationScalarFieldEnum: {
    id: 'id';
    clientId: 'clientId';
    createdAt: 'createdAt';
    dataJson: 'dataJson';
  };

  export type SimulationScalarFieldEnum =
    (typeof SimulationScalarFieldEnum)[keyof typeof SimulationScalarFieldEnum];

  export const WalletScalarFieldEnum: {
    id: 'id';
    clientId: 'clientId';
    totalValue: 'totalValue';
    allocationJson: 'allocationJson';
  };

  export type WalletScalarFieldEnum =
    (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserRole'
  >;

  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserRole[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'FamilyProfile'
   */
  export type EnumFamilyProfileFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'FamilyProfile'
  >;

  /**
   * Reference to a field of type 'FamilyProfile[]'
   */
  export type ListEnumFamilyProfileFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'FamilyProfile[]'>;

  /**
   * Reference to a field of type 'GoalType'
   */
  export type EnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'GoalType'
  >;

  /**
   * Reference to a field of type 'GoalType[]'
   */
  export type ListEnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'GoalType[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'EventType'
  >;

  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'EventType[]'
  >;

  /**
   * Reference to a field of type 'EventFrequency'
   */
  export type EnumEventFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'EventFrequency'
  >;

  /**
   * Reference to a field of type 'EventFrequency[]'
   */
  export type ListEnumEventFrequencyFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'EventFrequency[]'>;

  /**
   * Reference to a field of type 'InsuranceType'
   */
  export type EnumInsuranceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'InsuranceType'
  >;

  /**
   * Reference to a field of type 'InsuranceType[]'
   */
  export type ListEnumInsuranceTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'InsuranceType[]'>;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'QueryMode'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    name?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    role?: EnumUserRoleFilter<'User'> | $Enums.UserRole;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    clients?: ClientListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    clients?: ClientOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<'User'> | string;
      password?: StringFilter<'User'> | string;
      role?: EnumUserRoleFilter<'User'> | $Enums.UserRole;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      clients?: ClientListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    name?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    role?: EnumUserRoleWithAggregatesFilter<'User'> | $Enums.UserRole;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[];
    OR?: ClientWhereInput[];
    NOT?: ClientWhereInput | ClientWhereInput[];
    id?: StringFilter<'Client'> | string;
    name?: StringFilter<'Client'> | string;
    email?: StringFilter<'Client'> | string;
    age?: IntFilter<'Client'> | number;
    status?: BoolFilter<'Client'> | boolean;
    familyProfile?: EnumFamilyProfileFilter<'Client'> | $Enums.FamilyProfile;
    createdAt?: DateTimeFilter<'Client'> | Date | string;
    updatedAt?: DateTimeFilter<'Client'> | Date | string;
    advisorId?: StringNullableFilter<'Client'> | string | null;
    goals?: GoalListRelationFilter;
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null;
    events?: EventListRelationFilter;
    simulations?: SimulationListRelationFilter;
    insurances?: InsuranceListRelationFilter;
    advisor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
  };

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    age?: SortOrder;
    status?: SortOrder;
    familyProfile?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    advisorId?: SortOrderInput | SortOrder;
    goals?: GoalOrderByRelationAggregateInput;
    wallet?: WalletOrderByWithRelationInput;
    events?: EventOrderByRelationAggregateInput;
    simulations?: SimulationOrderByRelationAggregateInput;
    insurances?: InsuranceOrderByRelationAggregateInput;
    advisor?: UserOrderByWithRelationInput;
  };

  export type ClientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: ClientWhereInput | ClientWhereInput[];
      OR?: ClientWhereInput[];
      NOT?: ClientWhereInput | ClientWhereInput[];
      name?: StringFilter<'Client'> | string;
      age?: IntFilter<'Client'> | number;
      status?: BoolFilter<'Client'> | boolean;
      familyProfile?: EnumFamilyProfileFilter<'Client'> | $Enums.FamilyProfile;
      createdAt?: DateTimeFilter<'Client'> | Date | string;
      updatedAt?: DateTimeFilter<'Client'> | Date | string;
      advisorId?: StringNullableFilter<'Client'> | string | null;
      goals?: GoalListRelationFilter;
      wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null;
      events?: EventListRelationFilter;
      simulations?: SimulationListRelationFilter;
      insurances?: InsuranceListRelationFilter;
      advisor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    age?: SortOrder;
    status?: SortOrder;
    familyProfile?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    advisorId?: SortOrderInput | SortOrder;
    _count?: ClientCountOrderByAggregateInput;
    _avg?: ClientAvgOrderByAggregateInput;
    _max?: ClientMaxOrderByAggregateInput;
    _min?: ClientMinOrderByAggregateInput;
    _sum?: ClientSumOrderByAggregateInput;
  };

  export type ClientScalarWhereWithAggregatesInput = {
    AND?:
      | ClientScalarWhereWithAggregatesInput
      | ClientScalarWhereWithAggregatesInput[];
    OR?: ClientScalarWhereWithAggregatesInput[];
    NOT?:
      | ClientScalarWhereWithAggregatesInput
      | ClientScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Client'> | string;
    name?: StringWithAggregatesFilter<'Client'> | string;
    email?: StringWithAggregatesFilter<'Client'> | string;
    age?: IntWithAggregatesFilter<'Client'> | number;
    status?: BoolWithAggregatesFilter<'Client'> | boolean;
    familyProfile?:
      | EnumFamilyProfileWithAggregatesFilter<'Client'>
      | $Enums.FamilyProfile;
    createdAt?: DateTimeWithAggregatesFilter<'Client'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Client'> | Date | string;
    advisorId?: StringNullableWithAggregatesFilter<'Client'> | string | null;
  };

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[];
    OR?: GoalWhereInput[];
    NOT?: GoalWhereInput | GoalWhereInput[];
    id?: StringFilter<'Goal'> | string;
    clientId?: StringFilter<'Goal'> | string;
    type?: EnumGoalTypeFilter<'Goal'> | $Enums.GoalType;
    targetValue?: FloatFilter<'Goal'> | number;
    targetDate?: DateTimeFilter<'Goal'> | Date | string;
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
  };

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    targetValue?: SortOrder;
    targetDate?: SortOrder;
    client?: ClientOrderByWithRelationInput;
  };

  export type GoalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: GoalWhereInput | GoalWhereInput[];
      OR?: GoalWhereInput[];
      NOT?: GoalWhereInput | GoalWhereInput[];
      clientId?: StringFilter<'Goal'> | string;
      type?: EnumGoalTypeFilter<'Goal'> | $Enums.GoalType;
      targetValue?: FloatFilter<'Goal'> | number;
      targetDate?: DateTimeFilter<'Goal'> | Date | string;
      client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
    },
    'id'
  >;

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    targetValue?: SortOrder;
    targetDate?: SortOrder;
    _count?: GoalCountOrderByAggregateInput;
    _avg?: GoalAvgOrderByAggregateInput;
    _max?: GoalMaxOrderByAggregateInput;
    _min?: GoalMinOrderByAggregateInput;
    _sum?: GoalSumOrderByAggregateInput;
  };

  export type GoalScalarWhereWithAggregatesInput = {
    AND?:
      | GoalScalarWhereWithAggregatesInput
      | GoalScalarWhereWithAggregatesInput[];
    OR?: GoalScalarWhereWithAggregatesInput[];
    NOT?:
      | GoalScalarWhereWithAggregatesInput
      | GoalScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Goal'> | string;
    clientId?: StringWithAggregatesFilter<'Goal'> | string;
    type?: EnumGoalTypeWithAggregatesFilter<'Goal'> | $Enums.GoalType;
    targetValue?: FloatWithAggregatesFilter<'Goal'> | number;
    targetDate?: DateTimeWithAggregatesFilter<'Goal'> | Date | string;
  };

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[];
    OR?: EventWhereInput[];
    NOT?: EventWhereInput | EventWhereInput[];
    id?: StringFilter<'Event'> | string;
    clientId?: StringFilter<'Event'> | string;
    type?: EnumEventTypeFilter<'Event'> | $Enums.EventType;
    value?: FloatFilter<'Event'> | number;
    frequency?: EnumEventFrequencyFilter<'Event'> | $Enums.EventFrequency;
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
  };

  export type EventOrderByWithRelationInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    value?: SortOrder;
    frequency?: SortOrder;
    client?: ClientOrderByWithRelationInput;
  };

  export type EventWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EventWhereInput | EventWhereInput[];
      OR?: EventWhereInput[];
      NOT?: EventWhereInput | EventWhereInput[];
      clientId?: StringFilter<'Event'> | string;
      type?: EnumEventTypeFilter<'Event'> | $Enums.EventType;
      value?: FloatFilter<'Event'> | number;
      frequency?: EnumEventFrequencyFilter<'Event'> | $Enums.EventFrequency;
      client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
    },
    'id'
  >;

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    value?: SortOrder;
    frequency?: SortOrder;
    _count?: EventCountOrderByAggregateInput;
    _avg?: EventAvgOrderByAggregateInput;
    _max?: EventMaxOrderByAggregateInput;
    _min?: EventMinOrderByAggregateInput;
    _sum?: EventSumOrderByAggregateInput;
  };

  export type EventScalarWhereWithAggregatesInput = {
    AND?:
      | EventScalarWhereWithAggregatesInput
      | EventScalarWhereWithAggregatesInput[];
    OR?: EventScalarWhereWithAggregatesInput[];
    NOT?:
      | EventScalarWhereWithAggregatesInput
      | EventScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Event'> | string;
    clientId?: StringWithAggregatesFilter<'Event'> | string;
    type?: EnumEventTypeWithAggregatesFilter<'Event'> | $Enums.EventType;
    value?: FloatWithAggregatesFilter<'Event'> | number;
    frequency?:
      | EnumEventFrequencyWithAggregatesFilter<'Event'>
      | $Enums.EventFrequency;
  };

  export type InsuranceWhereInput = {
    AND?: InsuranceWhereInput | InsuranceWhereInput[];
    OR?: InsuranceWhereInput[];
    NOT?: InsuranceWhereInput | InsuranceWhereInput[];
    id?: StringFilter<'Insurance'> | string;
    clientId?: StringFilter<'Insurance'> | string;
    type?: EnumInsuranceTypeFilter<'Insurance'> | $Enums.InsuranceType;
    value?: FloatFilter<'Insurance'> | number;
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
  };

  export type InsuranceOrderByWithRelationInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    value?: SortOrder;
    client?: ClientOrderByWithRelationInput;
  };

  export type InsuranceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: InsuranceWhereInput | InsuranceWhereInput[];
      OR?: InsuranceWhereInput[];
      NOT?: InsuranceWhereInput | InsuranceWhereInput[];
      clientId?: StringFilter<'Insurance'> | string;
      type?: EnumInsuranceTypeFilter<'Insurance'> | $Enums.InsuranceType;
      value?: FloatFilter<'Insurance'> | number;
      client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
    },
    'id'
  >;

  export type InsuranceOrderByWithAggregationInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    value?: SortOrder;
    _count?: InsuranceCountOrderByAggregateInput;
    _avg?: InsuranceAvgOrderByAggregateInput;
    _max?: InsuranceMaxOrderByAggregateInput;
    _min?: InsuranceMinOrderByAggregateInput;
    _sum?: InsuranceSumOrderByAggregateInput;
  };

  export type InsuranceScalarWhereWithAggregatesInput = {
    AND?:
      | InsuranceScalarWhereWithAggregatesInput
      | InsuranceScalarWhereWithAggregatesInput[];
    OR?: InsuranceScalarWhereWithAggregatesInput[];
    NOT?:
      | InsuranceScalarWhereWithAggregatesInput
      | InsuranceScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Insurance'> | string;
    clientId?: StringWithAggregatesFilter<'Insurance'> | string;
    type?:
      | EnumInsuranceTypeWithAggregatesFilter<'Insurance'>
      | $Enums.InsuranceType;
    value?: FloatWithAggregatesFilter<'Insurance'> | number;
  };

  export type SimulationWhereInput = {
    AND?: SimulationWhereInput | SimulationWhereInput[];
    OR?: SimulationWhereInput[];
    NOT?: SimulationWhereInput | SimulationWhereInput[];
    id?: StringFilter<'Simulation'> | string;
    clientId?: StringFilter<'Simulation'> | string;
    createdAt?: DateTimeFilter<'Simulation'> | Date | string;
    dataJson?: JsonFilter<'Simulation'>;
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
  };

  export type SimulationOrderByWithRelationInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    createdAt?: SortOrder;
    dataJson?: SortOrder;
    client?: ClientOrderByWithRelationInput;
  };

  export type SimulationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: SimulationWhereInput | SimulationWhereInput[];
      OR?: SimulationWhereInput[];
      NOT?: SimulationWhereInput | SimulationWhereInput[];
      clientId?: StringFilter<'Simulation'> | string;
      createdAt?: DateTimeFilter<'Simulation'> | Date | string;
      dataJson?: JsonFilter<'Simulation'>;
      client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
    },
    'id'
  >;

  export type SimulationOrderByWithAggregationInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    createdAt?: SortOrder;
    dataJson?: SortOrder;
    _count?: SimulationCountOrderByAggregateInput;
    _max?: SimulationMaxOrderByAggregateInput;
    _min?: SimulationMinOrderByAggregateInput;
  };

  export type SimulationScalarWhereWithAggregatesInput = {
    AND?:
      | SimulationScalarWhereWithAggregatesInput
      | SimulationScalarWhereWithAggregatesInput[];
    OR?: SimulationScalarWhereWithAggregatesInput[];
    NOT?:
      | SimulationScalarWhereWithAggregatesInput
      | SimulationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Simulation'> | string;
    clientId?: StringWithAggregatesFilter<'Simulation'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Simulation'> | Date | string;
    dataJson?: JsonWithAggregatesFilter<'Simulation'>;
  };

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[];
    OR?: WalletWhereInput[];
    NOT?: WalletWhereInput | WalletWhereInput[];
    id?: StringFilter<'Wallet'> | string;
    clientId?: StringFilter<'Wallet'> | string;
    totalValue?: FloatFilter<'Wallet'> | number;
    allocationJson?: JsonFilter<'Wallet'>;
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
  };

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    totalValue?: SortOrder;
    allocationJson?: SortOrder;
    client?: ClientOrderByWithRelationInput;
  };

  export type WalletWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      clientId?: string;
      AND?: WalletWhereInput | WalletWhereInput[];
      OR?: WalletWhereInput[];
      NOT?: WalletWhereInput | WalletWhereInput[];
      totalValue?: FloatFilter<'Wallet'> | number;
      allocationJson?: JsonFilter<'Wallet'>;
      client?: XOR<ClientScalarRelationFilter, ClientWhereInput>;
    },
    'id' | 'clientId'
  >;

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    totalValue?: SortOrder;
    allocationJson?: SortOrder;
    _count?: WalletCountOrderByAggregateInput;
    _avg?: WalletAvgOrderByAggregateInput;
    _max?: WalletMaxOrderByAggregateInput;
    _min?: WalletMinOrderByAggregateInput;
    _sum?: WalletSumOrderByAggregateInput;
  };

  export type WalletScalarWhereWithAggregatesInput = {
    AND?:
      | WalletScalarWhereWithAggregatesInput
      | WalletScalarWhereWithAggregatesInput[];
    OR?: WalletScalarWhereWithAggregatesInput[];
    NOT?:
      | WalletScalarWhereWithAggregatesInput
      | WalletScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Wallet'> | string;
    clientId?: StringWithAggregatesFilter<'Wallet'> | string;
    totalValue?: FloatWithAggregatesFilter<'Wallet'> | number;
    allocationJson?: JsonWithAggregatesFilter<'Wallet'>;
  };

  export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: ClientCreateNestedManyWithoutAdvisorInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: ClientUncheckedCreateNestedManyWithoutAdvisorInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: ClientUpdateManyWithoutAdvisorNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: ClientUncheckedUpdateManyWithoutAdvisorNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ClientCreateInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goals?: GoalCreateNestedManyWithoutClientInput;
    wallet?: WalletCreateNestedOneWithoutClientInput;
    events?: EventCreateNestedManyWithoutClientInput;
    simulations?: SimulationCreateNestedManyWithoutClientInput;
    insurances?: InsuranceCreateNestedManyWithoutClientInput;
    advisor?: UserCreateNestedOneWithoutClientsInput;
  };

  export type ClientUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    advisorId?: string | null;
    goals?: GoalUncheckedCreateNestedManyWithoutClientInput;
    wallet?: WalletUncheckedCreateNestedOneWithoutClientInput;
    events?: EventUncheckedCreateNestedManyWithoutClientInput;
    simulations?: SimulationUncheckedCreateNestedManyWithoutClientInput;
    insurances?: InsuranceUncheckedCreateNestedManyWithoutClientInput;
  };

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    goals?: GoalUpdateManyWithoutClientNestedInput;
    wallet?: WalletUpdateOneWithoutClientNestedInput;
    events?: EventUpdateManyWithoutClientNestedInput;
    simulations?: SimulationUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUpdateManyWithoutClientNestedInput;
    advisor?: UserUpdateOneWithoutClientsNestedInput;
  };

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisorId?: NullableStringFieldUpdateOperationsInput | string | null;
    goals?: GoalUncheckedUpdateManyWithoutClientNestedInput;
    wallet?: WalletUncheckedUpdateOneWithoutClientNestedInput;
    events?: EventUncheckedUpdateManyWithoutClientNestedInput;
    simulations?: SimulationUncheckedUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type ClientCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    advisorId?: string | null;
  };

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisorId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type GoalCreateInput = {
    id?: string;
    type: $Enums.GoalType;
    targetValue: number;
    targetDate: Date | string;
    client: ClientCreateNestedOneWithoutGoalsInput;
  };

  export type GoalUncheckedCreateInput = {
    id?: string;
    clientId: string;
    type: $Enums.GoalType;
    targetValue: number;
    targetDate: Date | string;
  };

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType;
    targetValue?: FloatFieldUpdateOperationsInput | number;
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: ClientUpdateOneRequiredWithoutGoalsNestedInput;
  };

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clientId?: StringFieldUpdateOperationsInput | string;
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType;
    targetValue?: FloatFieldUpdateOperationsInput | number;
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GoalCreateManyInput = {
    id?: string;
    clientId: string;
    type: $Enums.GoalType;
    targetValue: number;
    targetDate: Date | string;
  };

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType;
    targetValue?: FloatFieldUpdateOperationsInput | number;
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clientId?: StringFieldUpdateOperationsInput | string;
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType;
    targetValue?: FloatFieldUpdateOperationsInput | number;
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventCreateInput = {
    id?: string;
    type: $Enums.EventType;
    value: number;
    frequency: $Enums.EventFrequency;
    client: ClientCreateNestedOneWithoutEventsInput;
  };

  export type EventUncheckedCreateInput = {
    id?: string;
    clientId: string;
    type: $Enums.EventType;
    value: number;
    frequency: $Enums.EventFrequency;
  };

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    value?: FloatFieldUpdateOperationsInput | number;
    frequency?:
      | EnumEventFrequencyFieldUpdateOperationsInput
      | $Enums.EventFrequency;
    client?: ClientUpdateOneRequiredWithoutEventsNestedInput;
  };

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clientId?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    value?: FloatFieldUpdateOperationsInput | number;
    frequency?:
      | EnumEventFrequencyFieldUpdateOperationsInput
      | $Enums.EventFrequency;
  };

  export type EventCreateManyInput = {
    id?: string;
    clientId: string;
    type: $Enums.EventType;
    value: number;
    frequency: $Enums.EventFrequency;
  };

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    value?: FloatFieldUpdateOperationsInput | number;
    frequency?:
      | EnumEventFrequencyFieldUpdateOperationsInput
      | $Enums.EventFrequency;
  };

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clientId?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    value?: FloatFieldUpdateOperationsInput | number;
    frequency?:
      | EnumEventFrequencyFieldUpdateOperationsInput
      | $Enums.EventFrequency;
  };

  export type InsuranceCreateInput = {
    id?: string;
    type: $Enums.InsuranceType;
    value: number;
    client: ClientCreateNestedOneWithoutInsurancesInput;
  };

  export type InsuranceUncheckedCreateInput = {
    id?: string;
    clientId: string;
    type: $Enums.InsuranceType;
    value: number;
  };

  export type InsuranceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumInsuranceTypeFieldUpdateOperationsInput | $Enums.InsuranceType;
    value?: FloatFieldUpdateOperationsInput | number;
    client?: ClientUpdateOneRequiredWithoutInsurancesNestedInput;
  };

  export type InsuranceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clientId?: StringFieldUpdateOperationsInput | string;
    type?: EnumInsuranceTypeFieldUpdateOperationsInput | $Enums.InsuranceType;
    value?: FloatFieldUpdateOperationsInput | number;
  };

  export type InsuranceCreateManyInput = {
    id?: string;
    clientId: string;
    type: $Enums.InsuranceType;
    value: number;
  };

  export type InsuranceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumInsuranceTypeFieldUpdateOperationsInput | $Enums.InsuranceType;
    value?: FloatFieldUpdateOperationsInput | number;
  };

  export type InsuranceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clientId?: StringFieldUpdateOperationsInput | string;
    type?: EnumInsuranceTypeFieldUpdateOperationsInput | $Enums.InsuranceType;
    value?: FloatFieldUpdateOperationsInput | number;
  };

  export type SimulationCreateInput = {
    id?: string;
    createdAt?: Date | string;
    dataJson: JsonNullValueInput | InputJsonValue;
    client: ClientCreateNestedOneWithoutSimulationsInput;
  };

  export type SimulationUncheckedCreateInput = {
    id?: string;
    clientId: string;
    createdAt?: Date | string;
    dataJson: JsonNullValueInput | InputJsonValue;
  };

  export type SimulationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    dataJson?: JsonNullValueInput | InputJsonValue;
    client?: ClientUpdateOneRequiredWithoutSimulationsNestedInput;
  };

  export type SimulationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clientId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    dataJson?: JsonNullValueInput | InputJsonValue;
  };

  export type SimulationCreateManyInput = {
    id?: string;
    clientId: string;
    createdAt?: Date | string;
    dataJson: JsonNullValueInput | InputJsonValue;
  };

  export type SimulationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    dataJson?: JsonNullValueInput | InputJsonValue;
  };

  export type SimulationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clientId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    dataJson?: JsonNullValueInput | InputJsonValue;
  };

  export type WalletCreateInput = {
    id?: string;
    totalValue: number;
    allocationJson: JsonNullValueInput | InputJsonValue;
    client: ClientCreateNestedOneWithoutWalletInput;
  };

  export type WalletUncheckedCreateInput = {
    id?: string;
    clientId: string;
    totalValue: number;
    allocationJson: JsonNullValueInput | InputJsonValue;
  };

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalValue?: FloatFieldUpdateOperationsInput | number;
    allocationJson?: JsonNullValueInput | InputJsonValue;
    client?: ClientUpdateOneRequiredWithoutWalletNestedInput;
  };

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clientId?: StringFieldUpdateOperationsInput | string;
    totalValue?: FloatFieldUpdateOperationsInput | number;
    allocationJson?: JsonNullValueInput | InputJsonValue;
  };

  export type WalletCreateManyInput = {
    id?: string;
    clientId: string;
    totalValue: number;
    allocationJson: JsonNullValueInput | InputJsonValue;
  };

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalValue?: FloatFieldUpdateOperationsInput | number;
    allocationJson?: JsonNullValueInput | InputJsonValue;
  };

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clientId?: StringFieldUpdateOperationsInput | string;
    totalValue?: FloatFieldUpdateOperationsInput | number;
    allocationJson?: JsonNullValueInput | InputJsonValue;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ClientListRelationFilter = {
    every?: ClientWhereInput;
    some?: ClientWhereInput;
    none?: ClientWhereInput;
  };

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type EnumFamilyProfileFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.FamilyProfile
      | EnumFamilyProfileFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.FamilyProfile[]
      | ListEnumFamilyProfileFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.FamilyProfile[]
      | ListEnumFamilyProfileFieldRefInput<$PrismaModel>;
    not?: NestedEnumFamilyProfileFilter<$PrismaModel> | $Enums.FamilyProfile;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type GoalListRelationFilter = {
    every?: GoalWhereInput;
    some?: GoalWhereInput;
    none?: GoalWhereInput;
  };

  export type WalletNullableScalarRelationFilter = {
    is?: WalletWhereInput | null;
    isNot?: WalletWhereInput | null;
  };

  export type EventListRelationFilter = {
    every?: EventWhereInput;
    some?: EventWhereInput;
    none?: EventWhereInput;
  };

  export type SimulationListRelationFilter = {
    every?: SimulationWhereInput;
    some?: SimulationWhereInput;
    none?: SimulationWhereInput;
  };

  export type InsuranceListRelationFilter = {
    every?: InsuranceWhereInput;
    some?: InsuranceWhereInput;
    none?: InsuranceWhereInput;
  };

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SimulationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type InsuranceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    age?: SortOrder;
    status?: SortOrder;
    familyProfile?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    advisorId?: SortOrder;
  };

  export type ClientAvgOrderByAggregateInput = {
    age?: SortOrder;
  };

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    age?: SortOrder;
    status?: SortOrder;
    familyProfile?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    advisorId?: SortOrder;
  };

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    age?: SortOrder;
    status?: SortOrder;
    familyProfile?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    advisorId?: SortOrder;
  };

  export type ClientSumOrderByAggregateInput = {
    age?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumFamilyProfileWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.FamilyProfile
      | EnumFamilyProfileFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.FamilyProfile[]
      | ListEnumFamilyProfileFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.FamilyProfile[]
      | ListEnumFamilyProfileFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumFamilyProfileWithAggregatesFilter<$PrismaModel>
      | $Enums.FamilyProfile;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumFamilyProfileFilter<$PrismaModel>;
    _max?: NestedEnumFamilyProfileFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput;
    isNot?: ClientWhereInput;
  };

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    targetValue?: SortOrder;
    targetDate?: SortOrder;
  };

  export type GoalAvgOrderByAggregateInput = {
    targetValue?: SortOrder;
  };

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    targetValue?: SortOrder;
    targetDate?: SortOrder;
  };

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    targetValue?: SortOrder;
    targetDate?: SortOrder;
  };

  export type GoalSumOrderByAggregateInput = {
    targetValue?: SortOrder;
  };

  export type EnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.GoalType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>;
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
  };

  export type EnumEventFrequencyFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.EventFrequency
      | EnumEventFrequencyFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EventFrequency[]
      | ListEnumEventFrequencyFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EventFrequency[]
      | ListEnumEventFrequencyFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventFrequencyFilter<$PrismaModel> | $Enums.EventFrequency;
  };

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    value?: SortOrder;
    frequency?: SortOrder;
  };

  export type EventAvgOrderByAggregateInput = {
    value?: SortOrder;
  };

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    value?: SortOrder;
    frequency?: SortOrder;
  };

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    value?: SortOrder;
    frequency?: SortOrder;
  };

  export type EventSumOrderByAggregateInput = {
    value?: SortOrder;
  };

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEventTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.EventType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: NestedEnumEventTypeFilter<$PrismaModel>;
  };

  export type EnumEventFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.EventFrequency
      | EnumEventFrequencyFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EventFrequency[]
      | ListEnumEventFrequencyFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EventFrequency[]
      | ListEnumEventFrequencyFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEventFrequencyWithAggregatesFilter<$PrismaModel>
      | $Enums.EventFrequency;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventFrequencyFilter<$PrismaModel>;
    _max?: NestedEnumEventFrequencyFilter<$PrismaModel>;
  };

  export type EnumInsuranceTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InsuranceType
      | EnumInsuranceTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InsuranceType[]
      | ListEnumInsuranceTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InsuranceType[]
      | ListEnumInsuranceTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumInsuranceTypeFilter<$PrismaModel> | $Enums.InsuranceType;
  };

  export type InsuranceCountOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    value?: SortOrder;
  };

  export type InsuranceAvgOrderByAggregateInput = {
    value?: SortOrder;
  };

  export type InsuranceMaxOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    value?: SortOrder;
  };

  export type InsuranceMinOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    type?: SortOrder;
    value?: SortOrder;
  };

  export type InsuranceSumOrderByAggregateInput = {
    value?: SortOrder;
  };

  export type EnumInsuranceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InsuranceType
      | EnumInsuranceTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InsuranceType[]
      | ListEnumInsuranceTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InsuranceType[]
      | ListEnumInsuranceTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumInsuranceTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.InsuranceType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumInsuranceTypeFilter<$PrismaModel>;
    _max?: NestedEnumInsuranceTypeFilter<$PrismaModel>;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type SimulationCountOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    createdAt?: SortOrder;
    dataJson?: SortOrder;
  };

  export type SimulationMaxOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type SimulationMinOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    createdAt?: SortOrder;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    totalValue?: SortOrder;
    allocationJson?: SortOrder;
  };

  export type WalletAvgOrderByAggregateInput = {
    totalValue?: SortOrder;
  };

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    totalValue?: SortOrder;
  };

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder;
    clientId?: SortOrder;
    totalValue?: SortOrder;
  };

  export type WalletSumOrderByAggregateInput = {
    totalValue?: SortOrder;
  };

  export type ClientCreateNestedManyWithoutAdvisorInput = {
    create?:
      | XOR<
          ClientCreateWithoutAdvisorInput,
          ClientUncheckedCreateWithoutAdvisorInput
        >
      | ClientCreateWithoutAdvisorInput[]
      | ClientUncheckedCreateWithoutAdvisorInput[];
    connectOrCreate?:
      | ClientCreateOrConnectWithoutAdvisorInput
      | ClientCreateOrConnectWithoutAdvisorInput[];
    createMany?: ClientCreateManyAdvisorInputEnvelope;
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[];
  };

  export type ClientUncheckedCreateNestedManyWithoutAdvisorInput = {
    create?:
      | XOR<
          ClientCreateWithoutAdvisorInput,
          ClientUncheckedCreateWithoutAdvisorInput
        >
      | ClientCreateWithoutAdvisorInput[]
      | ClientUncheckedCreateWithoutAdvisorInput[];
    connectOrCreate?:
      | ClientCreateOrConnectWithoutAdvisorInput
      | ClientCreateOrConnectWithoutAdvisorInput[];
    createMany?: ClientCreateManyAdvisorInputEnvelope;
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ClientUpdateManyWithoutAdvisorNestedInput = {
    create?:
      | XOR<
          ClientCreateWithoutAdvisorInput,
          ClientUncheckedCreateWithoutAdvisorInput
        >
      | ClientCreateWithoutAdvisorInput[]
      | ClientUncheckedCreateWithoutAdvisorInput[];
    connectOrCreate?:
      | ClientCreateOrConnectWithoutAdvisorInput
      | ClientCreateOrConnectWithoutAdvisorInput[];
    upsert?:
      | ClientUpsertWithWhereUniqueWithoutAdvisorInput
      | ClientUpsertWithWhereUniqueWithoutAdvisorInput[];
    createMany?: ClientCreateManyAdvisorInputEnvelope;
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[];
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[];
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[];
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[];
    update?:
      | ClientUpdateWithWhereUniqueWithoutAdvisorInput
      | ClientUpdateWithWhereUniqueWithoutAdvisorInput[];
    updateMany?:
      | ClientUpdateManyWithWhereWithoutAdvisorInput
      | ClientUpdateManyWithWhereWithoutAdvisorInput[];
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[];
  };

  export type ClientUncheckedUpdateManyWithoutAdvisorNestedInput = {
    create?:
      | XOR<
          ClientCreateWithoutAdvisorInput,
          ClientUncheckedCreateWithoutAdvisorInput
        >
      | ClientCreateWithoutAdvisorInput[]
      | ClientUncheckedCreateWithoutAdvisorInput[];
    connectOrCreate?:
      | ClientCreateOrConnectWithoutAdvisorInput
      | ClientCreateOrConnectWithoutAdvisorInput[];
    upsert?:
      | ClientUpsertWithWhereUniqueWithoutAdvisorInput
      | ClientUpsertWithWhereUniqueWithoutAdvisorInput[];
    createMany?: ClientCreateManyAdvisorInputEnvelope;
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[];
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[];
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[];
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[];
    update?:
      | ClientUpdateWithWhereUniqueWithoutAdvisorInput
      | ClientUpdateWithWhereUniqueWithoutAdvisorInput[];
    updateMany?:
      | ClientUpdateManyWithWhereWithoutAdvisorInput
      | ClientUpdateManyWithWhereWithoutAdvisorInput[];
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[];
  };

  export type GoalCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<GoalCreateWithoutClientInput, GoalUncheckedCreateWithoutClientInput>
      | GoalCreateWithoutClientInput[]
      | GoalUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | GoalCreateOrConnectWithoutClientInput
      | GoalCreateOrConnectWithoutClientInput[];
    createMany?: GoalCreateManyClientInputEnvelope;
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[];
  };

  export type WalletCreateNestedOneWithoutClientInput = {
    create?: XOR<
      WalletCreateWithoutClientInput,
      WalletUncheckedCreateWithoutClientInput
    >;
    connectOrCreate?: WalletCreateOrConnectWithoutClientInput;
    connect?: WalletWhereUniqueInput;
  };

  export type EventCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<
          EventCreateWithoutClientInput,
          EventUncheckedCreateWithoutClientInput
        >
      | EventCreateWithoutClientInput[]
      | EventUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutClientInput
      | EventCreateOrConnectWithoutClientInput[];
    createMany?: EventCreateManyClientInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type SimulationCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<
          SimulationCreateWithoutClientInput,
          SimulationUncheckedCreateWithoutClientInput
        >
      | SimulationCreateWithoutClientInput[]
      | SimulationUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | SimulationCreateOrConnectWithoutClientInput
      | SimulationCreateOrConnectWithoutClientInput[];
    createMany?: SimulationCreateManyClientInputEnvelope;
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[];
  };

  export type InsuranceCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<
          InsuranceCreateWithoutClientInput,
          InsuranceUncheckedCreateWithoutClientInput
        >
      | InsuranceCreateWithoutClientInput[]
      | InsuranceUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | InsuranceCreateOrConnectWithoutClientInput
      | InsuranceCreateOrConnectWithoutClientInput[];
    createMany?: InsuranceCreateManyClientInputEnvelope;
    connect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[];
  };

  export type UserCreateNestedOneWithoutClientsInput = {
    create?: XOR<
      UserCreateWithoutClientsInput,
      UserUncheckedCreateWithoutClientsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput;
    connect?: UserWhereUniqueInput;
  };

  export type GoalUncheckedCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<GoalCreateWithoutClientInput, GoalUncheckedCreateWithoutClientInput>
      | GoalCreateWithoutClientInput[]
      | GoalUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | GoalCreateOrConnectWithoutClientInput
      | GoalCreateOrConnectWithoutClientInput[];
    createMany?: GoalCreateManyClientInputEnvelope;
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[];
  };

  export type WalletUncheckedCreateNestedOneWithoutClientInput = {
    create?: XOR<
      WalletCreateWithoutClientInput,
      WalletUncheckedCreateWithoutClientInput
    >;
    connectOrCreate?: WalletCreateOrConnectWithoutClientInput;
    connect?: WalletWhereUniqueInput;
  };

  export type EventUncheckedCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<
          EventCreateWithoutClientInput,
          EventUncheckedCreateWithoutClientInput
        >
      | EventCreateWithoutClientInput[]
      | EventUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutClientInput
      | EventCreateOrConnectWithoutClientInput[];
    createMany?: EventCreateManyClientInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type SimulationUncheckedCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<
          SimulationCreateWithoutClientInput,
          SimulationUncheckedCreateWithoutClientInput
        >
      | SimulationCreateWithoutClientInput[]
      | SimulationUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | SimulationCreateOrConnectWithoutClientInput
      | SimulationCreateOrConnectWithoutClientInput[];
    createMany?: SimulationCreateManyClientInputEnvelope;
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[];
  };

  export type InsuranceUncheckedCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<
          InsuranceCreateWithoutClientInput,
          InsuranceUncheckedCreateWithoutClientInput
        >
      | InsuranceCreateWithoutClientInput[]
      | InsuranceUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | InsuranceCreateOrConnectWithoutClientInput
      | InsuranceCreateOrConnectWithoutClientInput[];
    createMany?: InsuranceCreateManyClientInputEnvelope;
    connect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type EnumFamilyProfileFieldUpdateOperationsInput = {
    set?: $Enums.FamilyProfile;
  };

  export type GoalUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<GoalCreateWithoutClientInput, GoalUncheckedCreateWithoutClientInput>
      | GoalCreateWithoutClientInput[]
      | GoalUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | GoalCreateOrConnectWithoutClientInput
      | GoalCreateOrConnectWithoutClientInput[];
    upsert?:
      | GoalUpsertWithWhereUniqueWithoutClientInput
      | GoalUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: GoalCreateManyClientInputEnvelope;
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[];
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[];
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[];
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[];
    update?:
      | GoalUpdateWithWhereUniqueWithoutClientInput
      | GoalUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | GoalUpdateManyWithWhereWithoutClientInput
      | GoalUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[];
  };

  export type WalletUpdateOneWithoutClientNestedInput = {
    create?: XOR<
      WalletCreateWithoutClientInput,
      WalletUncheckedCreateWithoutClientInput
    >;
    connectOrCreate?: WalletCreateOrConnectWithoutClientInput;
    upsert?: WalletUpsertWithoutClientInput;
    disconnect?: WalletWhereInput | boolean;
    delete?: WalletWhereInput | boolean;
    connect?: WalletWhereUniqueInput;
    update?: XOR<
      XOR<
        WalletUpdateToOneWithWhereWithoutClientInput,
        WalletUpdateWithoutClientInput
      >,
      WalletUncheckedUpdateWithoutClientInput
    >;
  };

  export type EventUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutClientInput,
          EventUncheckedCreateWithoutClientInput
        >
      | EventCreateWithoutClientInput[]
      | EventUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutClientInput
      | EventCreateOrConnectWithoutClientInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutClientInput
      | EventUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: EventCreateManyClientInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutClientInput
      | EventUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutClientInput
      | EventUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type SimulationUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<
          SimulationCreateWithoutClientInput,
          SimulationUncheckedCreateWithoutClientInput
        >
      | SimulationCreateWithoutClientInput[]
      | SimulationUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | SimulationCreateOrConnectWithoutClientInput
      | SimulationCreateOrConnectWithoutClientInput[];
    upsert?:
      | SimulationUpsertWithWhereUniqueWithoutClientInput
      | SimulationUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: SimulationCreateManyClientInputEnvelope;
    set?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[];
    disconnect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[];
    delete?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[];
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[];
    update?:
      | SimulationUpdateWithWhereUniqueWithoutClientInput
      | SimulationUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | SimulationUpdateManyWithWhereWithoutClientInput
      | SimulationUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: SimulationScalarWhereInput | SimulationScalarWhereInput[];
  };

  export type InsuranceUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<
          InsuranceCreateWithoutClientInput,
          InsuranceUncheckedCreateWithoutClientInput
        >
      | InsuranceCreateWithoutClientInput[]
      | InsuranceUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | InsuranceCreateOrConnectWithoutClientInput
      | InsuranceCreateOrConnectWithoutClientInput[];
    upsert?:
      | InsuranceUpsertWithWhereUniqueWithoutClientInput
      | InsuranceUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: InsuranceCreateManyClientInputEnvelope;
    set?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[];
    disconnect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[];
    delete?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[];
    connect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[];
    update?:
      | InsuranceUpdateWithWhereUniqueWithoutClientInput
      | InsuranceUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | InsuranceUpdateManyWithWhereWithoutClientInput
      | InsuranceUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: InsuranceScalarWhereInput | InsuranceScalarWhereInput[];
  };

  export type UserUpdateOneWithoutClientsNestedInput = {
    create?: XOR<
      UserCreateWithoutClientsInput,
      UserUncheckedCreateWithoutClientsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput;
    upsert?: UserUpsertWithoutClientsInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutClientsInput,
        UserUpdateWithoutClientsInput
      >,
      UserUncheckedUpdateWithoutClientsInput
    >;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type GoalUncheckedUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<GoalCreateWithoutClientInput, GoalUncheckedCreateWithoutClientInput>
      | GoalCreateWithoutClientInput[]
      | GoalUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | GoalCreateOrConnectWithoutClientInput
      | GoalCreateOrConnectWithoutClientInput[];
    upsert?:
      | GoalUpsertWithWhereUniqueWithoutClientInput
      | GoalUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: GoalCreateManyClientInputEnvelope;
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[];
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[];
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[];
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[];
    update?:
      | GoalUpdateWithWhereUniqueWithoutClientInput
      | GoalUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | GoalUpdateManyWithWhereWithoutClientInput
      | GoalUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[];
  };

  export type WalletUncheckedUpdateOneWithoutClientNestedInput = {
    create?: XOR<
      WalletCreateWithoutClientInput,
      WalletUncheckedCreateWithoutClientInput
    >;
    connectOrCreate?: WalletCreateOrConnectWithoutClientInput;
    upsert?: WalletUpsertWithoutClientInput;
    disconnect?: WalletWhereInput | boolean;
    delete?: WalletWhereInput | boolean;
    connect?: WalletWhereUniqueInput;
    update?: XOR<
      XOR<
        WalletUpdateToOneWithWhereWithoutClientInput,
        WalletUpdateWithoutClientInput
      >,
      WalletUncheckedUpdateWithoutClientInput
    >;
  };

  export type EventUncheckedUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutClientInput,
          EventUncheckedCreateWithoutClientInput
        >
      | EventCreateWithoutClientInput[]
      | EventUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutClientInput
      | EventCreateOrConnectWithoutClientInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutClientInput
      | EventUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: EventCreateManyClientInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutClientInput
      | EventUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutClientInput
      | EventUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type SimulationUncheckedUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<
          SimulationCreateWithoutClientInput,
          SimulationUncheckedCreateWithoutClientInput
        >
      | SimulationCreateWithoutClientInput[]
      | SimulationUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | SimulationCreateOrConnectWithoutClientInput
      | SimulationCreateOrConnectWithoutClientInput[];
    upsert?:
      | SimulationUpsertWithWhereUniqueWithoutClientInput
      | SimulationUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: SimulationCreateManyClientInputEnvelope;
    set?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[];
    disconnect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[];
    delete?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[];
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[];
    update?:
      | SimulationUpdateWithWhereUniqueWithoutClientInput
      | SimulationUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | SimulationUpdateManyWithWhereWithoutClientInput
      | SimulationUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: SimulationScalarWhereInput | SimulationScalarWhereInput[];
  };

  export type InsuranceUncheckedUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<
          InsuranceCreateWithoutClientInput,
          InsuranceUncheckedCreateWithoutClientInput
        >
      | InsuranceCreateWithoutClientInput[]
      | InsuranceUncheckedCreateWithoutClientInput[];
    connectOrCreate?:
      | InsuranceCreateOrConnectWithoutClientInput
      | InsuranceCreateOrConnectWithoutClientInput[];
    upsert?:
      | InsuranceUpsertWithWhereUniqueWithoutClientInput
      | InsuranceUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: InsuranceCreateManyClientInputEnvelope;
    set?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[];
    disconnect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[];
    delete?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[];
    connect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[];
    update?:
      | InsuranceUpdateWithWhereUniqueWithoutClientInput
      | InsuranceUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?:
      | InsuranceUpdateManyWithWhereWithoutClientInput
      | InsuranceUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: InsuranceScalarWhereInput | InsuranceScalarWhereInput[];
  };

  export type ClientCreateNestedOneWithoutGoalsInput = {
    create?: XOR<
      ClientCreateWithoutGoalsInput,
      ClientUncheckedCreateWithoutGoalsInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutGoalsInput;
    connect?: ClientWhereUniqueInput;
  };

  export type EnumGoalTypeFieldUpdateOperationsInput = {
    set?: $Enums.GoalType;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ClientUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<
      ClientCreateWithoutGoalsInput,
      ClientUncheckedCreateWithoutGoalsInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutGoalsInput;
    upsert?: ClientUpsertWithoutGoalsInput;
    connect?: ClientWhereUniqueInput;
    update?: XOR<
      XOR<
        ClientUpdateToOneWithWhereWithoutGoalsInput,
        ClientUpdateWithoutGoalsInput
      >,
      ClientUncheckedUpdateWithoutGoalsInput
    >;
  };

  export type ClientCreateNestedOneWithoutEventsInput = {
    create?: XOR<
      ClientCreateWithoutEventsInput,
      ClientUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutEventsInput;
    connect?: ClientWhereUniqueInput;
  };

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType;
  };

  export type EnumEventFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.EventFrequency;
  };

  export type ClientUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<
      ClientCreateWithoutEventsInput,
      ClientUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutEventsInput;
    upsert?: ClientUpsertWithoutEventsInput;
    connect?: ClientWhereUniqueInput;
    update?: XOR<
      XOR<
        ClientUpdateToOneWithWhereWithoutEventsInput,
        ClientUpdateWithoutEventsInput
      >,
      ClientUncheckedUpdateWithoutEventsInput
    >;
  };

  export type ClientCreateNestedOneWithoutInsurancesInput = {
    create?: XOR<
      ClientCreateWithoutInsurancesInput,
      ClientUncheckedCreateWithoutInsurancesInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutInsurancesInput;
    connect?: ClientWhereUniqueInput;
  };

  export type EnumInsuranceTypeFieldUpdateOperationsInput = {
    set?: $Enums.InsuranceType;
  };

  export type ClientUpdateOneRequiredWithoutInsurancesNestedInput = {
    create?: XOR<
      ClientCreateWithoutInsurancesInput,
      ClientUncheckedCreateWithoutInsurancesInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutInsurancesInput;
    upsert?: ClientUpsertWithoutInsurancesInput;
    connect?: ClientWhereUniqueInput;
    update?: XOR<
      XOR<
        ClientUpdateToOneWithWhereWithoutInsurancesInput,
        ClientUpdateWithoutInsurancesInput
      >,
      ClientUncheckedUpdateWithoutInsurancesInput
    >;
  };

  export type ClientCreateNestedOneWithoutSimulationsInput = {
    create?: XOR<
      ClientCreateWithoutSimulationsInput,
      ClientUncheckedCreateWithoutSimulationsInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutSimulationsInput;
    connect?: ClientWhereUniqueInput;
  };

  export type ClientUpdateOneRequiredWithoutSimulationsNestedInput = {
    create?: XOR<
      ClientCreateWithoutSimulationsInput,
      ClientUncheckedCreateWithoutSimulationsInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutSimulationsInput;
    upsert?: ClientUpsertWithoutSimulationsInput;
    connect?: ClientWhereUniqueInput;
    update?: XOR<
      XOR<
        ClientUpdateToOneWithWhereWithoutSimulationsInput,
        ClientUpdateWithoutSimulationsInput
      >,
      ClientUncheckedUpdateWithoutSimulationsInput
    >;
  };

  export type ClientCreateNestedOneWithoutWalletInput = {
    create?: XOR<
      ClientCreateWithoutWalletInput,
      ClientUncheckedCreateWithoutWalletInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutWalletInput;
    connect?: ClientWhereUniqueInput;
  };

  export type ClientUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<
      ClientCreateWithoutWalletInput,
      ClientUncheckedCreateWithoutWalletInput
    >;
    connectOrCreate?: ClientCreateOrConnectWithoutWalletInput;
    upsert?: ClientUpsertWithoutWalletInput;
    connect?: ClientWhereUniqueInput;
    update?: XOR<
      XOR<
        ClientUpdateToOneWithWhereWithoutWalletInput,
        ClientUpdateWithoutWalletInput
      >,
      ClientUncheckedUpdateWithoutWalletInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumFamilyProfileFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.FamilyProfile
      | EnumFamilyProfileFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.FamilyProfile[]
      | ListEnumFamilyProfileFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.FamilyProfile[]
      | ListEnumFamilyProfileFieldRefInput<$PrismaModel>;
    not?: NestedEnumFamilyProfileFilter<$PrismaModel> | $Enums.FamilyProfile;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumFamilyProfileWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.FamilyProfile
      | EnumFamilyProfileFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.FamilyProfile[]
      | ListEnumFamilyProfileFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.FamilyProfile[]
      | ListEnumFamilyProfileFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumFamilyProfileWithAggregatesFilter<$PrismaModel>
      | $Enums.FamilyProfile;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumFamilyProfileFilter<$PrismaModel>;
    _max?: NestedEnumFamilyProfileFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType;
  };

  export type NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.GoalType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>;
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
  };

  export type NestedEnumEventFrequencyFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.EventFrequency
      | EnumEventFrequencyFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EventFrequency[]
      | ListEnumEventFrequencyFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EventFrequency[]
      | ListEnumEventFrequencyFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventFrequencyFilter<$PrismaModel> | $Enums.EventFrequency;
  };

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEventTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.EventType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: NestedEnumEventTypeFilter<$PrismaModel>;
  };

  export type NestedEnumEventFrequencyWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.EventFrequency
      | EnumEventFrequencyFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EventFrequency[]
      | ListEnumEventFrequencyFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EventFrequency[]
      | ListEnumEventFrequencyFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEventFrequencyWithAggregatesFilter<$PrismaModel>
      | $Enums.EventFrequency;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventFrequencyFilter<$PrismaModel>;
    _max?: NestedEnumEventFrequencyFilter<$PrismaModel>;
  };

  export type NestedEnumInsuranceTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InsuranceType
      | EnumInsuranceTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InsuranceType[]
      | ListEnumInsuranceTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InsuranceType[]
      | ListEnumInsuranceTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumInsuranceTypeFilter<$PrismaModel> | $Enums.InsuranceType;
  };

  export type NestedEnumInsuranceTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.InsuranceType
      | EnumInsuranceTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InsuranceType[]
      | ListEnumInsuranceTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InsuranceType[]
      | ListEnumInsuranceTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumInsuranceTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.InsuranceType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumInsuranceTypeFilter<$PrismaModel>;
    _max?: NestedEnumInsuranceTypeFilter<$PrismaModel>;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type ClientCreateWithoutAdvisorInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goals?: GoalCreateNestedManyWithoutClientInput;
    wallet?: WalletCreateNestedOneWithoutClientInput;
    events?: EventCreateNestedManyWithoutClientInput;
    simulations?: SimulationCreateNestedManyWithoutClientInput;
    insurances?: InsuranceCreateNestedManyWithoutClientInput;
  };

  export type ClientUncheckedCreateWithoutAdvisorInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goals?: GoalUncheckedCreateNestedManyWithoutClientInput;
    wallet?: WalletUncheckedCreateNestedOneWithoutClientInput;
    events?: EventUncheckedCreateNestedManyWithoutClientInput;
    simulations?: SimulationUncheckedCreateNestedManyWithoutClientInput;
    insurances?: InsuranceUncheckedCreateNestedManyWithoutClientInput;
  };

  export type ClientCreateOrConnectWithoutAdvisorInput = {
    where: ClientWhereUniqueInput;
    create: XOR<
      ClientCreateWithoutAdvisorInput,
      ClientUncheckedCreateWithoutAdvisorInput
    >;
  };

  export type ClientCreateManyAdvisorInputEnvelope = {
    data: ClientCreateManyAdvisorInput | ClientCreateManyAdvisorInput[];
    skipDuplicates?: boolean;
  };

  export type ClientUpsertWithWhereUniqueWithoutAdvisorInput = {
    where: ClientWhereUniqueInput;
    update: XOR<
      ClientUpdateWithoutAdvisorInput,
      ClientUncheckedUpdateWithoutAdvisorInput
    >;
    create: XOR<
      ClientCreateWithoutAdvisorInput,
      ClientUncheckedCreateWithoutAdvisorInput
    >;
  };

  export type ClientUpdateWithWhereUniqueWithoutAdvisorInput = {
    where: ClientWhereUniqueInput;
    data: XOR<
      ClientUpdateWithoutAdvisorInput,
      ClientUncheckedUpdateWithoutAdvisorInput
    >;
  };

  export type ClientUpdateManyWithWhereWithoutAdvisorInput = {
    where: ClientScalarWhereInput;
    data: XOR<
      ClientUpdateManyMutationInput,
      ClientUncheckedUpdateManyWithoutAdvisorInput
    >;
  };

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[];
    OR?: ClientScalarWhereInput[];
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[];
    id?: StringFilter<'Client'> | string;
    name?: StringFilter<'Client'> | string;
    email?: StringFilter<'Client'> | string;
    age?: IntFilter<'Client'> | number;
    status?: BoolFilter<'Client'> | boolean;
    familyProfile?: EnumFamilyProfileFilter<'Client'> | $Enums.FamilyProfile;
    createdAt?: DateTimeFilter<'Client'> | Date | string;
    updatedAt?: DateTimeFilter<'Client'> | Date | string;
    advisorId?: StringNullableFilter<'Client'> | string | null;
  };

  export type GoalCreateWithoutClientInput = {
    id?: string;
    type: $Enums.GoalType;
    targetValue: number;
    targetDate: Date | string;
  };

  export type GoalUncheckedCreateWithoutClientInput = {
    id?: string;
    type: $Enums.GoalType;
    targetValue: number;
    targetDate: Date | string;
  };

  export type GoalCreateOrConnectWithoutClientInput = {
    where: GoalWhereUniqueInput;
    create: XOR<
      GoalCreateWithoutClientInput,
      GoalUncheckedCreateWithoutClientInput
    >;
  };

  export type GoalCreateManyClientInputEnvelope = {
    data: GoalCreateManyClientInput | GoalCreateManyClientInput[];
    skipDuplicates?: boolean;
  };

  export type WalletCreateWithoutClientInput = {
    id?: string;
    totalValue: number;
    allocationJson: JsonNullValueInput | InputJsonValue;
  };

  export type WalletUncheckedCreateWithoutClientInput = {
    id?: string;
    totalValue: number;
    allocationJson: JsonNullValueInput | InputJsonValue;
  };

  export type WalletCreateOrConnectWithoutClientInput = {
    where: WalletWhereUniqueInput;
    create: XOR<
      WalletCreateWithoutClientInput,
      WalletUncheckedCreateWithoutClientInput
    >;
  };

  export type EventCreateWithoutClientInput = {
    id?: string;
    type: $Enums.EventType;
    value: number;
    frequency: $Enums.EventFrequency;
  };

  export type EventUncheckedCreateWithoutClientInput = {
    id?: string;
    type: $Enums.EventType;
    value: number;
    frequency: $Enums.EventFrequency;
  };

  export type EventCreateOrConnectWithoutClientInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutClientInput,
      EventUncheckedCreateWithoutClientInput
    >;
  };

  export type EventCreateManyClientInputEnvelope = {
    data: EventCreateManyClientInput | EventCreateManyClientInput[];
    skipDuplicates?: boolean;
  };

  export type SimulationCreateWithoutClientInput = {
    id?: string;
    createdAt?: Date | string;
    dataJson: JsonNullValueInput | InputJsonValue;
  };

  export type SimulationUncheckedCreateWithoutClientInput = {
    id?: string;
    createdAt?: Date | string;
    dataJson: JsonNullValueInput | InputJsonValue;
  };

  export type SimulationCreateOrConnectWithoutClientInput = {
    where: SimulationWhereUniqueInput;
    create: XOR<
      SimulationCreateWithoutClientInput,
      SimulationUncheckedCreateWithoutClientInput
    >;
  };

  export type SimulationCreateManyClientInputEnvelope = {
    data: SimulationCreateManyClientInput | SimulationCreateManyClientInput[];
    skipDuplicates?: boolean;
  };

  export type InsuranceCreateWithoutClientInput = {
    id?: string;
    type: $Enums.InsuranceType;
    value: number;
  };

  export type InsuranceUncheckedCreateWithoutClientInput = {
    id?: string;
    type: $Enums.InsuranceType;
    value: number;
  };

  export type InsuranceCreateOrConnectWithoutClientInput = {
    where: InsuranceWhereUniqueInput;
    create: XOR<
      InsuranceCreateWithoutClientInput,
      InsuranceUncheckedCreateWithoutClientInput
    >;
  };

  export type InsuranceCreateManyClientInputEnvelope = {
    data: InsuranceCreateManyClientInput | InsuranceCreateManyClientInput[];
    skipDuplicates?: boolean;
  };

  export type UserCreateWithoutClientsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUncheckedCreateWithoutClientsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutClientsInput,
      UserUncheckedCreateWithoutClientsInput
    >;
  };

  export type GoalUpsertWithWhereUniqueWithoutClientInput = {
    where: GoalWhereUniqueInput;
    update: XOR<
      GoalUpdateWithoutClientInput,
      GoalUncheckedUpdateWithoutClientInput
    >;
    create: XOR<
      GoalCreateWithoutClientInput,
      GoalUncheckedCreateWithoutClientInput
    >;
  };

  export type GoalUpdateWithWhereUniqueWithoutClientInput = {
    where: GoalWhereUniqueInput;
    data: XOR<
      GoalUpdateWithoutClientInput,
      GoalUncheckedUpdateWithoutClientInput
    >;
  };

  export type GoalUpdateManyWithWhereWithoutClientInput = {
    where: GoalScalarWhereInput;
    data: XOR<
      GoalUpdateManyMutationInput,
      GoalUncheckedUpdateManyWithoutClientInput
    >;
  };

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[];
    OR?: GoalScalarWhereInput[];
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[];
    id?: StringFilter<'Goal'> | string;
    clientId?: StringFilter<'Goal'> | string;
    type?: EnumGoalTypeFilter<'Goal'> | $Enums.GoalType;
    targetValue?: FloatFilter<'Goal'> | number;
    targetDate?: DateTimeFilter<'Goal'> | Date | string;
  };

  export type WalletUpsertWithoutClientInput = {
    update: XOR<
      WalletUpdateWithoutClientInput,
      WalletUncheckedUpdateWithoutClientInput
    >;
    create: XOR<
      WalletCreateWithoutClientInput,
      WalletUncheckedCreateWithoutClientInput
    >;
    where?: WalletWhereInput;
  };

  export type WalletUpdateToOneWithWhereWithoutClientInput = {
    where?: WalletWhereInput;
    data: XOR<
      WalletUpdateWithoutClientInput,
      WalletUncheckedUpdateWithoutClientInput
    >;
  };

  export type WalletUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalValue?: FloatFieldUpdateOperationsInput | number;
    allocationJson?: JsonNullValueInput | InputJsonValue;
  };

  export type WalletUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalValue?: FloatFieldUpdateOperationsInput | number;
    allocationJson?: JsonNullValueInput | InputJsonValue;
  };

  export type EventUpsertWithWhereUniqueWithoutClientInput = {
    where: EventWhereUniqueInput;
    update: XOR<
      EventUpdateWithoutClientInput,
      EventUncheckedUpdateWithoutClientInput
    >;
    create: XOR<
      EventCreateWithoutClientInput,
      EventUncheckedCreateWithoutClientInput
    >;
  };

  export type EventUpdateWithWhereUniqueWithoutClientInput = {
    where: EventWhereUniqueInput;
    data: XOR<
      EventUpdateWithoutClientInput,
      EventUncheckedUpdateWithoutClientInput
    >;
  };

  export type EventUpdateManyWithWhereWithoutClientInput = {
    where: EventScalarWhereInput;
    data: XOR<
      EventUpdateManyMutationInput,
      EventUncheckedUpdateManyWithoutClientInput
    >;
  };

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[];
    OR?: EventScalarWhereInput[];
    NOT?: EventScalarWhereInput | EventScalarWhereInput[];
    id?: StringFilter<'Event'> | string;
    clientId?: StringFilter<'Event'> | string;
    type?: EnumEventTypeFilter<'Event'> | $Enums.EventType;
    value?: FloatFilter<'Event'> | number;
    frequency?: EnumEventFrequencyFilter<'Event'> | $Enums.EventFrequency;
  };

  export type SimulationUpsertWithWhereUniqueWithoutClientInput = {
    where: SimulationWhereUniqueInput;
    update: XOR<
      SimulationUpdateWithoutClientInput,
      SimulationUncheckedUpdateWithoutClientInput
    >;
    create: XOR<
      SimulationCreateWithoutClientInput,
      SimulationUncheckedCreateWithoutClientInput
    >;
  };

  export type SimulationUpdateWithWhereUniqueWithoutClientInput = {
    where: SimulationWhereUniqueInput;
    data: XOR<
      SimulationUpdateWithoutClientInput,
      SimulationUncheckedUpdateWithoutClientInput
    >;
  };

  export type SimulationUpdateManyWithWhereWithoutClientInput = {
    where: SimulationScalarWhereInput;
    data: XOR<
      SimulationUpdateManyMutationInput,
      SimulationUncheckedUpdateManyWithoutClientInput
    >;
  };

  export type SimulationScalarWhereInput = {
    AND?: SimulationScalarWhereInput | SimulationScalarWhereInput[];
    OR?: SimulationScalarWhereInput[];
    NOT?: SimulationScalarWhereInput | SimulationScalarWhereInput[];
    id?: StringFilter<'Simulation'> | string;
    clientId?: StringFilter<'Simulation'> | string;
    createdAt?: DateTimeFilter<'Simulation'> | Date | string;
    dataJson?: JsonFilter<'Simulation'>;
  };

  export type InsuranceUpsertWithWhereUniqueWithoutClientInput = {
    where: InsuranceWhereUniqueInput;
    update: XOR<
      InsuranceUpdateWithoutClientInput,
      InsuranceUncheckedUpdateWithoutClientInput
    >;
    create: XOR<
      InsuranceCreateWithoutClientInput,
      InsuranceUncheckedCreateWithoutClientInput
    >;
  };

  export type InsuranceUpdateWithWhereUniqueWithoutClientInput = {
    where: InsuranceWhereUniqueInput;
    data: XOR<
      InsuranceUpdateWithoutClientInput,
      InsuranceUncheckedUpdateWithoutClientInput
    >;
  };

  export type InsuranceUpdateManyWithWhereWithoutClientInput = {
    where: InsuranceScalarWhereInput;
    data: XOR<
      InsuranceUpdateManyMutationInput,
      InsuranceUncheckedUpdateManyWithoutClientInput
    >;
  };

  export type InsuranceScalarWhereInput = {
    AND?: InsuranceScalarWhereInput | InsuranceScalarWhereInput[];
    OR?: InsuranceScalarWhereInput[];
    NOT?: InsuranceScalarWhereInput | InsuranceScalarWhereInput[];
    id?: StringFilter<'Insurance'> | string;
    clientId?: StringFilter<'Insurance'> | string;
    type?: EnumInsuranceTypeFilter<'Insurance'> | $Enums.InsuranceType;
    value?: FloatFilter<'Insurance'> | number;
  };

  export type UserUpsertWithoutClientsInput = {
    update: XOR<
      UserUpdateWithoutClientsInput,
      UserUncheckedUpdateWithoutClientsInput
    >;
    create: XOR<
      UserCreateWithoutClientsInput,
      UserUncheckedCreateWithoutClientsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutClientsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutClientsInput,
      UserUncheckedUpdateWithoutClientsInput
    >;
  };

  export type UserUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ClientCreateWithoutGoalsInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wallet?: WalletCreateNestedOneWithoutClientInput;
    events?: EventCreateNestedManyWithoutClientInput;
    simulations?: SimulationCreateNestedManyWithoutClientInput;
    insurances?: InsuranceCreateNestedManyWithoutClientInput;
    advisor?: UserCreateNestedOneWithoutClientsInput;
  };

  export type ClientUncheckedCreateWithoutGoalsInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    advisorId?: string | null;
    wallet?: WalletUncheckedCreateNestedOneWithoutClientInput;
    events?: EventUncheckedCreateNestedManyWithoutClientInput;
    simulations?: SimulationUncheckedCreateNestedManyWithoutClientInput;
    insurances?: InsuranceUncheckedCreateNestedManyWithoutClientInput;
  };

  export type ClientCreateOrConnectWithoutGoalsInput = {
    where: ClientWhereUniqueInput;
    create: XOR<
      ClientCreateWithoutGoalsInput,
      ClientUncheckedCreateWithoutGoalsInput
    >;
  };

  export type ClientUpsertWithoutGoalsInput = {
    update: XOR<
      ClientUpdateWithoutGoalsInput,
      ClientUncheckedUpdateWithoutGoalsInput
    >;
    create: XOR<
      ClientCreateWithoutGoalsInput,
      ClientUncheckedCreateWithoutGoalsInput
    >;
    where?: ClientWhereInput;
  };

  export type ClientUpdateToOneWithWhereWithoutGoalsInput = {
    where?: ClientWhereInput;
    data: XOR<
      ClientUpdateWithoutGoalsInput,
      ClientUncheckedUpdateWithoutGoalsInput
    >;
  };

  export type ClientUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    wallet?: WalletUpdateOneWithoutClientNestedInput;
    events?: EventUpdateManyWithoutClientNestedInput;
    simulations?: SimulationUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUpdateManyWithoutClientNestedInput;
    advisor?: UserUpdateOneWithoutClientsNestedInput;
  };

  export type ClientUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisorId?: NullableStringFieldUpdateOperationsInput | string | null;
    wallet?: WalletUncheckedUpdateOneWithoutClientNestedInput;
    events?: EventUncheckedUpdateManyWithoutClientNestedInput;
    simulations?: SimulationUncheckedUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type ClientCreateWithoutEventsInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goals?: GoalCreateNestedManyWithoutClientInput;
    wallet?: WalletCreateNestedOneWithoutClientInput;
    simulations?: SimulationCreateNestedManyWithoutClientInput;
    insurances?: InsuranceCreateNestedManyWithoutClientInput;
    advisor?: UserCreateNestedOneWithoutClientsInput;
  };

  export type ClientUncheckedCreateWithoutEventsInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    advisorId?: string | null;
    goals?: GoalUncheckedCreateNestedManyWithoutClientInput;
    wallet?: WalletUncheckedCreateNestedOneWithoutClientInput;
    simulations?: SimulationUncheckedCreateNestedManyWithoutClientInput;
    insurances?: InsuranceUncheckedCreateNestedManyWithoutClientInput;
  };

  export type ClientCreateOrConnectWithoutEventsInput = {
    where: ClientWhereUniqueInput;
    create: XOR<
      ClientCreateWithoutEventsInput,
      ClientUncheckedCreateWithoutEventsInput
    >;
  };

  export type ClientUpsertWithoutEventsInput = {
    update: XOR<
      ClientUpdateWithoutEventsInput,
      ClientUncheckedUpdateWithoutEventsInput
    >;
    create: XOR<
      ClientCreateWithoutEventsInput,
      ClientUncheckedCreateWithoutEventsInput
    >;
    where?: ClientWhereInput;
  };

  export type ClientUpdateToOneWithWhereWithoutEventsInput = {
    where?: ClientWhereInput;
    data: XOR<
      ClientUpdateWithoutEventsInput,
      ClientUncheckedUpdateWithoutEventsInput
    >;
  };

  export type ClientUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    goals?: GoalUpdateManyWithoutClientNestedInput;
    wallet?: WalletUpdateOneWithoutClientNestedInput;
    simulations?: SimulationUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUpdateManyWithoutClientNestedInput;
    advisor?: UserUpdateOneWithoutClientsNestedInput;
  };

  export type ClientUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisorId?: NullableStringFieldUpdateOperationsInput | string | null;
    goals?: GoalUncheckedUpdateManyWithoutClientNestedInput;
    wallet?: WalletUncheckedUpdateOneWithoutClientNestedInput;
    simulations?: SimulationUncheckedUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type ClientCreateWithoutInsurancesInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goals?: GoalCreateNestedManyWithoutClientInput;
    wallet?: WalletCreateNestedOneWithoutClientInput;
    events?: EventCreateNestedManyWithoutClientInput;
    simulations?: SimulationCreateNestedManyWithoutClientInput;
    advisor?: UserCreateNestedOneWithoutClientsInput;
  };

  export type ClientUncheckedCreateWithoutInsurancesInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    advisorId?: string | null;
    goals?: GoalUncheckedCreateNestedManyWithoutClientInput;
    wallet?: WalletUncheckedCreateNestedOneWithoutClientInput;
    events?: EventUncheckedCreateNestedManyWithoutClientInput;
    simulations?: SimulationUncheckedCreateNestedManyWithoutClientInput;
  };

  export type ClientCreateOrConnectWithoutInsurancesInput = {
    where: ClientWhereUniqueInput;
    create: XOR<
      ClientCreateWithoutInsurancesInput,
      ClientUncheckedCreateWithoutInsurancesInput
    >;
  };

  export type ClientUpsertWithoutInsurancesInput = {
    update: XOR<
      ClientUpdateWithoutInsurancesInput,
      ClientUncheckedUpdateWithoutInsurancesInput
    >;
    create: XOR<
      ClientCreateWithoutInsurancesInput,
      ClientUncheckedCreateWithoutInsurancesInput
    >;
    where?: ClientWhereInput;
  };

  export type ClientUpdateToOneWithWhereWithoutInsurancesInput = {
    where?: ClientWhereInput;
    data: XOR<
      ClientUpdateWithoutInsurancesInput,
      ClientUncheckedUpdateWithoutInsurancesInput
    >;
  };

  export type ClientUpdateWithoutInsurancesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    goals?: GoalUpdateManyWithoutClientNestedInput;
    wallet?: WalletUpdateOneWithoutClientNestedInput;
    events?: EventUpdateManyWithoutClientNestedInput;
    simulations?: SimulationUpdateManyWithoutClientNestedInput;
    advisor?: UserUpdateOneWithoutClientsNestedInput;
  };

  export type ClientUncheckedUpdateWithoutInsurancesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisorId?: NullableStringFieldUpdateOperationsInput | string | null;
    goals?: GoalUncheckedUpdateManyWithoutClientNestedInput;
    wallet?: WalletUncheckedUpdateOneWithoutClientNestedInput;
    events?: EventUncheckedUpdateManyWithoutClientNestedInput;
    simulations?: SimulationUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type ClientCreateWithoutSimulationsInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goals?: GoalCreateNestedManyWithoutClientInput;
    wallet?: WalletCreateNestedOneWithoutClientInput;
    events?: EventCreateNestedManyWithoutClientInput;
    insurances?: InsuranceCreateNestedManyWithoutClientInput;
    advisor?: UserCreateNestedOneWithoutClientsInput;
  };

  export type ClientUncheckedCreateWithoutSimulationsInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    advisorId?: string | null;
    goals?: GoalUncheckedCreateNestedManyWithoutClientInput;
    wallet?: WalletUncheckedCreateNestedOneWithoutClientInput;
    events?: EventUncheckedCreateNestedManyWithoutClientInput;
    insurances?: InsuranceUncheckedCreateNestedManyWithoutClientInput;
  };

  export type ClientCreateOrConnectWithoutSimulationsInput = {
    where: ClientWhereUniqueInput;
    create: XOR<
      ClientCreateWithoutSimulationsInput,
      ClientUncheckedCreateWithoutSimulationsInput
    >;
  };

  export type ClientUpsertWithoutSimulationsInput = {
    update: XOR<
      ClientUpdateWithoutSimulationsInput,
      ClientUncheckedUpdateWithoutSimulationsInput
    >;
    create: XOR<
      ClientCreateWithoutSimulationsInput,
      ClientUncheckedCreateWithoutSimulationsInput
    >;
    where?: ClientWhereInput;
  };

  export type ClientUpdateToOneWithWhereWithoutSimulationsInput = {
    where?: ClientWhereInput;
    data: XOR<
      ClientUpdateWithoutSimulationsInput,
      ClientUncheckedUpdateWithoutSimulationsInput
    >;
  };

  export type ClientUpdateWithoutSimulationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    goals?: GoalUpdateManyWithoutClientNestedInput;
    wallet?: WalletUpdateOneWithoutClientNestedInput;
    events?: EventUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUpdateManyWithoutClientNestedInput;
    advisor?: UserUpdateOneWithoutClientsNestedInput;
  };

  export type ClientUncheckedUpdateWithoutSimulationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisorId?: NullableStringFieldUpdateOperationsInput | string | null;
    goals?: GoalUncheckedUpdateManyWithoutClientNestedInput;
    wallet?: WalletUncheckedUpdateOneWithoutClientNestedInput;
    events?: EventUncheckedUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type ClientCreateWithoutWalletInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goals?: GoalCreateNestedManyWithoutClientInput;
    events?: EventCreateNestedManyWithoutClientInput;
    simulations?: SimulationCreateNestedManyWithoutClientInput;
    insurances?: InsuranceCreateNestedManyWithoutClientInput;
    advisor?: UserCreateNestedOneWithoutClientsInput;
  };

  export type ClientUncheckedCreateWithoutWalletInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    advisorId?: string | null;
    goals?: GoalUncheckedCreateNestedManyWithoutClientInput;
    events?: EventUncheckedCreateNestedManyWithoutClientInput;
    simulations?: SimulationUncheckedCreateNestedManyWithoutClientInput;
    insurances?: InsuranceUncheckedCreateNestedManyWithoutClientInput;
  };

  export type ClientCreateOrConnectWithoutWalletInput = {
    where: ClientWhereUniqueInput;
    create: XOR<
      ClientCreateWithoutWalletInput,
      ClientUncheckedCreateWithoutWalletInput
    >;
  };

  export type ClientUpsertWithoutWalletInput = {
    update: XOR<
      ClientUpdateWithoutWalletInput,
      ClientUncheckedUpdateWithoutWalletInput
    >;
    create: XOR<
      ClientCreateWithoutWalletInput,
      ClientUncheckedCreateWithoutWalletInput
    >;
    where?: ClientWhereInput;
  };

  export type ClientUpdateToOneWithWhereWithoutWalletInput = {
    where?: ClientWhereInput;
    data: XOR<
      ClientUpdateWithoutWalletInput,
      ClientUncheckedUpdateWithoutWalletInput
    >;
  };

  export type ClientUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    goals?: GoalUpdateManyWithoutClientNestedInput;
    events?: EventUpdateManyWithoutClientNestedInput;
    simulations?: SimulationUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUpdateManyWithoutClientNestedInput;
    advisor?: UserUpdateOneWithoutClientsNestedInput;
  };

  export type ClientUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisorId?: NullableStringFieldUpdateOperationsInput | string | null;
    goals?: GoalUncheckedUpdateManyWithoutClientNestedInput;
    events?: EventUncheckedUpdateManyWithoutClientNestedInput;
    simulations?: SimulationUncheckedUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type ClientCreateManyAdvisorInput = {
    id?: string;
    name: string;
    email: string;
    age: number;
    status: boolean;
    familyProfile: $Enums.FamilyProfile;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ClientUpdateWithoutAdvisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    goals?: GoalUpdateManyWithoutClientNestedInput;
    wallet?: WalletUpdateOneWithoutClientNestedInput;
    events?: EventUpdateManyWithoutClientNestedInput;
    simulations?: SimulationUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUpdateManyWithoutClientNestedInput;
  };

  export type ClientUncheckedUpdateWithoutAdvisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    goals?: GoalUncheckedUpdateManyWithoutClientNestedInput;
    wallet?: WalletUncheckedUpdateOneWithoutClientNestedInput;
    events?: EventUncheckedUpdateManyWithoutClientNestedInput;
    simulations?: SimulationUncheckedUpdateManyWithoutClientNestedInput;
    insurances?: InsuranceUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type ClientUncheckedUpdateManyWithoutAdvisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    age?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    familyProfile?:
      | EnumFamilyProfileFieldUpdateOperationsInput
      | $Enums.FamilyProfile;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GoalCreateManyClientInput = {
    id?: string;
    type: $Enums.GoalType;
    targetValue: number;
    targetDate: Date | string;
  };

  export type EventCreateManyClientInput = {
    id?: string;
    type: $Enums.EventType;
    value: number;
    frequency: $Enums.EventFrequency;
  };

  export type SimulationCreateManyClientInput = {
    id?: string;
    createdAt?: Date | string;
    dataJson: JsonNullValueInput | InputJsonValue;
  };

  export type InsuranceCreateManyClientInput = {
    id?: string;
    type: $Enums.InsuranceType;
    value: number;
  };

  export type GoalUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType;
    targetValue?: FloatFieldUpdateOperationsInput | number;
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GoalUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType;
    targetValue?: FloatFieldUpdateOperationsInput | number;
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GoalUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType;
    targetValue?: FloatFieldUpdateOperationsInput | number;
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    value?: FloatFieldUpdateOperationsInput | number;
    frequency?:
      | EnumEventFrequencyFieldUpdateOperationsInput
      | $Enums.EventFrequency;
  };

  export type EventUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    value?: FloatFieldUpdateOperationsInput | number;
    frequency?:
      | EnumEventFrequencyFieldUpdateOperationsInput
      | $Enums.EventFrequency;
  };

  export type EventUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    value?: FloatFieldUpdateOperationsInput | number;
    frequency?:
      | EnumEventFrequencyFieldUpdateOperationsInput
      | $Enums.EventFrequency;
  };

  export type SimulationUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    dataJson?: JsonNullValueInput | InputJsonValue;
  };

  export type SimulationUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    dataJson?: JsonNullValueInput | InputJsonValue;
  };

  export type SimulationUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    dataJson?: JsonNullValueInput | InputJsonValue;
  };

  export type InsuranceUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumInsuranceTypeFieldUpdateOperationsInput | $Enums.InsuranceType;
    value?: FloatFieldUpdateOperationsInput | number;
  };

  export type InsuranceUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumInsuranceTypeFieldUpdateOperationsInput | $Enums.InsuranceType;
    value?: FloatFieldUpdateOperationsInput | number;
  };

  export type InsuranceUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumInsuranceTypeFieldUpdateOperationsInput | $Enums.InsuranceType;
    value?: FloatFieldUpdateOperationsInput | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
