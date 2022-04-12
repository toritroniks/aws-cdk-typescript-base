#!/usr/bin/env node
import 'source-map-support/register';
import { App as CdkApp } from 'aws-cdk-lib';
import { EcsFargate } from '../stacks/ecs-fargate';
import configs, { EnvName } from '../lib/config';
import { Vpc } from '../stacks/vpc';

const app = new CdkApp();

function buildEnvStacks(env: EnvName) {
  new Vpc(app, `CdkVpc-${env}`, configs[env]);
  new EcsFargate(app, `CdkEcsFargate-${env}`, configs[env]);
}

buildEnvStacks('dev');
buildEnvStacks('prd');
