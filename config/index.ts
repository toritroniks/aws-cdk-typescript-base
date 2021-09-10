import * as cdk from '@aws-cdk/core';
import configDev from './config_dev';
import configPrd from './config_prd';

export interface Config extends cdk.StackProps {
  readonly env: cdk.Environment;
  readonly envName: EnvName;
  readonly azCount: number;
}

export type EnvName = 'dev' | 'prd';

const configs: { [k in EnvName]: Config } = {
  dev: configDev,
  prd: configPrd,
};

export default configs;
