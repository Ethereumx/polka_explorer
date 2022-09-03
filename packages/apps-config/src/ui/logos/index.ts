// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint sort-keys: ["error", "asc", { caseSensitive: false }] */

// The mapping here is done on the actual chain name (system.chain RPC) or
// the actual RPC node it is corrected to (system.name RPC)

// anything for a specific chain, most would probably fit into the node category (but allow for chain-specific)
// alphabetical
import { sanitize } from '../util';
import chainAcala from './chains/acala.svg';
import chainTuring from './chains/turing.png';
import extensionPolkadotJs from './extensions/polkadot-js.svg';
import externalCommonwealth from './external/commonwealth.png';
import externalDotreasury from './external/dotreasury.svg';
import externalDotScanner from './external/dotscanner.png';
import externalKodaDot from './external/kodadot.png';
import externalPolkaholic from './external/polkaholic.png';
import externalPolkascan from './external/polkascan.png';
import externalPolkassembly from './external/polkassembly.png';
import externalPolkastats from './external/polkastats.png';
import externalSingular from './external/singular.svg';
import externalStatescan from './external/statescan.svg';
import externalSubId from './external/subid.svg';
import externalSubscan from './external/subscan.svg';
import externalSubsquare from './external/subsquare.svg';
import nodeAjuna from './nodes/ajuna.png';
import nodeAzakan from './nodes/ajuna.png';
import nodeShell from './nodes/shell.svg';
import nodeSherpax from './nodes/sherpax.png';
import nodeSingLavender from './nodes/singlavender.svg';
import nodeSnow from './nodes/snow.png';
import nodeSoonsocial from './nodes/soonsocial.png';
import nodeSoonsocialX from './nodes/soonsocialX.png';
import nodeSora from './nodes/sora-substrate.svg';
import nodeStafi from './nodes/stafi.png';
import nodeStatemine from './nodes/statemine.svg';
import nodeSubDAO from './nodes/subdao.png';
import nodeSubGame from './nodes/subgame.svg';
import nodeSubsocial from './nodes/subsocial.svg';
import nodeSubsocialX from './nodes/subsocialX.svg';
import nodeSubspace from './nodes/subspace.png';
import nodeSubstrateContractsNode from './nodes/substrate-contracts-node.png';
import nodeSubstrate from './nodes/substrate-hexagon.svg';
import nodeSwapdex from './nodes/swapdex.svg';
import nodeTernoa from './nodes/ternoa.svg';
import nodeTrustBase from './nodes/trustbase.png';
import nodeUniarts from './nodes/uniarts.png';
import nodeUnique from './nodes/unique.svg';
import nodeUnitv from './nodes/unitv.png';
import nodeVln from './nodes/valiu.png';
import nodeWeb3games from './nodes/web3games.svg';
import nodeWestend from './nodes/westend_colour.svg';
import nodeWestlake from './nodes/westlake.png';
import nodeWhala from './nodes/whala.svg';
import nodeZCloak from './nodes/zCloak.svg';
import nodeZeitgeist from './nodes/zeitgeist.png';
import nodeZenlink from './nodes/zenlink.svg';
import nodeZero from './nodes/zero.svg';
import emptyLogo from './empty.svg';
// last-resort fallback, just something empty

// Alphabetical overrides based on the actual matched chain name
// NOTE: This is as retrieved via system.chain RPC
export const chainLogos = Object.entries({
  'Ajuna Testnet': nodeAjuna,
  'Azakan Testnet': nodeAzakan
}).reduce<Record<string, unknown>>((logos, [chain, logo]) => ({
  ...logos,
  [sanitize(chain)]: logo
}), {});

// Alphabetical overrides based on the actual software node type
// NOTE: This is as retrieved via system.name RPC
export const nodeLogos = Object.entries({
  'Azakan Testnet': nodeAzakan,
  'Ajuna Node': nodeAjuna
}).reduce<Record<string, unknown>>((logos, [node, logo]) => ({
  ...logos,
  [sanitize(node)]: logo
}), {});

// Alphabetical overrides based on the actual specName
export const specLogos = Object.entries({
  shell: nodeShell,
  statemine: nodeStatemine,
  statemint: nodeStatemine,
  turing: chainTuring,
  westmint: nodeStatemine
}).reduce<Record<string, unknown>>((logos, [spec, logo]) => ({
  ...logos,
  [sanitize(spec)]: logo
}), {});

// Alphabetical overrides when we pass an explicit logo name
// NOTE: Matches with what is defined as "info" in settings/endpoints.ts
// (Generally would be the 'network' key in the known ss58 as per
// https://github.com/polkadot-js/common/blob/master/packages/networks/src/index.ts)
export const namedLogos: Record<string, unknown> = {

  ajuna: nodeAjuna,
  azakan: nodeAzakan,
};

// extension logos
export const extensionLogos: Record<string, unknown> = {
  'polkadot-js': extensionPolkadotJs
};

// external logos, i.e. for explorers
export const externalLogos: Record<string, unknown> = {
  commonwealth: externalCommonwealth,
  dotreasury: externalDotreasury,
  dotscanner: externalDotScanner,
  kodadot: externalKodaDot,
  polkaholic: externalPolkaholic,
  polkascan: externalPolkascan,
  polkassembly: externalPolkassembly,
  polkastats: externalPolkastats,
  singular: externalSingular,
  statescan: externalStatescan,
  subid: externalSubId,
  subscan: externalSubscan,
  subsquare: externalSubsquare
};

// empty logos
export const emptyLogos: Record<string, unknown> = {
  empty: emptyLogo
};

// preload all
[chainLogos, extensionLogos, externalLogos, namedLogos, nodeLogos, emptyLogos].forEach((imageSet): void => {
  Object.values(imageSet).forEach((src): void => {
    new Image().src = src as string;
  });
});
