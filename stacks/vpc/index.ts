import { Construct } from 'constructs';
import { Stack, aws_ec2 as ec2 } from 'aws-cdk-lib';
import { Config } from '../../lib/config';

export class Vpc extends Stack {
  constructor(scope: Construct, id: string, props: Config) {
    super(scope, id, props);

    new ec2.Vpc(this, 'Vpc', {
      maxAzs: props.azCount,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });
  }
}
