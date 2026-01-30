
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model anime
 * 
 */
export type anime = $Result.DefaultSelection<Prisma.$animePayload>
/**
 * Model episode
 * 
 */
export type episode = $Result.DefaultSelection<Prisma.$episodePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model watch_history
 * 
 */
export type watch_history = $Result.DefaultSelection<Prisma.$watch_historyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Anime
 * const anime = await prisma.anime.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Anime
   * const anime = await prisma.anime.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.anime`: Exposes CRUD operations for the **anime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anime
    * const anime = await prisma.anime.findMany()
    * ```
    */
  get anime(): Prisma.animeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.episodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watch_history`: Exposes CRUD operations for the **watch_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watch_histories
    * const watch_histories = await prisma.watch_history.findMany()
    * ```
    */
  get watch_history(): Prisma.watch_historyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    anime: 'anime',
    episode: 'episode',
    user: 'user',
    watch_history: 'watch_history'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "anime" | "episode" | "user" | "watch_history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      anime: {
        payload: Prisma.$animePayload<ExtArgs>
        fields: Prisma.animeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.animeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.animeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload>
          }
          findFirst: {
            args: Prisma.animeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.animeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload>
          }
          findMany: {
            args: Prisma.animeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload>[]
          }
          create: {
            args: Prisma.animeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload>
          }
          createMany: {
            args: Prisma.animeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.animeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload>[]
          }
          delete: {
            args: Prisma.animeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload>
          }
          update: {
            args: Prisma.animeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload>
          }
          deleteMany: {
            args: Prisma.animeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.animeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.animeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload>[]
          }
          upsert: {
            args: Prisma.animeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$animePayload>
          }
          aggregate: {
            args: Prisma.AnimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnime>
          }
          groupBy: {
            args: Prisma.animeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.animeCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeCountAggregateOutputType> | number
          }
        }
      }
      episode: {
        payload: Prisma.$episodePayload<ExtArgs>
        fields: Prisma.episodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.episodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.episodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          findFirst: {
            args: Prisma.episodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.episodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          findMany: {
            args: Prisma.episodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>[]
          }
          create: {
            args: Prisma.episodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          createMany: {
            args: Prisma.episodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.episodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>[]
          }
          delete: {
            args: Prisma.episodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          update: {
            args: Prisma.episodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          deleteMany: {
            args: Prisma.episodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.episodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.episodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>[]
          }
          upsert: {
            args: Prisma.episodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.episodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.episodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      watch_history: {
        payload: Prisma.$watch_historyPayload<ExtArgs>
        fields: Prisma.watch_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.watch_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.watch_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload>
          }
          findFirst: {
            args: Prisma.watch_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.watch_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload>
          }
          findMany: {
            args: Prisma.watch_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload>[]
          }
          create: {
            args: Prisma.watch_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload>
          }
          createMany: {
            args: Prisma.watch_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.watch_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload>[]
          }
          delete: {
            args: Prisma.watch_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload>
          }
          update: {
            args: Prisma.watch_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload>
          }
          deleteMany: {
            args: Prisma.watch_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.watch_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.watch_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload>[]
          }
          upsert: {
            args: Prisma.watch_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$watch_historyPayload>
          }
          aggregate: {
            args: Prisma.Watch_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatch_history>
          }
          groupBy: {
            args: Prisma.watch_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Watch_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.watch_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Watch_historyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    anime?: animeOmit
    episode?: episodeOmit
    user?: userOmit
    watch_history?: watch_historyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AnimeCountOutputType
   */

  export type AnimeCountOutputType = {
    episodes: number
  }

  export type AnimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | AnimeCountOutputTypeCountEpisodesArgs
  }

  // Custom InputTypes
  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeCountOutputType
     */
    select?: AnimeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: episodeWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    watchHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchHistory?: boolean | UserCountOutputTypeCountWatchHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: watch_historyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model anime
   */

  export type AggregateAnime = {
    _count: AnimeCountAggregateOutputType | null
    _avg: AnimeAvgAggregateOutputType | null
    _sum: AnimeSumAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  export type AnimeAvgAggregateOutputType = {
    rating: number | null
    releaseDate: number | null
  }

  export type AnimeSumAggregateOutputType = {
    rating: number | null
    releaseDate: number | null
  }

  export type AnimeMinAggregateOutputType = {
    id: string | null
    title: string | null
    synopsis: string | null
    coverImage: string | null
    bannerImage: string | null
    status: string | null
    rating: number | null
    releaseDate: number | null
  }

  export type AnimeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    synopsis: string | null
    coverImage: string | null
    bannerImage: string | null
    status: string | null
    rating: number | null
    releaseDate: number | null
  }

  export type AnimeCountAggregateOutputType = {
    id: number
    title: number
    synopsis: number
    coverImage: number
    bannerImage: number
    genre: number
    status: number
    rating: number
    releaseDate: number
    _all: number
  }


  export type AnimeAvgAggregateInputType = {
    rating?: true
    releaseDate?: true
  }

  export type AnimeSumAggregateInputType = {
    rating?: true
    releaseDate?: true
  }

  export type AnimeMinAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    coverImage?: true
    bannerImage?: true
    status?: true
    rating?: true
    releaseDate?: true
  }

  export type AnimeMaxAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    coverImage?: true
    bannerImage?: true
    status?: true
    rating?: true
    releaseDate?: true
  }

  export type AnimeCountAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    coverImage?: true
    bannerImage?: true
    genre?: true
    status?: true
    rating?: true
    releaseDate?: true
    _all?: true
  }

  export type AnimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which anime to aggregate.
     */
    where?: animeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anime to fetch.
     */
    orderBy?: animeOrderByWithRelationInput | animeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: animeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned anime
    **/
    _count?: true | AnimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeMaxAggregateInputType
  }

  export type GetAnimeAggregateType<T extends AnimeAggregateArgs> = {
        [P in keyof T & keyof AggregateAnime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnime[P]>
      : GetScalarType<T[P], AggregateAnime[P]>
  }




  export type animeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: animeWhereInput
    orderBy?: animeOrderByWithAggregationInput | animeOrderByWithAggregationInput[]
    by: AnimeScalarFieldEnum[] | AnimeScalarFieldEnum
    having?: animeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeCountAggregateInputType | true
    _avg?: AnimeAvgAggregateInputType
    _sum?: AnimeSumAggregateInputType
    _min?: AnimeMinAggregateInputType
    _max?: AnimeMaxAggregateInputType
  }

  export type AnimeGroupByOutputType = {
    id: string
    title: string
    synopsis: string | null
    coverImage: string | null
    bannerImage: string | null
    genre: string[]
    status: string
    rating: number
    releaseDate: number
    _count: AnimeCountAggregateOutputType | null
    _avg: AnimeAvgAggregateOutputType | null
    _sum: AnimeSumAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  type GetAnimeGroupByPayload<T extends animeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeGroupByOutputType[P]>
        }
      >
    >


  export type animeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    coverImage?: boolean
    bannerImage?: boolean
    genre?: boolean
    status?: boolean
    rating?: boolean
    releaseDate?: boolean
    episodes?: boolean | anime$episodesArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anime"]>

  export type animeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    coverImage?: boolean
    bannerImage?: boolean
    genre?: boolean
    status?: boolean
    rating?: boolean
    releaseDate?: boolean
  }, ExtArgs["result"]["anime"]>

  export type animeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    coverImage?: boolean
    bannerImage?: boolean
    genre?: boolean
    status?: boolean
    rating?: boolean
    releaseDate?: boolean
  }, ExtArgs["result"]["anime"]>

  export type animeSelectScalar = {
    id?: boolean
    title?: boolean
    synopsis?: boolean
    coverImage?: boolean
    bannerImage?: boolean
    genre?: boolean
    status?: boolean
    rating?: boolean
    releaseDate?: boolean
  }

  export type animeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "synopsis" | "coverImage" | "bannerImage" | "genre" | "status" | "rating" | "releaseDate", ExtArgs["result"]["anime"]>
  export type animeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | anime$episodesArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type animeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type animeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $animePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "anime"
    objects: {
      episodes: Prisma.$episodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      synopsis: string | null
      coverImage: string | null
      bannerImage: string | null
      genre: string[]
      status: string
      rating: number
      releaseDate: number
    }, ExtArgs["result"]["anime"]>
    composites: {}
  }

  type animeGetPayload<S extends boolean | null | undefined | animeDefaultArgs> = $Result.GetResult<Prisma.$animePayload, S>

  type animeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<animeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeCountAggregateInputType | true
    }

  export interface animeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['anime'], meta: { name: 'anime' } }
    /**
     * Find zero or one Anime that matches the filter.
     * @param {animeFindUniqueArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends animeFindUniqueArgs>(args: SelectSubset<T, animeFindUniqueArgs<ExtArgs>>): Prisma__animeClient<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {animeFindUniqueOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends animeFindUniqueOrThrowArgs>(args: SelectSubset<T, animeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__animeClient<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animeFindFirstArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends animeFindFirstArgs>(args?: SelectSubset<T, animeFindFirstArgs<ExtArgs>>): Prisma__animeClient<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animeFindFirstOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends animeFindFirstOrThrowArgs>(args?: SelectSubset<T, animeFindFirstOrThrowArgs<ExtArgs>>): Prisma__animeClient<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anime
     * const anime = await prisma.anime.findMany()
     * 
     * // Get first 10 Anime
     * const anime = await prisma.anime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeWithIdOnly = await prisma.anime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends animeFindManyArgs>(args?: SelectSubset<T, animeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anime.
     * @param {animeCreateArgs} args - Arguments to create a Anime.
     * @example
     * // Create one Anime
     * const Anime = await prisma.anime.create({
     *   data: {
     *     // ... data to create a Anime
     *   }
     * })
     * 
     */
    create<T extends animeCreateArgs>(args: SelectSubset<T, animeCreateArgs<ExtArgs>>): Prisma__animeClient<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anime.
     * @param {animeCreateManyArgs} args - Arguments to create many Anime.
     * @example
     * // Create many Anime
     * const anime = await prisma.anime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends animeCreateManyArgs>(args?: SelectSubset<T, animeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Anime and returns the data saved in the database.
     * @param {animeCreateManyAndReturnArgs} args - Arguments to create many Anime.
     * @example
     * // Create many Anime
     * const anime = await prisma.anime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Anime and only return the `id`
     * const animeWithIdOnly = await prisma.anime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends animeCreateManyAndReturnArgs>(args?: SelectSubset<T, animeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Anime.
     * @param {animeDeleteArgs} args - Arguments to delete one Anime.
     * @example
     * // Delete one Anime
     * const Anime = await prisma.anime.delete({
     *   where: {
     *     // ... filter to delete one Anime
     *   }
     * })
     * 
     */
    delete<T extends animeDeleteArgs>(args: SelectSubset<T, animeDeleteArgs<ExtArgs>>): Prisma__animeClient<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anime.
     * @param {animeUpdateArgs} args - Arguments to update one Anime.
     * @example
     * // Update one Anime
     * const anime = await prisma.anime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends animeUpdateArgs>(args: SelectSubset<T, animeUpdateArgs<ExtArgs>>): Prisma__animeClient<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anime.
     * @param {animeDeleteManyArgs} args - Arguments to filter Anime to delete.
     * @example
     * // Delete a few Anime
     * const { count } = await prisma.anime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends animeDeleteManyArgs>(args?: SelectSubset<T, animeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anime
     * const anime = await prisma.anime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends animeUpdateManyArgs>(args: SelectSubset<T, animeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime and returns the data updated in the database.
     * @param {animeUpdateManyAndReturnArgs} args - Arguments to update many Anime.
     * @example
     * // Update many Anime
     * const anime = await prisma.anime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Anime and only return the `id`
     * const animeWithIdOnly = await prisma.anime.updateManyAndReturn({
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
    updateManyAndReturn<T extends animeUpdateManyAndReturnArgs>(args: SelectSubset<T, animeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Anime.
     * @param {animeUpsertArgs} args - Arguments to update or create a Anime.
     * @example
     * // Update or create a Anime
     * const anime = await prisma.anime.upsert({
     *   create: {
     *     // ... data to create a Anime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anime we want to update
     *   }
     * })
     */
    upsert<T extends animeUpsertArgs>(args: SelectSubset<T, animeUpsertArgs<ExtArgs>>): Prisma__animeClient<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animeCountArgs} args - Arguments to filter Anime to count.
     * @example
     * // Count the number of Anime
     * const count = await prisma.anime.count({
     *   where: {
     *     // ... the filter for the Anime we want to count
     *   }
     * })
    **/
    count<T extends animeCountArgs>(
      args?: Subset<T, animeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeAggregateArgs>(args: Subset<T, AnimeAggregateArgs>): Prisma.PrismaPromise<GetAnimeAggregateType<T>>

    /**
     * Group by Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animeGroupByArgs} args - Group by arguments.
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
      T extends animeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: animeGroupByArgs['orderBy'] }
        : { orderBy?: animeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, animeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the anime model
   */
  readonly fields: animeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for anime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__animeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodes<T extends anime$episodesArgs<ExtArgs> = {}>(args?: Subset<T, anime$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the anime model
   */
  interface animeFieldRefs {
    readonly id: FieldRef<"anime", 'String'>
    readonly title: FieldRef<"anime", 'String'>
    readonly synopsis: FieldRef<"anime", 'String'>
    readonly coverImage: FieldRef<"anime", 'String'>
    readonly bannerImage: FieldRef<"anime", 'String'>
    readonly genre: FieldRef<"anime", 'String[]'>
    readonly status: FieldRef<"anime", 'String'>
    readonly rating: FieldRef<"anime", 'Float'>
    readonly releaseDate: FieldRef<"anime", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * anime findUnique
   */
  export type animeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: animeInclude<ExtArgs> | null
    /**
     * Filter, which anime to fetch.
     */
    where: animeWhereUniqueInput
  }

  /**
   * anime findUniqueOrThrow
   */
  export type animeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: animeInclude<ExtArgs> | null
    /**
     * Filter, which anime to fetch.
     */
    where: animeWhereUniqueInput
  }

  /**
   * anime findFirst
   */
  export type animeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: animeInclude<ExtArgs> | null
    /**
     * Filter, which anime to fetch.
     */
    where?: animeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anime to fetch.
     */
    orderBy?: animeOrderByWithRelationInput | animeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for anime.
     */
    cursor?: animeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * anime findFirstOrThrow
   */
  export type animeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: animeInclude<ExtArgs> | null
    /**
     * Filter, which anime to fetch.
     */
    where?: animeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anime to fetch.
     */
    orderBy?: animeOrderByWithRelationInput | animeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for anime.
     */
    cursor?: animeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * anime findMany
   */
  export type animeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: animeInclude<ExtArgs> | null
    /**
     * Filter, which anime to fetch.
     */
    where?: animeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anime to fetch.
     */
    orderBy?: animeOrderByWithRelationInput | animeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing anime.
     */
    cursor?: animeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anime.
     */
    skip?: number
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * anime create
   */
  export type animeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: animeInclude<ExtArgs> | null
    /**
     * The data needed to create a anime.
     */
    data: XOR<animeCreateInput, animeUncheckedCreateInput>
  }

  /**
   * anime createMany
   */
  export type animeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many anime.
     */
    data: animeCreateManyInput | animeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * anime createManyAndReturn
   */
  export type animeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * The data used to create many anime.
     */
    data: animeCreateManyInput | animeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * anime update
   */
  export type animeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: animeInclude<ExtArgs> | null
    /**
     * The data needed to update a anime.
     */
    data: XOR<animeUpdateInput, animeUncheckedUpdateInput>
    /**
     * Choose, which anime to update.
     */
    where: animeWhereUniqueInput
  }

  /**
   * anime updateMany
   */
  export type animeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update anime.
     */
    data: XOR<animeUpdateManyMutationInput, animeUncheckedUpdateManyInput>
    /**
     * Filter which anime to update
     */
    where?: animeWhereInput
    /**
     * Limit how many anime to update.
     */
    limit?: number
  }

  /**
   * anime updateManyAndReturn
   */
  export type animeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * The data used to update anime.
     */
    data: XOR<animeUpdateManyMutationInput, animeUncheckedUpdateManyInput>
    /**
     * Filter which anime to update
     */
    where?: animeWhereInput
    /**
     * Limit how many anime to update.
     */
    limit?: number
  }

  /**
   * anime upsert
   */
  export type animeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: animeInclude<ExtArgs> | null
    /**
     * The filter to search for the anime to update in case it exists.
     */
    where: animeWhereUniqueInput
    /**
     * In case the anime found by the `where` argument doesn't exist, create a new anime with this data.
     */
    create: XOR<animeCreateInput, animeUncheckedCreateInput>
    /**
     * In case the anime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<animeUpdateInput, animeUncheckedUpdateInput>
  }

  /**
   * anime delete
   */
  export type animeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: animeInclude<ExtArgs> | null
    /**
     * Filter which anime to delete.
     */
    where: animeWhereUniqueInput
  }

  /**
   * anime deleteMany
   */
  export type animeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which anime to delete
     */
    where?: animeWhereInput
    /**
     * Limit how many anime to delete.
     */
    limit?: number
  }

  /**
   * anime.episodes
   */
  export type anime$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    where?: episodeWhereInput
    orderBy?: episodeOrderByWithRelationInput | episodeOrderByWithRelationInput[]
    cursor?: episodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * anime without action
   */
  export type animeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anime
     */
    select?: animeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anime
     */
    omit?: animeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: animeInclude<ExtArgs> | null
  }


  /**
   * Model episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    episodeNum: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    episodeNum: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: string | null
    animeId: string | null
    title: string | null
    episodeNum: number | null
    duration: string | null
    videoUrl: string | null
    subtitleUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: string | null
    animeId: string | null
    title: string | null
    episodeNum: number | null
    duration: string | null
    videoUrl: string | null
    subtitleUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    animeId: number
    title: number
    episodeNum: number
    duration: number
    videoUrl: number
    subtitleUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    episodeNum?: true
  }

  export type EpisodeSumAggregateInputType = {
    episodeNum?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    animeId?: true
    title?: true
    episodeNum?: true
    duration?: true
    videoUrl?: true
    subtitleUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    animeId?: true
    title?: true
    episodeNum?: true
    duration?: true
    videoUrl?: true
    subtitleUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    animeId?: true
    title?: true
    episodeNum?: true
    duration?: true
    videoUrl?: true
    subtitleUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which episode to aggregate.
     */
    where?: episodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodeOrderByWithRelationInput | episodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: episodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type episodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: episodeWhereInput
    orderBy?: episodeOrderByWithAggregationInput | episodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: episodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: string
    animeId: string
    title: string
    episodeNum: number
    duration: string
    videoUrl: string
    subtitleUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends episodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type episodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeId?: boolean
    title?: boolean
    episodeNum?: boolean
    duration?: boolean
    videoUrl?: boolean
    subtitleUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anime?: boolean | animeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type episodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeId?: boolean
    title?: boolean
    episodeNum?: boolean
    duration?: boolean
    videoUrl?: boolean
    subtitleUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anime?: boolean | animeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type episodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeId?: boolean
    title?: boolean
    episodeNum?: boolean
    duration?: boolean
    videoUrl?: boolean
    subtitleUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anime?: boolean | animeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type episodeSelectScalar = {
    id?: boolean
    animeId?: boolean
    title?: boolean
    episodeNum?: boolean
    duration?: boolean
    videoUrl?: boolean
    subtitleUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type episodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animeId" | "title" | "episodeNum" | "duration" | "videoUrl" | "subtitleUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["episode"]>
  export type episodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | animeDefaultArgs<ExtArgs>
  }
  export type episodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | animeDefaultArgs<ExtArgs>
  }
  export type episodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | animeDefaultArgs<ExtArgs>
  }

  export type $episodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "episode"
    objects: {
      anime: Prisma.$animePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      animeId: string
      title: string
      episodeNum: number
      duration: string
      videoUrl: string
      subtitleUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type episodeGetPayload<S extends boolean | null | undefined | episodeDefaultArgs> = $Result.GetResult<Prisma.$episodePayload, S>

  type episodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<episodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface episodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['episode'], meta: { name: 'episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {episodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends episodeFindUniqueArgs>(args: SelectSubset<T, episodeFindUniqueArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {episodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends episodeFindUniqueOrThrowArgs>(args: SelectSubset<T, episodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends episodeFindFirstArgs>(args?: SelectSubset<T, episodeFindFirstArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends episodeFindFirstOrThrowArgs>(args?: SelectSubset<T, episodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends episodeFindManyArgs>(args?: SelectSubset<T, episodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {episodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends episodeCreateArgs>(args: SelectSubset<T, episodeCreateArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {episodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends episodeCreateManyArgs>(args?: SelectSubset<T, episodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {episodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends episodeCreateManyAndReturnArgs>(args?: SelectSubset<T, episodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Episode.
     * @param {episodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends episodeDeleteArgs>(args: SelectSubset<T, episodeDeleteArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {episodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends episodeUpdateArgs>(args: SelectSubset<T, episodeUpdateArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {episodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends episodeDeleteManyArgs>(args?: SelectSubset<T, episodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends episodeUpdateManyArgs>(args: SelectSubset<T, episodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes and returns the data updated in the database.
     * @param {episodeUpdateManyAndReturnArgs} args - Arguments to update many Episodes.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.updateManyAndReturn({
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
    updateManyAndReturn<T extends episodeUpdateManyAndReturnArgs>(args: SelectSubset<T, episodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Episode.
     * @param {episodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends episodeUpsertArgs>(args: SelectSubset<T, episodeUpsertArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends episodeCountArgs>(
      args?: Subset<T, episodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeGroupByArgs} args - Group by arguments.
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
      T extends episodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: episodeGroupByArgs['orderBy'] }
        : { orderBy?: episodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, episodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the episode model
   */
  readonly fields: episodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__episodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anime<T extends animeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, animeDefaultArgs<ExtArgs>>): Prisma__animeClient<$Result.GetResult<Prisma.$animePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the episode model
   */
  interface episodeFieldRefs {
    readonly id: FieldRef<"episode", 'String'>
    readonly animeId: FieldRef<"episode", 'String'>
    readonly title: FieldRef<"episode", 'String'>
    readonly episodeNum: FieldRef<"episode", 'Int'>
    readonly duration: FieldRef<"episode", 'String'>
    readonly videoUrl: FieldRef<"episode", 'String'>
    readonly subtitleUrl: FieldRef<"episode", 'String'>
    readonly createdAt: FieldRef<"episode", 'DateTime'>
    readonly updatedAt: FieldRef<"episode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * episode findUnique
   */
  export type episodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter, which episode to fetch.
     */
    where: episodeWhereUniqueInput
  }

  /**
   * episode findUniqueOrThrow
   */
  export type episodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter, which episode to fetch.
     */
    where: episodeWhereUniqueInput
  }

  /**
   * episode findFirst
   */
  export type episodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter, which episode to fetch.
     */
    where?: episodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodeOrderByWithRelationInput | episodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for episodes.
     */
    cursor?: episodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * episode findFirstOrThrow
   */
  export type episodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter, which episode to fetch.
     */
    where?: episodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodeOrderByWithRelationInput | episodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for episodes.
     */
    cursor?: episodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * episode findMany
   */
  export type episodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter, which episodes to fetch.
     */
    where?: episodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodeOrderByWithRelationInput | episodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing episodes.
     */
    cursor?: episodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * episode create
   */
  export type episodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * The data needed to create a episode.
     */
    data: XOR<episodeCreateInput, episodeUncheckedCreateInput>
  }

  /**
   * episode createMany
   */
  export type episodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many episodes.
     */
    data: episodeCreateManyInput | episodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * episode createManyAndReturn
   */
  export type episodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * The data used to create many episodes.
     */
    data: episodeCreateManyInput | episodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * episode update
   */
  export type episodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * The data needed to update a episode.
     */
    data: XOR<episodeUpdateInput, episodeUncheckedUpdateInput>
    /**
     * Choose, which episode to update.
     */
    where: episodeWhereUniqueInput
  }

  /**
   * episode updateMany
   */
  export type episodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update episodes.
     */
    data: XOR<episodeUpdateManyMutationInput, episodeUncheckedUpdateManyInput>
    /**
     * Filter which episodes to update
     */
    where?: episodeWhereInput
    /**
     * Limit how many episodes to update.
     */
    limit?: number
  }

  /**
   * episode updateManyAndReturn
   */
  export type episodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * The data used to update episodes.
     */
    data: XOR<episodeUpdateManyMutationInput, episodeUncheckedUpdateManyInput>
    /**
     * Filter which episodes to update
     */
    where?: episodeWhereInput
    /**
     * Limit how many episodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * episode upsert
   */
  export type episodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * The filter to search for the episode to update in case it exists.
     */
    where: episodeWhereUniqueInput
    /**
     * In case the episode found by the `where` argument doesn't exist, create a new episode with this data.
     */
    create: XOR<episodeCreateInput, episodeUncheckedCreateInput>
    /**
     * In case the episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<episodeUpdateInput, episodeUncheckedUpdateInput>
  }

  /**
   * episode delete
   */
  export type episodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter which episode to delete.
     */
    where: episodeWhereUniqueInput
  }

  /**
   * episode deleteMany
   */
  export type episodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which episodes to delete
     */
    where?: episodeWhereInput
    /**
     * Limit how many episodes to delete.
     */
    limit?: number
  }

  /**
   * episode without action
   */
  export type episodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episode
     */
    omit?: episodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    picture: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    picture: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    picture: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    picture?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    picture?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    picture?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string | null
    picture: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    picture?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    watchHistory?: boolean | user$watchHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    picture?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    picture?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    picture?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "picture" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchHistory?: boolean | user$watchHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      watchHistory: Prisma.$watch_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string | null
      picture: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watchHistory<T extends user$watchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, user$watchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly picture: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.watchHistory
   */
  export type user$watchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
    where?: watch_historyWhereInput
    orderBy?: watch_historyOrderByWithRelationInput | watch_historyOrderByWithRelationInput[]
    cursor?: watch_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Watch_historyScalarFieldEnum | Watch_historyScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model watch_history
   */

  export type AggregateWatch_history = {
    _count: Watch_historyCountAggregateOutputType | null
    _avg: Watch_historyAvgAggregateOutputType | null
    _sum: Watch_historySumAggregateOutputType | null
    _min: Watch_historyMinAggregateOutputType | null
    _max: Watch_historyMaxAggregateOutputType | null
  }

  export type Watch_historyAvgAggregateOutputType = {
    episode_number: number | null
    progress: number | null
    duration: number | null
  }

  export type Watch_historySumAggregateOutputType = {
    episode_number: number | null
    progress: number | null
    duration: number | null
  }

  export type Watch_historyMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    anime_id: string | null
    episode_id: string | null
    episode_number: number | null
    title: string | null
    image: string | null
    progress: number | null
    duration: number | null
    last_watched_at: Date | null
  }

  export type Watch_historyMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    anime_id: string | null
    episode_id: string | null
    episode_number: number | null
    title: string | null
    image: string | null
    progress: number | null
    duration: number | null
    last_watched_at: Date | null
  }

  export type Watch_historyCountAggregateOutputType = {
    id: number
    user_id: number
    anime_id: number
    episode_id: number
    episode_number: number
    title: number
    image: number
    progress: number
    duration: number
    last_watched_at: number
    _all: number
  }


  export type Watch_historyAvgAggregateInputType = {
    episode_number?: true
    progress?: true
    duration?: true
  }

  export type Watch_historySumAggregateInputType = {
    episode_number?: true
    progress?: true
    duration?: true
  }

  export type Watch_historyMinAggregateInputType = {
    id?: true
    user_id?: true
    anime_id?: true
    episode_id?: true
    episode_number?: true
    title?: true
    image?: true
    progress?: true
    duration?: true
    last_watched_at?: true
  }

  export type Watch_historyMaxAggregateInputType = {
    id?: true
    user_id?: true
    anime_id?: true
    episode_id?: true
    episode_number?: true
    title?: true
    image?: true
    progress?: true
    duration?: true
    last_watched_at?: true
  }

  export type Watch_historyCountAggregateInputType = {
    id?: true
    user_id?: true
    anime_id?: true
    episode_id?: true
    episode_number?: true
    title?: true
    image?: true
    progress?: true
    duration?: true
    last_watched_at?: true
    _all?: true
  }

  export type Watch_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which watch_history to aggregate.
     */
    where?: watch_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watch_histories to fetch.
     */
    orderBy?: watch_historyOrderByWithRelationInput | watch_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: watch_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watch_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watch_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned watch_histories
    **/
    _count?: true | Watch_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Watch_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Watch_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Watch_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Watch_historyMaxAggregateInputType
  }

  export type GetWatch_historyAggregateType<T extends Watch_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateWatch_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatch_history[P]>
      : GetScalarType<T[P], AggregateWatch_history[P]>
  }




  export type watch_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: watch_historyWhereInput
    orderBy?: watch_historyOrderByWithAggregationInput | watch_historyOrderByWithAggregationInput[]
    by: Watch_historyScalarFieldEnum[] | Watch_historyScalarFieldEnum
    having?: watch_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Watch_historyCountAggregateInputType | true
    _avg?: Watch_historyAvgAggregateInputType
    _sum?: Watch_historySumAggregateInputType
    _min?: Watch_historyMinAggregateInputType
    _max?: Watch_historyMaxAggregateInputType
  }

  export type Watch_historyGroupByOutputType = {
    id: string
    user_id: string
    anime_id: string
    episode_id: string
    episode_number: number
    title: string | null
    image: string | null
    progress: number
    duration: number
    last_watched_at: Date
    _count: Watch_historyCountAggregateOutputType | null
    _avg: Watch_historyAvgAggregateOutputType | null
    _sum: Watch_historySumAggregateOutputType | null
    _min: Watch_historyMinAggregateOutputType | null
    _max: Watch_historyMaxAggregateOutputType | null
  }

  type GetWatch_historyGroupByPayload<T extends watch_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Watch_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Watch_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Watch_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Watch_historyGroupByOutputType[P]>
        }
      >
    >


  export type watch_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    anime_id?: boolean
    episode_id?: boolean
    episode_number?: boolean
    title?: boolean
    image?: boolean
    progress?: boolean
    duration?: boolean
    last_watched_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watch_history"]>

  export type watch_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    anime_id?: boolean
    episode_id?: boolean
    episode_number?: boolean
    title?: boolean
    image?: boolean
    progress?: boolean
    duration?: boolean
    last_watched_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watch_history"]>

  export type watch_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    anime_id?: boolean
    episode_id?: boolean
    episode_number?: boolean
    title?: boolean
    image?: boolean
    progress?: boolean
    duration?: boolean
    last_watched_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watch_history"]>

  export type watch_historySelectScalar = {
    id?: boolean
    user_id?: boolean
    anime_id?: boolean
    episode_id?: boolean
    episode_number?: boolean
    title?: boolean
    image?: boolean
    progress?: boolean
    duration?: boolean
    last_watched_at?: boolean
  }

  export type watch_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "anime_id" | "episode_id" | "episode_number" | "title" | "image" | "progress" | "duration" | "last_watched_at", ExtArgs["result"]["watch_history"]>
  export type watch_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type watch_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type watch_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $watch_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "watch_history"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      anime_id: string
      episode_id: string
      episode_number: number
      title: string | null
      image: string | null
      progress: number
      duration: number
      last_watched_at: Date
    }, ExtArgs["result"]["watch_history"]>
    composites: {}
  }

  type watch_historyGetPayload<S extends boolean | null | undefined | watch_historyDefaultArgs> = $Result.GetResult<Prisma.$watch_historyPayload, S>

  type watch_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<watch_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Watch_historyCountAggregateInputType | true
    }

  export interface watch_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['watch_history'], meta: { name: 'watch_history' } }
    /**
     * Find zero or one Watch_history that matches the filter.
     * @param {watch_historyFindUniqueArgs} args - Arguments to find a Watch_history
     * @example
     * // Get one Watch_history
     * const watch_history = await prisma.watch_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends watch_historyFindUniqueArgs>(args: SelectSubset<T, watch_historyFindUniqueArgs<ExtArgs>>): Prisma__watch_historyClient<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watch_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {watch_historyFindUniqueOrThrowArgs} args - Arguments to find a Watch_history
     * @example
     * // Get one Watch_history
     * const watch_history = await prisma.watch_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends watch_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, watch_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__watch_historyClient<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watch_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watch_historyFindFirstArgs} args - Arguments to find a Watch_history
     * @example
     * // Get one Watch_history
     * const watch_history = await prisma.watch_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends watch_historyFindFirstArgs>(args?: SelectSubset<T, watch_historyFindFirstArgs<ExtArgs>>): Prisma__watch_historyClient<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watch_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watch_historyFindFirstOrThrowArgs} args - Arguments to find a Watch_history
     * @example
     * // Get one Watch_history
     * const watch_history = await prisma.watch_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends watch_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, watch_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__watch_historyClient<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watch_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watch_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watch_histories
     * const watch_histories = await prisma.watch_history.findMany()
     * 
     * // Get first 10 Watch_histories
     * const watch_histories = await prisma.watch_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watch_historyWithIdOnly = await prisma.watch_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends watch_historyFindManyArgs>(args?: SelectSubset<T, watch_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watch_history.
     * @param {watch_historyCreateArgs} args - Arguments to create a Watch_history.
     * @example
     * // Create one Watch_history
     * const Watch_history = await prisma.watch_history.create({
     *   data: {
     *     // ... data to create a Watch_history
     *   }
     * })
     * 
     */
    create<T extends watch_historyCreateArgs>(args: SelectSubset<T, watch_historyCreateArgs<ExtArgs>>): Prisma__watch_historyClient<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watch_histories.
     * @param {watch_historyCreateManyArgs} args - Arguments to create many Watch_histories.
     * @example
     * // Create many Watch_histories
     * const watch_history = await prisma.watch_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends watch_historyCreateManyArgs>(args?: SelectSubset<T, watch_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watch_histories and returns the data saved in the database.
     * @param {watch_historyCreateManyAndReturnArgs} args - Arguments to create many Watch_histories.
     * @example
     * // Create many Watch_histories
     * const watch_history = await prisma.watch_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watch_histories and only return the `id`
     * const watch_historyWithIdOnly = await prisma.watch_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends watch_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, watch_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watch_history.
     * @param {watch_historyDeleteArgs} args - Arguments to delete one Watch_history.
     * @example
     * // Delete one Watch_history
     * const Watch_history = await prisma.watch_history.delete({
     *   where: {
     *     // ... filter to delete one Watch_history
     *   }
     * })
     * 
     */
    delete<T extends watch_historyDeleteArgs>(args: SelectSubset<T, watch_historyDeleteArgs<ExtArgs>>): Prisma__watch_historyClient<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watch_history.
     * @param {watch_historyUpdateArgs} args - Arguments to update one Watch_history.
     * @example
     * // Update one Watch_history
     * const watch_history = await prisma.watch_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends watch_historyUpdateArgs>(args: SelectSubset<T, watch_historyUpdateArgs<ExtArgs>>): Prisma__watch_historyClient<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watch_histories.
     * @param {watch_historyDeleteManyArgs} args - Arguments to filter Watch_histories to delete.
     * @example
     * // Delete a few Watch_histories
     * const { count } = await prisma.watch_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends watch_historyDeleteManyArgs>(args?: SelectSubset<T, watch_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watch_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watch_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watch_histories
     * const watch_history = await prisma.watch_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends watch_historyUpdateManyArgs>(args: SelectSubset<T, watch_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watch_histories and returns the data updated in the database.
     * @param {watch_historyUpdateManyAndReturnArgs} args - Arguments to update many Watch_histories.
     * @example
     * // Update many Watch_histories
     * const watch_history = await prisma.watch_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watch_histories and only return the `id`
     * const watch_historyWithIdOnly = await prisma.watch_history.updateManyAndReturn({
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
    updateManyAndReturn<T extends watch_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, watch_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watch_history.
     * @param {watch_historyUpsertArgs} args - Arguments to update or create a Watch_history.
     * @example
     * // Update or create a Watch_history
     * const watch_history = await prisma.watch_history.upsert({
     *   create: {
     *     // ... data to create a Watch_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watch_history we want to update
     *   }
     * })
     */
    upsert<T extends watch_historyUpsertArgs>(args: SelectSubset<T, watch_historyUpsertArgs<ExtArgs>>): Prisma__watch_historyClient<$Result.GetResult<Prisma.$watch_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watch_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watch_historyCountArgs} args - Arguments to filter Watch_histories to count.
     * @example
     * // Count the number of Watch_histories
     * const count = await prisma.watch_history.count({
     *   where: {
     *     // ... the filter for the Watch_histories we want to count
     *   }
     * })
    **/
    count<T extends watch_historyCountArgs>(
      args?: Subset<T, watch_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Watch_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watch_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Watch_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Watch_historyAggregateArgs>(args: Subset<T, Watch_historyAggregateArgs>): Prisma.PrismaPromise<GetWatch_historyAggregateType<T>>

    /**
     * Group by Watch_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watch_historyGroupByArgs} args - Group by arguments.
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
      T extends watch_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: watch_historyGroupByArgs['orderBy'] }
        : { orderBy?: watch_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, watch_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatch_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the watch_history model
   */
  readonly fields: watch_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for watch_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__watch_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the watch_history model
   */
  interface watch_historyFieldRefs {
    readonly id: FieldRef<"watch_history", 'String'>
    readonly user_id: FieldRef<"watch_history", 'String'>
    readonly anime_id: FieldRef<"watch_history", 'String'>
    readonly episode_id: FieldRef<"watch_history", 'String'>
    readonly episode_number: FieldRef<"watch_history", 'Int'>
    readonly title: FieldRef<"watch_history", 'String'>
    readonly image: FieldRef<"watch_history", 'String'>
    readonly progress: FieldRef<"watch_history", 'Int'>
    readonly duration: FieldRef<"watch_history", 'Int'>
    readonly last_watched_at: FieldRef<"watch_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * watch_history findUnique
   */
  export type watch_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
    /**
     * Filter, which watch_history to fetch.
     */
    where: watch_historyWhereUniqueInput
  }

  /**
   * watch_history findUniqueOrThrow
   */
  export type watch_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
    /**
     * Filter, which watch_history to fetch.
     */
    where: watch_historyWhereUniqueInput
  }

  /**
   * watch_history findFirst
   */
  export type watch_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
    /**
     * Filter, which watch_history to fetch.
     */
    where?: watch_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watch_histories to fetch.
     */
    orderBy?: watch_historyOrderByWithRelationInput | watch_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for watch_histories.
     */
    cursor?: watch_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watch_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watch_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of watch_histories.
     */
    distinct?: Watch_historyScalarFieldEnum | Watch_historyScalarFieldEnum[]
  }

  /**
   * watch_history findFirstOrThrow
   */
  export type watch_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
    /**
     * Filter, which watch_history to fetch.
     */
    where?: watch_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watch_histories to fetch.
     */
    orderBy?: watch_historyOrderByWithRelationInput | watch_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for watch_histories.
     */
    cursor?: watch_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watch_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watch_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of watch_histories.
     */
    distinct?: Watch_historyScalarFieldEnum | Watch_historyScalarFieldEnum[]
  }

  /**
   * watch_history findMany
   */
  export type watch_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
    /**
     * Filter, which watch_histories to fetch.
     */
    where?: watch_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watch_histories to fetch.
     */
    orderBy?: watch_historyOrderByWithRelationInput | watch_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing watch_histories.
     */
    cursor?: watch_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watch_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watch_histories.
     */
    skip?: number
    distinct?: Watch_historyScalarFieldEnum | Watch_historyScalarFieldEnum[]
  }

  /**
   * watch_history create
   */
  export type watch_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a watch_history.
     */
    data: XOR<watch_historyCreateInput, watch_historyUncheckedCreateInput>
  }

  /**
   * watch_history createMany
   */
  export type watch_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many watch_histories.
     */
    data: watch_historyCreateManyInput | watch_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * watch_history createManyAndReturn
   */
  export type watch_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * The data used to create many watch_histories.
     */
    data: watch_historyCreateManyInput | watch_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * watch_history update
   */
  export type watch_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a watch_history.
     */
    data: XOR<watch_historyUpdateInput, watch_historyUncheckedUpdateInput>
    /**
     * Choose, which watch_history to update.
     */
    where: watch_historyWhereUniqueInput
  }

  /**
   * watch_history updateMany
   */
  export type watch_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update watch_histories.
     */
    data: XOR<watch_historyUpdateManyMutationInput, watch_historyUncheckedUpdateManyInput>
    /**
     * Filter which watch_histories to update
     */
    where?: watch_historyWhereInput
    /**
     * Limit how many watch_histories to update.
     */
    limit?: number
  }

  /**
   * watch_history updateManyAndReturn
   */
  export type watch_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * The data used to update watch_histories.
     */
    data: XOR<watch_historyUpdateManyMutationInput, watch_historyUncheckedUpdateManyInput>
    /**
     * Filter which watch_histories to update
     */
    where?: watch_historyWhereInput
    /**
     * Limit how many watch_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * watch_history upsert
   */
  export type watch_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the watch_history to update in case it exists.
     */
    where: watch_historyWhereUniqueInput
    /**
     * In case the watch_history found by the `where` argument doesn't exist, create a new watch_history with this data.
     */
    create: XOR<watch_historyCreateInput, watch_historyUncheckedCreateInput>
    /**
     * In case the watch_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<watch_historyUpdateInput, watch_historyUncheckedUpdateInput>
  }

  /**
   * watch_history delete
   */
  export type watch_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
    /**
     * Filter which watch_history to delete.
     */
    where: watch_historyWhereUniqueInput
  }

  /**
   * watch_history deleteMany
   */
  export type watch_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which watch_histories to delete
     */
    where?: watch_historyWhereInput
    /**
     * Limit how many watch_histories to delete.
     */
    limit?: number
  }

  /**
   * watch_history without action
   */
  export type watch_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watch_history
     */
    select?: watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the watch_history
     */
    omit?: watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watch_historyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnimeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    synopsis: 'synopsis',
    coverImage: 'coverImage',
    bannerImage: 'bannerImage',
    genre: 'genre',
    status: 'status',
    rating: 'rating',
    releaseDate: 'releaseDate'
  };

  export type AnimeScalarFieldEnum = (typeof AnimeScalarFieldEnum)[keyof typeof AnimeScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    animeId: 'animeId',
    title: 'title',
    episodeNum: 'episodeNum',
    duration: 'duration',
    videoUrl: 'videoUrl',
    subtitleUrl: 'subtitleUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    picture: 'picture',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Watch_historyScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    anime_id: 'anime_id',
    episode_id: 'episode_id',
    episode_number: 'episode_number',
    title: 'title',
    image: 'image',
    progress: 'progress',
    duration: 'duration',
    last_watched_at: 'last_watched_at'
  };

  export type Watch_historyScalarFieldEnum = (typeof Watch_historyScalarFieldEnum)[keyof typeof Watch_historyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type animeWhereInput = {
    AND?: animeWhereInput | animeWhereInput[]
    OR?: animeWhereInput[]
    NOT?: animeWhereInput | animeWhereInput[]
    id?: StringFilter<"anime"> | string
    title?: StringFilter<"anime"> | string
    synopsis?: StringNullableFilter<"anime"> | string | null
    coverImage?: StringNullableFilter<"anime"> | string | null
    bannerImage?: StringNullableFilter<"anime"> | string | null
    genre?: StringNullableListFilter<"anime">
    status?: StringFilter<"anime"> | string
    rating?: FloatFilter<"anime"> | number
    releaseDate?: IntFilter<"anime"> | number
    episodes?: EpisodeListRelationFilter
  }

  export type animeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    bannerImage?: SortOrderInput | SortOrder
    genre?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    releaseDate?: SortOrder
    episodes?: episodeOrderByRelationAggregateInput
  }

  export type animeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: animeWhereInput | animeWhereInput[]
    OR?: animeWhereInput[]
    NOT?: animeWhereInput | animeWhereInput[]
    title?: StringFilter<"anime"> | string
    synopsis?: StringNullableFilter<"anime"> | string | null
    coverImage?: StringNullableFilter<"anime"> | string | null
    bannerImage?: StringNullableFilter<"anime"> | string | null
    genre?: StringNullableListFilter<"anime">
    status?: StringFilter<"anime"> | string
    rating?: FloatFilter<"anime"> | number
    releaseDate?: IntFilter<"anime"> | number
    episodes?: EpisodeListRelationFilter
  }, "id">

  export type animeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    bannerImage?: SortOrderInput | SortOrder
    genre?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    releaseDate?: SortOrder
    _count?: animeCountOrderByAggregateInput
    _avg?: animeAvgOrderByAggregateInput
    _max?: animeMaxOrderByAggregateInput
    _min?: animeMinOrderByAggregateInput
    _sum?: animeSumOrderByAggregateInput
  }

  export type animeScalarWhereWithAggregatesInput = {
    AND?: animeScalarWhereWithAggregatesInput | animeScalarWhereWithAggregatesInput[]
    OR?: animeScalarWhereWithAggregatesInput[]
    NOT?: animeScalarWhereWithAggregatesInput | animeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"anime"> | string
    title?: StringWithAggregatesFilter<"anime"> | string
    synopsis?: StringNullableWithAggregatesFilter<"anime"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"anime"> | string | null
    bannerImage?: StringNullableWithAggregatesFilter<"anime"> | string | null
    genre?: StringNullableListFilter<"anime">
    status?: StringWithAggregatesFilter<"anime"> | string
    rating?: FloatWithAggregatesFilter<"anime"> | number
    releaseDate?: IntWithAggregatesFilter<"anime"> | number
  }

  export type episodeWhereInput = {
    AND?: episodeWhereInput | episodeWhereInput[]
    OR?: episodeWhereInput[]
    NOT?: episodeWhereInput | episodeWhereInput[]
    id?: StringFilter<"episode"> | string
    animeId?: StringFilter<"episode"> | string
    title?: StringFilter<"episode"> | string
    episodeNum?: IntFilter<"episode"> | number
    duration?: StringFilter<"episode"> | string
    videoUrl?: StringFilter<"episode"> | string
    subtitleUrl?: StringNullableFilter<"episode"> | string | null
    createdAt?: DateTimeFilter<"episode"> | Date | string
    updatedAt?: DateTimeFilter<"episode"> | Date | string
    anime?: XOR<AnimeScalarRelationFilter, animeWhereInput>
  }

  export type episodeOrderByWithRelationInput = {
    id?: SortOrder
    animeId?: SortOrder
    title?: SortOrder
    episodeNum?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    subtitleUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    anime?: animeOrderByWithRelationInput
  }

  export type episodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: episodeWhereInput | episodeWhereInput[]
    OR?: episodeWhereInput[]
    NOT?: episodeWhereInput | episodeWhereInput[]
    animeId?: StringFilter<"episode"> | string
    title?: StringFilter<"episode"> | string
    episodeNum?: IntFilter<"episode"> | number
    duration?: StringFilter<"episode"> | string
    videoUrl?: StringFilter<"episode"> | string
    subtitleUrl?: StringNullableFilter<"episode"> | string | null
    createdAt?: DateTimeFilter<"episode"> | Date | string
    updatedAt?: DateTimeFilter<"episode"> | Date | string
    anime?: XOR<AnimeScalarRelationFilter, animeWhereInput>
  }, "id">

  export type episodeOrderByWithAggregationInput = {
    id?: SortOrder
    animeId?: SortOrder
    title?: SortOrder
    episodeNum?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    subtitleUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: episodeCountOrderByAggregateInput
    _avg?: episodeAvgOrderByAggregateInput
    _max?: episodeMaxOrderByAggregateInput
    _min?: episodeMinOrderByAggregateInput
    _sum?: episodeSumOrderByAggregateInput
  }

  export type episodeScalarWhereWithAggregatesInput = {
    AND?: episodeScalarWhereWithAggregatesInput | episodeScalarWhereWithAggregatesInput[]
    OR?: episodeScalarWhereWithAggregatesInput[]
    NOT?: episodeScalarWhereWithAggregatesInput | episodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"episode"> | string
    animeId?: StringWithAggregatesFilter<"episode"> | string
    title?: StringWithAggregatesFilter<"episode"> | string
    episodeNum?: IntWithAggregatesFilter<"episode"> | number
    duration?: StringWithAggregatesFilter<"episode"> | string
    videoUrl?: StringWithAggregatesFilter<"episode"> | string
    subtitleUrl?: StringNullableWithAggregatesFilter<"episode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"episode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"episode"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: UuidFilter<"user"> | string
    email?: StringFilter<"user"> | string
    username?: StringNullableFilter<"user"> | string | null
    picture?: StringNullableFilter<"user"> | string | null
    role?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    watchHistory?: Watch_historyListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    watchHistory?: watch_historyOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringNullableFilter<"user"> | string | null
    picture?: StringNullableFilter<"user"> | string | null
    role?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    watchHistory?: Watch_historyListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    username?: StringNullableWithAggregatesFilter<"user"> | string | null
    picture?: StringNullableWithAggregatesFilter<"user"> | string | null
    role?: StringWithAggregatesFilter<"user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type watch_historyWhereInput = {
    AND?: watch_historyWhereInput | watch_historyWhereInput[]
    OR?: watch_historyWhereInput[]
    NOT?: watch_historyWhereInput | watch_historyWhereInput[]
    id?: UuidFilter<"watch_history"> | string
    user_id?: UuidFilter<"watch_history"> | string
    anime_id?: StringFilter<"watch_history"> | string
    episode_id?: StringFilter<"watch_history"> | string
    episode_number?: IntFilter<"watch_history"> | number
    title?: StringNullableFilter<"watch_history"> | string | null
    image?: StringNullableFilter<"watch_history"> | string | null
    progress?: IntFilter<"watch_history"> | number
    duration?: IntFilter<"watch_history"> | number
    last_watched_at?: DateTimeFilter<"watch_history"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type watch_historyOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    anime_id?: SortOrder
    episode_id?: SortOrder
    episode_number?: SortOrder
    title?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    progress?: SortOrder
    duration?: SortOrder
    last_watched_at?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type watch_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_anime_id_episode_id?: watch_historyUser_idAnime_idEpisode_idCompoundUniqueInput
    AND?: watch_historyWhereInput | watch_historyWhereInput[]
    OR?: watch_historyWhereInput[]
    NOT?: watch_historyWhereInput | watch_historyWhereInput[]
    user_id?: UuidFilter<"watch_history"> | string
    anime_id?: StringFilter<"watch_history"> | string
    episode_id?: StringFilter<"watch_history"> | string
    episode_number?: IntFilter<"watch_history"> | number
    title?: StringNullableFilter<"watch_history"> | string | null
    image?: StringNullableFilter<"watch_history"> | string | null
    progress?: IntFilter<"watch_history"> | number
    duration?: IntFilter<"watch_history"> | number
    last_watched_at?: DateTimeFilter<"watch_history"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "user_id_anime_id_episode_id">

  export type watch_historyOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    anime_id?: SortOrder
    episode_id?: SortOrder
    episode_number?: SortOrder
    title?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    progress?: SortOrder
    duration?: SortOrder
    last_watched_at?: SortOrder
    _count?: watch_historyCountOrderByAggregateInput
    _avg?: watch_historyAvgOrderByAggregateInput
    _max?: watch_historyMaxOrderByAggregateInput
    _min?: watch_historyMinOrderByAggregateInput
    _sum?: watch_historySumOrderByAggregateInput
  }

  export type watch_historyScalarWhereWithAggregatesInput = {
    AND?: watch_historyScalarWhereWithAggregatesInput | watch_historyScalarWhereWithAggregatesInput[]
    OR?: watch_historyScalarWhereWithAggregatesInput[]
    NOT?: watch_historyScalarWhereWithAggregatesInput | watch_historyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"watch_history"> | string
    user_id?: UuidWithAggregatesFilter<"watch_history"> | string
    anime_id?: StringWithAggregatesFilter<"watch_history"> | string
    episode_id?: StringWithAggregatesFilter<"watch_history"> | string
    episode_number?: IntWithAggregatesFilter<"watch_history"> | number
    title?: StringNullableWithAggregatesFilter<"watch_history"> | string | null
    image?: StringNullableWithAggregatesFilter<"watch_history"> | string | null
    progress?: IntWithAggregatesFilter<"watch_history"> | number
    duration?: IntWithAggregatesFilter<"watch_history"> | number
    last_watched_at?: DateTimeWithAggregatesFilter<"watch_history"> | Date | string
  }

  export type animeCreateInput = {
    id: string
    title: string
    synopsis?: string | null
    coverImage?: string | null
    bannerImage?: string | null
    genre?: animeCreategenreInput | string[]
    status?: string
    rating: number
    releaseDate: number
    episodes?: episodeCreateNestedManyWithoutAnimeInput
  }

  export type animeUncheckedCreateInput = {
    id: string
    title: string
    synopsis?: string | null
    coverImage?: string | null
    bannerImage?: string | null
    genre?: animeCreategenreInput | string[]
    status?: string
    rating: number
    releaseDate: number
    episodes?: episodeUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type animeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: animeUpdategenreInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: IntFieldUpdateOperationsInput | number
    episodes?: episodeUpdateManyWithoutAnimeNestedInput
  }

  export type animeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: animeUpdategenreInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: IntFieldUpdateOperationsInput | number
    episodes?: episodeUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type animeCreateManyInput = {
    id: string
    title: string
    synopsis?: string | null
    coverImage?: string | null
    bannerImage?: string | null
    genre?: animeCreategenreInput | string[]
    status?: string
    rating: number
    releaseDate: number
  }

  export type animeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: animeUpdategenreInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: IntFieldUpdateOperationsInput | number
  }

  export type animeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: animeUpdategenreInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: IntFieldUpdateOperationsInput | number
  }

  export type episodeCreateInput = {
    id: string
    title: string
    episodeNum: number
    duration: string
    videoUrl: string
    subtitleUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anime: animeCreateNestedOneWithoutEpisodesInput
  }

  export type episodeUncheckedCreateInput = {
    id: string
    animeId: string
    title: string
    episodeNum: number
    duration: string
    videoUrl: string
    subtitleUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type episodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNum?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    subtitleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anime?: animeUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type episodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNum?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    subtitleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type episodeCreateManyInput = {
    id: string
    animeId: string
    title: string
    episodeNum: number
    duration: string
    videoUrl: string
    subtitleUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type episodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNum?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    subtitleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type episodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNum?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    subtitleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    id: string
    email: string
    username?: string | null
    picture?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: watch_historyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: string
    email: string
    username?: string | null
    picture?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: watch_historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: watch_historyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: watch_historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: string
    email: string
    username?: string | null
    picture?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type watch_historyCreateInput = {
    id?: string
    anime_id: string
    episode_id: string
    episode_number: number
    title?: string | null
    image?: string | null
    progress?: number
    duration?: number
    last_watched_at?: Date | string
    user: userCreateNestedOneWithoutWatchHistoryInput
  }

  export type watch_historyUncheckedCreateInput = {
    id?: string
    user_id: string
    anime_id: string
    episode_id: string
    episode_number: number
    title?: string | null
    image?: string | null
    progress?: number
    duration?: number
    last_watched_at?: Date | string
  }

  export type watch_historyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anime_id?: StringFieldUpdateOperationsInput | string
    episode_id?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    last_watched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutWatchHistoryNestedInput
  }

  export type watch_historyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    anime_id?: StringFieldUpdateOperationsInput | string
    episode_id?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    last_watched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type watch_historyCreateManyInput = {
    id?: string
    user_id: string
    anime_id: string
    episode_id: string
    episode_number: number
    title?: string | null
    image?: string | null
    progress?: number
    duration?: number
    last_watched_at?: Date | string
  }

  export type watch_historyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    anime_id?: StringFieldUpdateOperationsInput | string
    episode_id?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    last_watched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type watch_historyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    anime_id?: StringFieldUpdateOperationsInput | string
    episode_id?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    last_watched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EpisodeListRelationFilter = {
    every?: episodeWhereInput
    some?: episodeWhereInput
    none?: episodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type episodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type animeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    coverImage?: SortOrder
    bannerImage?: SortOrder
    genre?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    releaseDate?: SortOrder
  }

  export type animeAvgOrderByAggregateInput = {
    rating?: SortOrder
    releaseDate?: SortOrder
  }

  export type animeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    coverImage?: SortOrder
    bannerImage?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    releaseDate?: SortOrder
  }

  export type animeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    coverImage?: SortOrder
    bannerImage?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    releaseDate?: SortOrder
  }

  export type animeSumOrderByAggregateInput = {
    rating?: SortOrder
    releaseDate?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AnimeScalarRelationFilter = {
    is?: animeWhereInput
    isNot?: animeWhereInput
  }

  export type episodeCountOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    title?: SortOrder
    episodeNum?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    subtitleUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type episodeAvgOrderByAggregateInput = {
    episodeNum?: SortOrder
  }

  export type episodeMaxOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    title?: SortOrder
    episodeNum?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    subtitleUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type episodeMinOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    title?: SortOrder
    episodeNum?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    subtitleUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type episodeSumOrderByAggregateInput = {
    episodeNum?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type Watch_historyListRelationFilter = {
    every?: watch_historyWhereInput
    some?: watch_historyWhereInput
    none?: watch_historyWhereInput
  }

  export type watch_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type watch_historyUser_idAnime_idEpisode_idCompoundUniqueInput = {
    user_id: string
    anime_id: string
    episode_id: string
  }

  export type watch_historyCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    anime_id?: SortOrder
    episode_id?: SortOrder
    episode_number?: SortOrder
    title?: SortOrder
    image?: SortOrder
    progress?: SortOrder
    duration?: SortOrder
    last_watched_at?: SortOrder
  }

  export type watch_historyAvgOrderByAggregateInput = {
    episode_number?: SortOrder
    progress?: SortOrder
    duration?: SortOrder
  }

  export type watch_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    anime_id?: SortOrder
    episode_id?: SortOrder
    episode_number?: SortOrder
    title?: SortOrder
    image?: SortOrder
    progress?: SortOrder
    duration?: SortOrder
    last_watched_at?: SortOrder
  }

  export type watch_historyMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    anime_id?: SortOrder
    episode_id?: SortOrder
    episode_number?: SortOrder
    title?: SortOrder
    image?: SortOrder
    progress?: SortOrder
    duration?: SortOrder
    last_watched_at?: SortOrder
  }

  export type watch_historySumOrderByAggregateInput = {
    episode_number?: SortOrder
    progress?: SortOrder
    duration?: SortOrder
  }

  export type animeCreategenreInput = {
    set: string[]
  }

  export type episodeCreateNestedManyWithoutAnimeInput = {
    create?: XOR<episodeCreateWithoutAnimeInput, episodeUncheckedCreateWithoutAnimeInput> | episodeCreateWithoutAnimeInput[] | episodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: episodeCreateOrConnectWithoutAnimeInput | episodeCreateOrConnectWithoutAnimeInput[]
    createMany?: episodeCreateManyAnimeInputEnvelope
    connect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
  }

  export type episodeUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<episodeCreateWithoutAnimeInput, episodeUncheckedCreateWithoutAnimeInput> | episodeCreateWithoutAnimeInput[] | episodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: episodeCreateOrConnectWithoutAnimeInput | episodeCreateOrConnectWithoutAnimeInput[]
    createMany?: episodeCreateManyAnimeInputEnvelope
    connect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type animeUpdategenreInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type episodeUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<episodeCreateWithoutAnimeInput, episodeUncheckedCreateWithoutAnimeInput> | episodeCreateWithoutAnimeInput[] | episodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: episodeCreateOrConnectWithoutAnimeInput | episodeCreateOrConnectWithoutAnimeInput[]
    upsert?: episodeUpsertWithWhereUniqueWithoutAnimeInput | episodeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: episodeCreateManyAnimeInputEnvelope
    set?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    disconnect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    delete?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    connect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    update?: episodeUpdateWithWhereUniqueWithoutAnimeInput | episodeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: episodeUpdateManyWithWhereWithoutAnimeInput | episodeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: episodeScalarWhereInput | episodeScalarWhereInput[]
  }

  export type episodeUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<episodeCreateWithoutAnimeInput, episodeUncheckedCreateWithoutAnimeInput> | episodeCreateWithoutAnimeInput[] | episodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: episodeCreateOrConnectWithoutAnimeInput | episodeCreateOrConnectWithoutAnimeInput[]
    upsert?: episodeUpsertWithWhereUniqueWithoutAnimeInput | episodeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: episodeCreateManyAnimeInputEnvelope
    set?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    disconnect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    delete?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    connect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    update?: episodeUpdateWithWhereUniqueWithoutAnimeInput | episodeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: episodeUpdateManyWithWhereWithoutAnimeInput | episodeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: episodeScalarWhereInput | episodeScalarWhereInput[]
  }

  export type animeCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<animeCreateWithoutEpisodesInput, animeUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: animeCreateOrConnectWithoutEpisodesInput
    connect?: animeWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type animeUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<animeCreateWithoutEpisodesInput, animeUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: animeCreateOrConnectWithoutEpisodesInput
    upsert?: animeUpsertWithoutEpisodesInput
    connect?: animeWhereUniqueInput
    update?: XOR<XOR<animeUpdateToOneWithWhereWithoutEpisodesInput, animeUpdateWithoutEpisodesInput>, animeUncheckedUpdateWithoutEpisodesInput>
  }

  export type watch_historyCreateNestedManyWithoutUserInput = {
    create?: XOR<watch_historyCreateWithoutUserInput, watch_historyUncheckedCreateWithoutUserInput> | watch_historyCreateWithoutUserInput[] | watch_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: watch_historyCreateOrConnectWithoutUserInput | watch_historyCreateOrConnectWithoutUserInput[]
    createMany?: watch_historyCreateManyUserInputEnvelope
    connect?: watch_historyWhereUniqueInput | watch_historyWhereUniqueInput[]
  }

  export type watch_historyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<watch_historyCreateWithoutUserInput, watch_historyUncheckedCreateWithoutUserInput> | watch_historyCreateWithoutUserInput[] | watch_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: watch_historyCreateOrConnectWithoutUserInput | watch_historyCreateOrConnectWithoutUserInput[]
    createMany?: watch_historyCreateManyUserInputEnvelope
    connect?: watch_historyWhereUniqueInput | watch_historyWhereUniqueInput[]
  }

  export type watch_historyUpdateManyWithoutUserNestedInput = {
    create?: XOR<watch_historyCreateWithoutUserInput, watch_historyUncheckedCreateWithoutUserInput> | watch_historyCreateWithoutUserInput[] | watch_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: watch_historyCreateOrConnectWithoutUserInput | watch_historyCreateOrConnectWithoutUserInput[]
    upsert?: watch_historyUpsertWithWhereUniqueWithoutUserInput | watch_historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: watch_historyCreateManyUserInputEnvelope
    set?: watch_historyWhereUniqueInput | watch_historyWhereUniqueInput[]
    disconnect?: watch_historyWhereUniqueInput | watch_historyWhereUniqueInput[]
    delete?: watch_historyWhereUniqueInput | watch_historyWhereUniqueInput[]
    connect?: watch_historyWhereUniqueInput | watch_historyWhereUniqueInput[]
    update?: watch_historyUpdateWithWhereUniqueWithoutUserInput | watch_historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: watch_historyUpdateManyWithWhereWithoutUserInput | watch_historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: watch_historyScalarWhereInput | watch_historyScalarWhereInput[]
  }

  export type watch_historyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<watch_historyCreateWithoutUserInput, watch_historyUncheckedCreateWithoutUserInput> | watch_historyCreateWithoutUserInput[] | watch_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: watch_historyCreateOrConnectWithoutUserInput | watch_historyCreateOrConnectWithoutUserInput[]
    upsert?: watch_historyUpsertWithWhereUniqueWithoutUserInput | watch_historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: watch_historyCreateManyUserInputEnvelope
    set?: watch_historyWhereUniqueInput | watch_historyWhereUniqueInput[]
    disconnect?: watch_historyWhereUniqueInput | watch_historyWhereUniqueInput[]
    delete?: watch_historyWhereUniqueInput | watch_historyWhereUniqueInput[]
    connect?: watch_historyWhereUniqueInput | watch_historyWhereUniqueInput[]
    update?: watch_historyUpdateWithWhereUniqueWithoutUserInput | watch_historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: watch_historyUpdateManyWithWhereWithoutUserInput | watch_historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: watch_historyScalarWhereInput | watch_historyScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutWatchHistoryInput = {
    create?: XOR<userCreateWithoutWatchHistoryInput, userUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: userCreateOrConnectWithoutWatchHistoryInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutWatchHistoryNestedInput = {
    create?: XOR<userCreateWithoutWatchHistoryInput, userUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: userCreateOrConnectWithoutWatchHistoryInput
    upsert?: userUpsertWithoutWatchHistoryInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutWatchHistoryInput, userUpdateWithoutWatchHistoryInput>, userUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type episodeCreateWithoutAnimeInput = {
    id: string
    title: string
    episodeNum: number
    duration: string
    videoUrl: string
    subtitleUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type episodeUncheckedCreateWithoutAnimeInput = {
    id: string
    title: string
    episodeNum: number
    duration: string
    videoUrl: string
    subtitleUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type episodeCreateOrConnectWithoutAnimeInput = {
    where: episodeWhereUniqueInput
    create: XOR<episodeCreateWithoutAnimeInput, episodeUncheckedCreateWithoutAnimeInput>
  }

  export type episodeCreateManyAnimeInputEnvelope = {
    data: episodeCreateManyAnimeInput | episodeCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type episodeUpsertWithWhereUniqueWithoutAnimeInput = {
    where: episodeWhereUniqueInput
    update: XOR<episodeUpdateWithoutAnimeInput, episodeUncheckedUpdateWithoutAnimeInput>
    create: XOR<episodeCreateWithoutAnimeInput, episodeUncheckedCreateWithoutAnimeInput>
  }

  export type episodeUpdateWithWhereUniqueWithoutAnimeInput = {
    where: episodeWhereUniqueInput
    data: XOR<episodeUpdateWithoutAnimeInput, episodeUncheckedUpdateWithoutAnimeInput>
  }

  export type episodeUpdateManyWithWhereWithoutAnimeInput = {
    where: episodeScalarWhereInput
    data: XOR<episodeUpdateManyMutationInput, episodeUncheckedUpdateManyWithoutAnimeInput>
  }

  export type episodeScalarWhereInput = {
    AND?: episodeScalarWhereInput | episodeScalarWhereInput[]
    OR?: episodeScalarWhereInput[]
    NOT?: episodeScalarWhereInput | episodeScalarWhereInput[]
    id?: StringFilter<"episode"> | string
    animeId?: StringFilter<"episode"> | string
    title?: StringFilter<"episode"> | string
    episodeNum?: IntFilter<"episode"> | number
    duration?: StringFilter<"episode"> | string
    videoUrl?: StringFilter<"episode"> | string
    subtitleUrl?: StringNullableFilter<"episode"> | string | null
    createdAt?: DateTimeFilter<"episode"> | Date | string
    updatedAt?: DateTimeFilter<"episode"> | Date | string
  }

  export type animeCreateWithoutEpisodesInput = {
    id: string
    title: string
    synopsis?: string | null
    coverImage?: string | null
    bannerImage?: string | null
    genre?: animeCreategenreInput | string[]
    status?: string
    rating: number
    releaseDate: number
  }

  export type animeUncheckedCreateWithoutEpisodesInput = {
    id: string
    title: string
    synopsis?: string | null
    coverImage?: string | null
    bannerImage?: string | null
    genre?: animeCreategenreInput | string[]
    status?: string
    rating: number
    releaseDate: number
  }

  export type animeCreateOrConnectWithoutEpisodesInput = {
    where: animeWhereUniqueInput
    create: XOR<animeCreateWithoutEpisodesInput, animeUncheckedCreateWithoutEpisodesInput>
  }

  export type animeUpsertWithoutEpisodesInput = {
    update: XOR<animeUpdateWithoutEpisodesInput, animeUncheckedUpdateWithoutEpisodesInput>
    create: XOR<animeCreateWithoutEpisodesInput, animeUncheckedCreateWithoutEpisodesInput>
    where?: animeWhereInput
  }

  export type animeUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: animeWhereInput
    data: XOR<animeUpdateWithoutEpisodesInput, animeUncheckedUpdateWithoutEpisodesInput>
  }

  export type animeUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: animeUpdategenreInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: IntFieldUpdateOperationsInput | number
  }

  export type animeUncheckedUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: animeUpdategenreInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: IntFieldUpdateOperationsInput | number
  }

  export type watch_historyCreateWithoutUserInput = {
    id?: string
    anime_id: string
    episode_id: string
    episode_number: number
    title?: string | null
    image?: string | null
    progress?: number
    duration?: number
    last_watched_at?: Date | string
  }

  export type watch_historyUncheckedCreateWithoutUserInput = {
    id?: string
    anime_id: string
    episode_id: string
    episode_number: number
    title?: string | null
    image?: string | null
    progress?: number
    duration?: number
    last_watched_at?: Date | string
  }

  export type watch_historyCreateOrConnectWithoutUserInput = {
    where: watch_historyWhereUniqueInput
    create: XOR<watch_historyCreateWithoutUserInput, watch_historyUncheckedCreateWithoutUserInput>
  }

  export type watch_historyCreateManyUserInputEnvelope = {
    data: watch_historyCreateManyUserInput | watch_historyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type watch_historyUpsertWithWhereUniqueWithoutUserInput = {
    where: watch_historyWhereUniqueInput
    update: XOR<watch_historyUpdateWithoutUserInput, watch_historyUncheckedUpdateWithoutUserInput>
    create: XOR<watch_historyCreateWithoutUserInput, watch_historyUncheckedCreateWithoutUserInput>
  }

  export type watch_historyUpdateWithWhereUniqueWithoutUserInput = {
    where: watch_historyWhereUniqueInput
    data: XOR<watch_historyUpdateWithoutUserInput, watch_historyUncheckedUpdateWithoutUserInput>
  }

  export type watch_historyUpdateManyWithWhereWithoutUserInput = {
    where: watch_historyScalarWhereInput
    data: XOR<watch_historyUpdateManyMutationInput, watch_historyUncheckedUpdateManyWithoutUserInput>
  }

  export type watch_historyScalarWhereInput = {
    AND?: watch_historyScalarWhereInput | watch_historyScalarWhereInput[]
    OR?: watch_historyScalarWhereInput[]
    NOT?: watch_historyScalarWhereInput | watch_historyScalarWhereInput[]
    id?: UuidFilter<"watch_history"> | string
    user_id?: UuidFilter<"watch_history"> | string
    anime_id?: StringFilter<"watch_history"> | string
    episode_id?: StringFilter<"watch_history"> | string
    episode_number?: IntFilter<"watch_history"> | number
    title?: StringNullableFilter<"watch_history"> | string | null
    image?: StringNullableFilter<"watch_history"> | string | null
    progress?: IntFilter<"watch_history"> | number
    duration?: IntFilter<"watch_history"> | number
    last_watched_at?: DateTimeFilter<"watch_history"> | Date | string
  }

  export type userCreateWithoutWatchHistoryInput = {
    id: string
    email: string
    username?: string | null
    picture?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUncheckedCreateWithoutWatchHistoryInput = {
    id: string
    email: string
    username?: string | null
    picture?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userCreateOrConnectWithoutWatchHistoryInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutWatchHistoryInput, userUncheckedCreateWithoutWatchHistoryInput>
  }

  export type userUpsertWithoutWatchHistoryInput = {
    update: XOR<userUpdateWithoutWatchHistoryInput, userUncheckedUpdateWithoutWatchHistoryInput>
    create: XOR<userCreateWithoutWatchHistoryInput, userUncheckedCreateWithoutWatchHistoryInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutWatchHistoryInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutWatchHistoryInput, userUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type userUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type episodeCreateManyAnimeInput = {
    id: string
    title: string
    episodeNum: number
    duration: string
    videoUrl: string
    subtitleUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type episodeUpdateWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNum?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    subtitleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type episodeUncheckedUpdateWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNum?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    subtitleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type episodeUncheckedUpdateManyWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNum?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    subtitleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type watch_historyCreateManyUserInput = {
    id?: string
    anime_id: string
    episode_id: string
    episode_number: number
    title?: string | null
    image?: string | null
    progress?: number
    duration?: number
    last_watched_at?: Date | string
  }

  export type watch_historyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    anime_id?: StringFieldUpdateOperationsInput | string
    episode_id?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    last_watched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type watch_historyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    anime_id?: StringFieldUpdateOperationsInput | string
    episode_id?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    last_watched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type watch_historyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    anime_id?: StringFieldUpdateOperationsInput | string
    episode_id?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    last_watched_at?: DateTimeFieldUpdateOperationsInput | Date | string
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