#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EcsFargate } from '../lib/ecs-fargate';
import configs, { EnvName } from '../config';
import { Vpc } from '../lib/vpc';

const app = new cdk.App();

function buildEnvStacks(env: EnvName) {
  new Vpc(app, `CdkVpc-${env}`, configs[env]);
  new EcsFargate(app, `CdkEcsFargate-${env}`, configs[env]);
}

buildEnvStacks('dev');
buildEnvStacks('prd');
