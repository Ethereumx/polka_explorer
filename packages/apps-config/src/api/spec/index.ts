// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

import azakan from './azakan';

// NOTE: The mapping is done from specName in state.getRuntimeVersion
const spec: Record<string, OverrideBundleDefinition> = {
  azakan
};

export default spec;
