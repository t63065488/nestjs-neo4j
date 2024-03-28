import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { gqlProviderFactory } from './gqlProviderFactory';

@Module({
    imports: [GraphQLModule.forRootAsync<ApolloDriverConfig>({
        driver: ApolloDriver,
        useFactory: gqlProviderFactory
    })]
})
export class GqlModule {}
