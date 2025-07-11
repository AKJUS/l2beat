Generated with discovered.json: 0xc0e423abae7aa28513a503385cfa32b37e86013a

# Diff at Fri, 30 May 2025 07:18:15 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a4d8c436027d17df0f9b76843cd6deb1888fa381 block: 16289384
- current block number: 17837889

## Description

config: change comment about eip1559 fee val

## Watched changes

```diff
    contract GasPriceOracle (0x420000000000000000000000000000000000000F) {
    +++ description: Provides the current gas price for L2 transactions.
      values.$pastUpgrades.0:
+        ["2025-05-09T16:00:01.000Z","0xb6560306ccb0e772b132a8a6dd78244c0d7ac270c80baba40f95006184926c30",["0x93e57A196454CB919193fa9946f14943cf733845"]]
      values.$upgradeCount:
-        0
+        1
    }
```

```diff
    contract SequencerFeeVault (0x4200000000000000000000000000000000000011) {
    +++ description: Collects the sequencer fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
-        ["2024-12-05T19:19:37.000Z","0x535fc15c66b384bf5f53847b4f1d5666a8a3a24f9e43f66854b1643b641312a8",["0x95Fc06E1F6330F2829f0622d6158F5b1E21597B0"]]
      values.$upgradeCount:
-        1
+        0
    }
```

```diff
    contract L1Block (0x4200000000000000000000000000000000000015) {
    +++ description: Simple contract that returns information about the latest L1 block, which is derived permissionlessly from the L1 chain.
      values.$pastUpgrades.0:
+        ["2025-05-09T16:00:01.000Z","0xe992e00998b34075506d2726a274db07a62af6cdd9d527bfda9128114603cfbd",["0xFf256497D61dcd71a9e9Ff43967C13fdE1F72D12"]]
      values.$upgradeCount:
-        0
+        1
    }
```

```diff
    contract BaseFeeVault (0x4200000000000000000000000000000000000019) {
    +++ description: Collects EIP-1559 base fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
-        ["2024-12-05T19:19:37.000Z","0xb16f95118e9269c5d7e0ee3a58e4cf22cb5a7e74c2ae7446b4419fd6855aa761",["0xeb82050BB91e4879E256E0cF9a7C4bD58916aa6e"]]
      values.$upgradeCount:
-        1
+        0
    }
```

```diff
    contract L1FeeVault (0x420000000000000000000000000000000000001A) {
    +++ description: Collects the L1 portion of the L2 transaction fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
-        ["2024-12-05T19:19:37.000Z","0x66332072346a29a118b78491d791cb2abb2cea8f16e343b492e25f1ba9785406",["0xc1fB143b9dF08eB0612ABCA237Dfe3726da2ED15"]]
      values.$upgradeCount:
-        1
+        0
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 16289384 (main branch discovery), not current.

```diff
    contract GasPriceOracle (0x420000000000000000000000000000000000000F) {
    +++ description: Provides the current gas price for L2 transactions.
      values.$pastUpgrades.0:
-        ["2025-05-09T16:00:01.000Z","0xb6560306ccb0e772b132a8a6dd78244c0d7ac270c80baba40f95006184926c30",["0x93e57A196454CB919193fa9946f14943cf733845"]]
      values.$upgradeCount:
-        1
+        0
    }
```

```diff
    contract SequencerFeeVault (0x4200000000000000000000000000000000000011) {
    +++ description: Collects the sequencer fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
+        ["2024-12-05T19:19:37.000Z","0x535fc15c66b384bf5f53847b4f1d5666a8a3a24f9e43f66854b1643b641312a8",["0x95Fc06E1F6330F2829f0622d6158F5b1E21597B0"]]
      values.$upgradeCount:
-        0
+        1
    }
```

```diff
    contract L1Block (0x4200000000000000000000000000000000000015) {
    +++ description: Simple contract that returns information about the latest L1 block, which is derived permissionlessly from the L1 chain.
      values.$pastUpgrades.0:
-        ["2025-05-09T16:00:01.000Z","0xe992e00998b34075506d2726a274db07a62af6cdd9d527bfda9128114603cfbd",["0xFf256497D61dcd71a9e9Ff43967C13fdE1F72D12"]]
      values.$upgradeCount:
-        1
+        0
    }
```

```diff
    contract BaseFeeVault (0x4200000000000000000000000000000000000019) {
    +++ description: Collects EIP-1559 base fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
+        ["2024-12-05T19:19:37.000Z","0xb16f95118e9269c5d7e0ee3a58e4cf22cb5a7e74c2ae7446b4419fd6855aa761",["0xeb82050BB91e4879E256E0cF9a7C4bD58916aa6e"]]
      values.$upgradeCount:
-        0
+        1
    }
```

```diff
    contract L1FeeVault (0x420000000000000000000000000000000000001A) {
    +++ description: Collects the L1 portion of the L2 transaction fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
+        ["2024-12-05T19:19:37.000Z","0x66332072346a29a118b78491d791cb2abb2cea8f16e343b492e25f1ba9785406",["0xc1fB143b9dF08eB0612ABCA237Dfe3726da2ED15"]]
      values.$upgradeCount:
-        0
+        1
    }
```

Generated with discovered.json: 0x0293b545f08bf12152becfccf542b70ac8a0be31

# Diff at Wed, 28 May 2025 11:34:45 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@13b95854804f5ec749939a5230d24dfeedf19d1e block: 16289384
- current block number: 16289384

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 16289384 (main branch discovery), not current.

```diff
    contract GasPriceOracle (0x420000000000000000000000000000000000000F) {
    +++ description: Provides the current gas price for L2 transactions.
      values.$pastUpgrades.0:
+        ["2025-05-09T16:00:01.000Z","0xb6560306ccb0e772b132a8a6dd78244c0d7ac270c80baba40f95006184926c30",["0x93e57A196454CB919193fa9946f14943cf733845"]]
      values.$upgradeCount:
-        0
+        1
    }
```

```diff
    contract SequencerFeeVault (0x4200000000000000000000000000000000000011) {
    +++ description: Collects the sequencer fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
-        ["2024-12-05T19:19:37.000Z","0x535fc15c66b384bf5f53847b4f1d5666a8a3a24f9e43f66854b1643b641312a8",["0x95Fc06E1F6330F2829f0622d6158F5b1E21597B0"]]
      values.$upgradeCount:
-        1
+        0
    }
```

```diff
    contract L1Block (0x4200000000000000000000000000000000000015) {
    +++ description: Simple contract that returns information about the latest L1 block, which is derived permissionlessly from the L1 chain.
      values.$pastUpgrades.0:
+        ["2025-05-09T16:00:01.000Z","0xe992e00998b34075506d2726a274db07a62af6cdd9d527bfda9128114603cfbd",["0xFf256497D61dcd71a9e9Ff43967C13fdE1F72D12"]]
      values.$upgradeCount:
-        0
+        1
    }
```

```diff
    contract BaseFeeVault (0x4200000000000000000000000000000000000019) {
    +++ description: Collects EIP-1559 base fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
-        ["2024-12-05T19:19:37.000Z","0xb16f95118e9269c5d7e0ee3a58e4cf22cb5a7e74c2ae7446b4419fd6855aa761",["0xeb82050BB91e4879E256E0cF9a7C4bD58916aa6e"]]
      values.$upgradeCount:
-        1
+        0
    }
```

```diff
    contract L1FeeVault (0x420000000000000000000000000000000000001A) {
    +++ description: Collects the L1 portion of the L2 transaction fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
-        ["2024-12-05T19:19:37.000Z","0x66332072346a29a118b78491d791cb2abb2cea8f16e343b492e25f1ba9785406",["0xc1fB143b9dF08eB0612ABCA237Dfe3726da2ED15"]]
      values.$upgradeCount:
-        1
+        0
    }
```

Generated with discovered.json: 0x237a55ab7f651093f954df2549dff2cca011bbc6

# Diff at Fri, 23 May 2025 09:41:20 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 16289384
- current block number: 16289384

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 16289384 (main branch discovery), not current.

```diff
    contract L2ProxyAdmin (0x4200000000000000000000000000000000000018) {
    +++ description: Administration contract for other contract proxies.
      directlyReceivedPermissions.15.role:
+        "admin"
      directlyReceivedPermissions.14.role:
+        "admin"
      directlyReceivedPermissions.13.role:
+        "admin"
      directlyReceivedPermissions.12.role:
+        "admin"
      directlyReceivedPermissions.11.role:
+        "admin"
      directlyReceivedPermissions.10.role:
+        "admin"
      directlyReceivedPermissions.9.role:
+        "admin"
      directlyReceivedPermissions.8.role:
+        "admin"
      directlyReceivedPermissions.7.role:
+        "admin"
      directlyReceivedPermissions.6.role:
+        "admin"
      directlyReceivedPermissions.5.role:
+        "admin"
      directlyReceivedPermissions.4.role:
+        "admin"
      directlyReceivedPermissions.3.role:
+        "admin"
      directlyReceivedPermissions.2.role:
+        "admin"
      directlyReceivedPermissions.1.role:
+        "admin"
      directlyReceivedPermissions.0.role:
+        "admin"
    }
```

```diff
    EOA UnichainProxyAdminOwner_L2Alias (0x7E6c183F538abb8572F5cd17109C617b994d6944) {
    +++ description: None
      receivedPermissions.15.role:
+        "admin"
      receivedPermissions.14.role:
+        "admin"
      receivedPermissions.13.role:
+        "admin"
      receivedPermissions.12.role:
+        "admin"
      receivedPermissions.11.role:
+        "admin"
      receivedPermissions.10.role:
+        "admin"
      receivedPermissions.9.role:
+        "admin"
      receivedPermissions.8.role:
+        "admin"
      receivedPermissions.7.role:
+        "admin"
      receivedPermissions.6.role:
+        "admin"
      receivedPermissions.5.role:
+        "admin"
      receivedPermissions.4.role:
+        "admin"
      receivedPermissions.3.role:
+        "admin"
      receivedPermissions.2.role:
+        "admin"
      receivedPermissions.1.role:
+        "admin"
      receivedPermissions.0.role:
+        "admin"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

Generated with discovered.json: 0x783f0f32568fa8bd7f4663606e310d215bb500e8

# Diff at Mon, 12 May 2025 08:22:46 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@4a373705dbec82410d264d404f2ff330f41666ef block: 15457819
- current block number: 16289384

## Description

Isthmus L2 contract upgrades, mainly focusing on support for the new operator fee (standard contracts).

## Watched changes

```diff
    contract GasPriceOracle (0x420000000000000000000000000000000000000F) {
    +++ description: Provides the current gas price for L2 transactions.
      sourceHashes.1:
-        "0x6e5bd465cdf07c7fc7de194833be336109be5aceaeb509643962096c772ec26a"
+        "0x926a45849c8c68704718056d544ac26d7683a6b44a90a9590dda1a9bdd495962"
      values.$implementation:
-        "0xc0d3C0d3C0d3c0D3C0D3C0d3C0d3C0D3C0D3000f"
+        "0x93e57A196454CB919193fa9946f14943cf733845"
      values.version:
-        "1.3.1-beta.1"
+        "1.4.0"
      values.isIsthmus:
+        true
      implementationNames.0xc0d3C0d3C0d3c0D3C0D3C0d3C0d3C0D3C0D3000f:
-        "GasPriceOracle"
      implementationNames.0x93e57A196454CB919193fa9946f14943cf733845:
+        "GasPriceOracle"
    }
```

```diff
    contract L1Block (0x4200000000000000000000000000000000000015) {
    +++ description: Simple contract that returns information about the latest L1 block, which is derived permissionlessly from the L1 chain.
      sourceHashes.1:
-        "0x936b7b7eb2a88a64e3eceaf897abfa2dc6e48b4c75eba2da34ff927b98413b6b"
+        "0xb3745d52050d9a2c6bfa6e6e091bdfa43e7c87a22542aa276d323a29431ec108"
      values.$implementation:
-        "0xc0d3C0D3C0D3c0D3C0D3C0d3C0D3c0D3c0d30015"
+        "0xFf256497D61dcd71a9e9Ff43967C13fdE1F72D12"
      values.version:
-        "1.5.1-beta.1"
+        "1.6.0"
      implementationNames.0xc0d3C0D3C0D3c0D3C0D3C0d3C0D3c0D3c0d30015:
-        "L1Block"
      implementationNames.0xFf256497D61dcd71a9e9Ff43967C13fdE1F72D12:
+        "L1Block"
    }
```

## Source code changes

```diff
.../GasPriceOracle/GasPriceOracle.sol              |  516 ++++++-
 .../{.flat@15457819 => .flat}/L1Block/L1Block.sol  | 1423 +-------------------
 2 files changed, 554 insertions(+), 1385 deletions(-)
```

Generated with discovered.json: 0x48a0e02b40afb360568475621ff4ab7a84b867a0

# Diff at Tue, 06 May 2025 10:57:10 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@3a394513711f46aa66871603365b6afb40a79057 block: 15457819
- current block number: 15457819

## Description

Marking EOAs if they control the highest number of upgrade permissions in the project.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 15457819 (main branch discovery), not current.

```diff
    EOA UnichainProxyAdminOwner_L2Alias (0x7E6c183F538abb8572F5cd17109C617b994d6944) {
    +++ description: None
      controlsMajorityOfUpgradePermissions:
+        true
    }
```

Generated with discovered.json: 0x1727c1efc0647747d286ce6eb19a3ea479e54bfc

# Diff at Fri, 02 May 2025 17:25:50 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@c598e33a0c469175b7abbd6c2a13b47b63d6b6a4 block: 9916035
- current block number: 15457819

## Description

config related: templatized the L1Splitter contracts.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 9916035 (main branch discovery), not current.

```diff
    contract L1Splitter (0x4300C0D3C0D3C0D3C0d3C0d3c0d3C0d3C0d30002) {
    +++ description: Automatically collects ETH on L2 and periodically bridges it back to Ethereum Layer 1 to a specified recipient address (0xa3d596EAfaB6B13Ab18D40FaE1A962700C84ADEa).
      template:
+        "unichain/L1Splitter"
      description:
+        "Automatically collects ETH on L2 and periodically bridges it back to Ethereum Layer 1 to a specified recipient address (0xa3d596EAfaB6B13Ab18D40FaE1A962700C84ADEa)."
    }
```

```diff
    contract L1Splitter (0x4300c0d3c0d3c0D3c0d3C0D3c0d3C0D3C0D30003) {
    +++ description: Automatically collects ETH on L2 and periodically bridges it back to Ethereum Layer 1 to a specified recipient address (0x2F60A5184c63ca94f82a27100643DbAbe4F3f7Fd).
      template:
+        "unichain/L1Splitter"
      description:
+        "Automatically collects ETH on L2 and periodically bridges it back to Ethereum Layer 1 to a specified recipient address (0x2F60A5184c63ca94f82a27100643DbAbe4F3f7Fd)."
    }
```

Generated with discovered.json: 0x7c9926b96fa9e45c9df91b2a11e1357d1078cf35

# Diff at Tue, 29 Apr 2025 08:19:30 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 9916035
- current block number: 9916035

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 9916035 (main branch discovery), not current.

```diff
    contract DeployerWhitelist (0x4200000000000000000000000000000000000002) {
    +++ description: Legacy contract that was originally used to act as a whitelist of addresses allowed to the Optimism network. Fully unused and deprecated since the Bedrock upgrade.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract L2CrossDomainMessenger (0x4200000000000000000000000000000000000007) {
    +++ description: The L2CrossDomainMessenger (L2xDM) contract sends messages from L2 to L1, and relays messages from L1 onto L2 with a system tx. In the event that a message sent from L2 to L1 is rejected for exceeding the L1 gas limit, it can be resubmitted via this contract’s replay function.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract GasPriceOracle (0x420000000000000000000000000000000000000F) {
    +++ description: Provides the current gas price for L2 transactions.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract L2StandardBridge (0x4200000000000000000000000000000000000010) {
    +++ description: The L2StandardBridge contract is the main entry point to deposit or withdraw ERC20 tokens from L2 to L1. This contract can store any token.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract SequencerFeeVault (0x4200000000000000000000000000000000000011) {
    +++ description: Collects the sequencer fees, which are withdrawable to the FeesCollector on L1.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract OptimismMintableERC20Factory (0x4200000000000000000000000000000000000012) {
    +++ description: Factory contract to create bridge compliant ERC20 IOU token representations of bridged L1 ERC20 tokens.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract L1BlockNumber (0x4200000000000000000000000000000000000013) {
    +++ description: Simple contract that returns the latest L1 block number.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract L2ERC721Bridge (0x4200000000000000000000000000000000000014) {
    +++ description: The L2ERC721Bridge contract is the main entry point to deposit or withdraw ERC721 tokens from L2 to L1. This contract can store any token.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract L1Block (0x4200000000000000000000000000000000000015) {
    +++ description: Simple contract that returns information about the latest L1 block, which is derived permissionlessly from the L1 chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract L2ToL1MessagePasser (0x4200000000000000000000000000000000000016) {
    +++ description: Contract used internally by the L2CrossDomainMessenger to send messages to L1, including withdrawals. It can also be used directly as a low-level interface.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract OptimismMintableERC721Factory (0x4200000000000000000000000000000000000017) {
    +++ description: Factory contract to create bridge compliant ERC721 IOU token representations of bridged L1 ERC721 tokens.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract L2ProxyAdmin (0x4200000000000000000000000000000000000018) {
    +++ description: Administration contract for other contract proxies.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract BaseFeeVault (0x4200000000000000000000000000000000000019) {
    +++ description: Collects EIP-1559 base fees, which are withdrawable to the FeesCollector on L1.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract L1FeeVault (0x420000000000000000000000000000000000001A) {
    +++ description: Collects the L1 portion of the L2 transaction fees, which are withdrawable to the FeesCollector on L1.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract SchemaRegistry (0x4200000000000000000000000000000000000020) {
    +++ description: Contracts to register schemas for the Ethereum Attestation Service (EAS).
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

```diff
    contract EAS (0x4200000000000000000000000000000000000021) {
    +++ description: Contract containing the main logic for the Ethereum Attestation Service (EAS).
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7E6c183F538abb8572F5cd17109C617b994d6944","via":[{"address":"0x4200000000000000000000000000000000000018"}]}]
    }
```

Generated with discovered.json: 0xaa84a95ac4433a397aa99d60054e28819e473186

# Diff at Tue, 04 Mar 2025 10:42:45 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 9916035
- current block number: 9916035

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 9916035 (main branch discovery), not current.

```diff
    contract DeployerWhitelist (0x4200000000000000000000000000000000000002) {
    +++ description: Legacy contract that was originally used to act as a whitelist of addresses allowed to the Optimism network. Fully unused and deprecated since the Bedrock upgrade.
      sinceBlock:
+        0
    }
```

```diff
    contract L2CrossDomainMessenger (0x4200000000000000000000000000000000000007) {
    +++ description: The L2CrossDomainMessenger (L2xDM) contract sends messages from L2 to L1, and relays messages from L1 onto L2 with a system tx. In the event that a message sent from L2 to L1 is rejected for exceeding the L1 gas limit, it can be resubmitted via this contract’s replay function.
      sinceBlock:
+        0
    }
```

```diff
    contract GasPriceOracle (0x420000000000000000000000000000000000000F) {
    +++ description: Provides the current gas price for L2 transactions.
      sinceBlock:
+        0
    }
```

```diff
    contract L2StandardBridge (0x4200000000000000000000000000000000000010) {
    +++ description: The L2StandardBridge contract is the main entry point to deposit or withdraw ERC20 tokens from L2 to L1. This contract can store any token.
      sinceBlock:
+        0
    }
```

```diff
    contract SequencerFeeVault (0x4200000000000000000000000000000000000011) {
    +++ description: Collects the sequencer fees, which are withdrawable to the FeesCollector on L1.
      sinceBlock:
+        0
    }
```

```diff
    contract OptimismMintableERC20Factory (0x4200000000000000000000000000000000000012) {
    +++ description: Factory contract to create bridge compliant ERC20 IOU token representations of bridged L1 ERC20 tokens.
      sinceBlock:
+        0
    }
```

```diff
    contract L1BlockNumber (0x4200000000000000000000000000000000000013) {
    +++ description: Simple contract that returns the latest L1 block number.
      sinceBlock:
+        0
    }
```

```diff
    contract L2ERC721Bridge (0x4200000000000000000000000000000000000014) {
    +++ description: The L2ERC721Bridge contract is the main entry point to deposit or withdraw ERC721 tokens from L2 to L1. This contract can store any token.
      sinceBlock:
+        0
    }
```

```diff
    contract L1Block (0x4200000000000000000000000000000000000015) {
    +++ description: Simple contract that returns information about the latest L1 block, which is derived permissionlessly from the L1 chain.
      sinceBlock:
+        0
    }
```

```diff
    contract L2ToL1MessagePasser (0x4200000000000000000000000000000000000016) {
    +++ description: Contract used internally by the L2CrossDomainMessenger to send messages to L1, including withdrawals. It can also be used directly as a low-level interface.
      sinceBlock:
+        0
    }
```

```diff
    contract OptimismMintableERC721Factory (0x4200000000000000000000000000000000000017) {
    +++ description: Factory contract to create bridge compliant ERC721 IOU token representations of bridged L1 ERC721 tokens.
      sinceBlock:
+        0
    }
```

```diff
    contract L2ProxyAdmin (0x4200000000000000000000000000000000000018) {
    +++ description: Administration contract for other contract proxies.
      sinceBlock:
+        0
    }
```

```diff
    contract BaseFeeVault (0x4200000000000000000000000000000000000019) {
    +++ description: Collects EIP-1559 base fees, which are withdrawable to the FeesCollector on L1.
      sinceBlock:
+        0
    }
```

```diff
    contract L1FeeVault (0x420000000000000000000000000000000000001A) {
    +++ description: Collects the L1 portion of the L2 transaction fees, which are withdrawable to the FeesCollector on L1.
      sinceBlock:
+        0
    }
```

```diff
    contract SchemaRegistry (0x4200000000000000000000000000000000000020) {
    +++ description: Contracts to register schemas for the Ethereum Attestation Service (EAS).
      sinceBlock:
+        0
    }
```

```diff
    contract EAS (0x4200000000000000000000000000000000000021) {
    +++ description: Contract containing the main logic for the Ethereum Attestation Service (EAS).
      sinceBlock:
+        0
    }
```

```diff
    contract FeeSplitter (0x4300c0D3c0d3c0d3c0d3c0d3C0D3c0d3c0d30001) {
    +++ description: None
      sinceBlock:
+        0
    }
```

```diff
    contract L1Splitter (0x4300C0D3C0D3C0D3C0d3C0d3c0d3C0d3C0d30002) {
    +++ description: None
      sinceBlock:
+        0
    }
```

```diff
    contract L1Splitter (0x4300c0d3c0d3c0D3c0d3C0D3c0d3C0D3C0D30003) {
    +++ description: None
      sinceBlock:
+        0
    }
```

```diff
    contract NetFeeSplitter (0x4300c0D3c0D3c0D3c0D3c0D3C0D3c0d3c0D30004) {
    +++ description: None
      sinceBlock:
+        0
    }
```

Generated with discovered.json: 0xefbd9ce6105d07f1e7df78c9ecedbf955f1ce88e

# Diff at Thu, 27 Feb 2025 13:53:22 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7afe405a4930423077d17ed79971752d0831e02a block: 9838404
- current block number: 9916035

## Description

Config related: Add L2 contracts as templates with source.

## Watched changes

```diff
    contract SequencerFeeVault (0x4200000000000000000000000000000000000011) {
    +++ description: Collects the sequencer fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
+        ["2024-12-05T19:19:37.000Z","0x535fc15c66b384bf5f53847b4f1d5666a8a3a24f9e43f66854b1643b641312a8",["0x95Fc06E1F6330F2829f0622d6158F5b1E21597B0"]]
      values.$upgradeCount:
-        0
+        1
    }
```

```diff
    contract BaseFeeVault (0x4200000000000000000000000000000000000019) {
    +++ description: Collects EIP-1559 base fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
+        ["2024-12-05T19:19:37.000Z","0xb16f95118e9269c5d7e0ee3a58e4cf22cb5a7e74c2ae7446b4419fd6855aa761",["0xeb82050BB91e4879E256E0cF9a7C4bD58916aa6e"]]
      values.$upgradeCount:
-        0
+        1
    }
```

```diff
    contract L1FeeVault (0x420000000000000000000000000000000000001A) {
    +++ description: Collects the L1 portion of the L2 transaction fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
+        ["2024-12-05T19:19:37.000Z","0x66332072346a29a118b78491d791cb2abb2cea8f16e343b492e25f1ba9785406",["0xc1fB143b9dF08eB0612ABCA237Dfe3726da2ED15"]]
      values.$upgradeCount:
-        0
+        1
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 9838404 (main branch discovery), not current.

```diff
    contract L2ProxyAdmin (0x4200000000000000000000000000000000000018) {
    +++ description: Administration contract for other contract proxies.
      name:
-        "ProxyAdmin"
+        "L2ProxyAdmin"
      displayName:
-        "L2ProxyAdmin"
    }
```

Generated with discovered.json: 0x4896f584e32c30c45de35c5820fdf4d674c49759

# Diff at Wed, 26 Feb 2025 16:19:31 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@9eb8b2d626938c85a098b11b809352a92a892736 block: 9648418
- current block number: 9838404

## Description

Config related: Add L2 contracts as templates with source.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 9648418 (main branch discovery), not current.

```diff
    contract L2CrossDomainMessenger (0x4200000000000000000000000000000000000007) {
    +++ description: The L2CrossDomainMessenger (L2xDM) contract sends messages from L2 to L1, and relays messages from L1 onto L2 with a system tx. In the event that a message sent from L2 to L1 is rejected for exceeding the L1 gas limit, it can be resubmitted via this contract’s replay function.
      template:
+        "opstack/Layer2/L2CrossDomainMessenger"
    }
```

```diff
    contract GasPriceOracle (0x420000000000000000000000000000000000000F) {
    +++ description: Provides the current gas price for L2 transactions.
      template:
+        "opstack/Layer2/GasPriceOracle"
    }
```

```diff
    contract L2StandardBridge (0x4200000000000000000000000000000000000010) {
    +++ description: The L2StandardBridge contract is the main entry point to deposit or withdraw ERC20 tokens from L2 to L1. This contract can store any token.
      template:
+        "opstack/Layer2/L2StandardBridge"
    }
```

```diff
    contract SequencerFeeVault (0x4200000000000000000000000000000000000011) {
    +++ description: Collects the sequencer fees, which are withdrawable to the FeesCollector on L1.
      template:
+        "opstack/Layer2/SequencerFeeVault"
    }
```

```diff
    contract OptimismMintableERC20Factory (0x4200000000000000000000000000000000000012) {
    +++ description: Factory contract to create bridge compliant ERC20 IOU token representations of bridged L1 ERC20 tokens.
      template:
+        "opstack/Layer2/OptimismMintableERC20Factory"
    }
```

```diff
    contract L1BlockNumber (0x4200000000000000000000000000000000000013) {
    +++ description: Simple contract that returns the latest L1 block number.
      template:
+        "opstack/Layer2/L1BlockNumber"
    }
```

```diff
    contract L2ERC721Bridge (0x4200000000000000000000000000000000000014) {
    +++ description: The L2ERC721Bridge contract is the main entry point to deposit or withdraw ERC721 tokens from L2 to L1. This contract can store any token.
      template:
+        "opstack/Layer2/L2ERC721Bridge"
    }
```

```diff
    contract L1Block (0x4200000000000000000000000000000000000015) {
    +++ description: Simple contract that returns information about the latest L1 block, which is derived permissionlessly from the L1 chain.
      template:
+        "opstack/Layer2/L1Block"
    }
```

```diff
    contract L2ToL1MessagePasser (0x4200000000000000000000000000000000000016) {
    +++ description: Contract used internally by the L2CrossDomainMessenger to send messages to L1, including withdrawals. It can also be used directly as a low-level interface.
      template:
+        "opstack/Layer2/L2ToL1MessagePasser"
    }
```

```diff
    contract OptimismMintableERC721Factory (0x4200000000000000000000000000000000000017) {
    +++ description: Factory contract to create bridge compliant ERC721 IOU token representations of bridged L1 ERC721 tokens.
      template:
+        "opstack/Layer2/OptimismMintableERC721Factory"
    }
```

```diff
    contract ProxyAdmin (0x4200000000000000000000000000000000000018) {
    +++ description: Administration contract for other contract proxies.
      name:
-        "L2ProxyAdmin"
+        "ProxyAdmin"
      displayName:
+        "L2ProxyAdmin"
    }
```

```diff
    contract BaseFeeVault (0x4200000000000000000000000000000000000019) {
    +++ description: Collects EIP-1559 base fees, which are withdrawable to the FeesCollector on L1.
      template:
+        "opstack/Layer2/BaseFeeVault"
    }
```

```diff
    contract L1FeeVault (0x420000000000000000000000000000000000001A) {
    +++ description: Collects the L1 portion of the L2 transaction fees, which are withdrawable to the FeesCollector on L1.
      template:
+        "opstack/Layer2/L1FeeVault"
    }
```

```diff
    contract SchemaRegistry (0x4200000000000000000000000000000000000020) {
    +++ description: Contracts to register schemas for the Ethereum Attestation Service (EAS).
      template:
+        "opstack/Layer2/SchemaRegistry"
    }
```

```diff
    contract EAS (0x4200000000000000000000000000000000000021) {
    +++ description: Contract containing the main logic for the Ethereum Attestation Service (EAS).
      template:
+        "opstack/Layer2/EAS"
    }
```

Generated with discovered.json: 0x5c5b07d387624e06d18a3bd29e34c7d66a008d89

# Diff at Mon, 24 Feb 2025 06:44:50 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@acba8ef604ab549fe1bb733f08b5b0673a071756 block: 9227118
- current block number: 9631126

## Description

Config related: New ProxyAdmin template.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 9227118 (main branch discovery), not current.

```diff
    contract DeployerWhitelist (0x4200000000000000000000000000000000000002) {
    +++ description: Legacy contract that was originally used to act as a whitelist of addresses allowed to the Optimism network. Fully unused and deprecated since the Bedrock upgrade.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract L2CrossDomainMessenger (0x4200000000000000000000000000000000000007) {
    +++ description: The L2CrossDomainMessenger (L2xDM) contract sends messages from L2 to L1, and relays messages from L1 onto L2 with a system tx. In the event that a message sent from L2 to L1 is rejected for exceeding the L1 gas limit, it can be resubmitted via this contract’s replay function.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract GasPriceOracle (0x420000000000000000000000000000000000000F) {
    +++ description: Provides the current gas price for L2 transactions.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract L2StandardBridge (0x4200000000000000000000000000000000000010) {
    +++ description: The L2StandardBridge contract is the main entry point to deposit or withdraw ERC20 tokens from L2 to L1. This contract can store any token.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract SequencerFeeVault (0x4200000000000000000000000000000000000011) {
    +++ description: Collects the sequencer fees, which are withdrawable to the FeesCollector on L1.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
      values.$pastUpgrades.0:
-        ["2024-12-05T19:19:37.000Z","0x535fc15c66b384bf5f53847b4f1d5666a8a3a24f9e43f66854b1643b641312a8",["0x95Fc06E1F6330F2829f0622d6158F5b1E21597B0"]]
      values.$upgradeCount:
-        1
+        0
    }
```

```diff
    contract OptimismMintableERC20Factory (0x4200000000000000000000000000000000000012) {
    +++ description: Factory contract to create bridge compliant ERC20 IOU token representations of bridged L1 ERC20 tokens.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract L1BlockNumber (0x4200000000000000000000000000000000000013) {
    +++ description: Simple contract that returns the latest L1 block number.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract L2ERC721Bridge (0x4200000000000000000000000000000000000014) {
    +++ description: The L2ERC721Bridge contract is the main entry point to deposit or withdraw ERC721 tokens from L2 to L1. This contract can store any token.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract L1Block (0x4200000000000000000000000000000000000015) {
    +++ description: Simple contract that returns information about the latest L1 block, which is derived permissionlessly from the L1 chain.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract L2ToL1MessagePasser (0x4200000000000000000000000000000000000016) {
    +++ description: Contract used internally by the L2CrossDomainMessenger to send messages to L1, including withdrawals. It can also be used directly as a low-level interface.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract OptimismMintableERC721Factory (0x4200000000000000000000000000000000000017) {
    +++ description: Factory contract to create bridge compliant ERC721 IOU token representations of bridged L1 ERC721 tokens.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract L2ProxyAdmin (0x4200000000000000000000000000000000000018) {
    +++ description: Administration contract for other contract proxies.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
      receivedPermissions:
-        [{"permission":"upgrade","from":"0x4200000000000000000000000000000000000002"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000007"},{"permission":"upgrade","from":"0x420000000000000000000000000000000000000F"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000010"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000011"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000012"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000013"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000014"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000015"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000016"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000017"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000018"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000019"},{"permission":"upgrade","from":"0x420000000000000000000000000000000000001A"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000020"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000021"}]
      template:
+        "opstack/Layer2/L2ProxyAdmin"
      description:
+        "Administration contract for other contract proxies."
      directlyReceivedPermissions:
+        [{"permission":"upgrade","from":"0x4200000000000000000000000000000000000002"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000007"},{"permission":"upgrade","from":"0x420000000000000000000000000000000000000F"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000010"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000011"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000012"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000013"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000014"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000015"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000016"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000017"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000018"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000019"},{"permission":"upgrade","from":"0x420000000000000000000000000000000000001A"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000020"},{"permission":"upgrade","from":"0x4200000000000000000000000000000000000021"}]
    }
```

```diff
    contract BaseFeeVault (0x4200000000000000000000000000000000000019) {
    +++ description: Collects EIP-1559 base fees, which are withdrawable to the FeesCollector on L1.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
      values.$pastUpgrades.0:
-        ["2024-12-05T19:19:37.000Z","0xb16f95118e9269c5d7e0ee3a58e4cf22cb5a7e74c2ae7446b4419fd6855aa761",["0xeb82050BB91e4879E256E0cF9a7C4bD58916aa6e"]]
      values.$upgradeCount:
-        1
+        0
    }
```

```diff
    contract L1FeeVault (0x420000000000000000000000000000000000001A) {
    +++ description: Collects the L1 portion of the L2 transaction fees, which are withdrawable to the FeesCollector on L1.
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
      values.$pastUpgrades.0:
-        ["2024-12-05T19:19:37.000Z","0x66332072346a29a118b78491d791cb2abb2cea8f16e343b492e25f1ba9785406",["0xc1fB143b9dF08eB0612ABCA237Dfe3726da2ED15"]]
      values.$upgradeCount:
-        1
+        0
    }
```

```diff
    contract SchemaRegistry (0x4200000000000000000000000000000000000020) {
    +++ description: Contracts to register schemas for the Ethereum Attestation Service (EAS).
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

```diff
    contract EAS (0x4200000000000000000000000000000000000021) {
    +++ description: Contract containing the main logic for the Ethereum Attestation Service (EAS).
      issuedPermissions.0.to:
-        "0x4200000000000000000000000000000000000018"
+        "0x7E6c183F538abb8572F5cd17109C617b994d6944"
      issuedPermissions.0.via.0:
+        {"address":"0x4200000000000000000000000000000000000018"}
    }
```

Generated with discovered.json: 0x40ecebedb5b496a9b0201d829c4ef3a7bd6125c3

# Diff at Thu, 20 Feb 2025 09:58:59 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@3f6bcb8b805098e7609fbf2c2ebf3f4ea8423470 block: 9227118
- current block number: 9227118

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 9227118 (main branch discovery), not current.

```diff
    contract SequencerFeeVault (0x4200000000000000000000000000000000000011) {
    +++ description: Collects the sequencer fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
+        ["2024-12-05T19:19:37.000Z","0x535fc15c66b384bf5f53847b4f1d5666a8a3a24f9e43f66854b1643b641312a8",["0x95Fc06E1F6330F2829f0622d6158F5b1E21597B0"]]
      values.$upgradeCount:
-        0
+        1
    }
```

```diff
    contract BaseFeeVault (0x4200000000000000000000000000000000000019) {
    +++ description: Collects EIP-1559 base fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
+        ["2024-12-05T19:19:37.000Z","0xb16f95118e9269c5d7e0ee3a58e4cf22cb5a7e74c2ae7446b4419fd6855aa761",["0xeb82050BB91e4879E256E0cF9a7C4bD58916aa6e"]]
      values.$upgradeCount:
-        0
+        1
    }
```

```diff
    contract L1FeeVault (0x420000000000000000000000000000000000001A) {
    +++ description: Collects the L1 portion of the L2 transaction fees, which are withdrawable to the FeesCollector on L1.
      values.$pastUpgrades.0:
+        ["2024-12-05T19:19:37.000Z","0x66332072346a29a118b78491d791cb2abb2cea8f16e343b492e25f1ba9785406",["0xc1fB143b9dF08eB0612ABCA237Dfe3726da2ED15"]]
      values.$upgradeCount:
-        0
+        1
    }
```

Generated with discovered.json: 0x6e66a44e5391621a06370e2388009449205f7dae

# Diff at Tue, 11 Feb 2025 14:21:47 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- current block number: 8535340

## Description

Initial discovery.

## Initial discovery

```diff
+   Status: CREATED
    contract DeployerWhitelist (0x4200000000000000000000000000000000000002)
    +++ description: Legacy contract that was originally used to act as a whitelist of addresses allowed to the Optimism network. Fully unused and deprecated since the Bedrock upgrade.
```

```diff
+   Status: CREATED
    contract L2CrossDomainMessenger (0x4200000000000000000000000000000000000007)
    +++ description: The L2CrossDomainMessenger (L2xDM) contract sends messages from L2 to L1, and relays messages from L1 onto L2 with a system tx. In the event that a message sent from L2 to L1 is rejected for exceeding the L1 gas limit, it can be resubmitted via this contract’s replay function.
```

```diff
+   Status: CREATED
    contract GasPriceOracle (0x420000000000000000000000000000000000000F)
    +++ description: Provides the current gas price for L2 transactions.
```

```diff
+   Status: CREATED
    contract L2StandardBridge (0x4200000000000000000000000000000000000010)
    +++ description: The L2StandardBridge contract is the main entry point to deposit or withdraw ERC20 tokens from L2 to L1. This contract can store any token.
```

```diff
+   Status: CREATED
    contract SequencerFeeVault (0x4200000000000000000000000000000000000011)
    +++ description: Collects the sequencer fees, which are withdrawable to the FeesCollector on L1.
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x4200000000000000000000000000000000000012)
    +++ description: Factory contract to create bridge compliant ERC20 IOU token representations of bridged L1 ERC20 tokens.
```

```diff
+   Status: CREATED
    contract L1BlockNumber (0x4200000000000000000000000000000000000013)
    +++ description: Simple contract that returns the latest L1 block number.
```

```diff
+   Status: CREATED
    contract L2ERC721Bridge (0x4200000000000000000000000000000000000014)
    +++ description: The L2ERC721Bridge contract is the main entry point to deposit or withdraw ERC721 tokens from L2 to L1. This contract can store any token.
```

```diff
+   Status: CREATED
    contract L1Block (0x4200000000000000000000000000000000000015)
    +++ description: Simple contract that returns information about the latest L1 block, which is derived permissionlessly from the L1 chain.
```

```diff
+   Status: CREATED
    contract L2ToL1MessagePasser (0x4200000000000000000000000000000000000016)
    +++ description: Contract used internally by the L2CrossDomainMessenger to send messages to L1, including withdrawals. It can also be used directly as a low-level interface.
```

```diff
+   Status: CREATED
    contract OptimismMintableERC721Factory (0x4200000000000000000000000000000000000017)
    +++ description: Factory contract to create bridge compliant ERC721 IOU token representations of bridged L1 ERC721 tokens.
```

```diff
+   Status: CREATED
    contract L2ProxyAdmin (0x4200000000000000000000000000000000000018)
    +++ description: None
```

```diff
+   Status: CREATED
    contract BaseFeeVault (0x4200000000000000000000000000000000000019)
    +++ description: Collects EIP-1559 base fees, which are withdrawable to the FeesCollector on L1.
```

```diff
+   Status: CREATED
    contract L1FeeVault (0x420000000000000000000000000000000000001A)
    +++ description: Collects the L1 portion of the L2 transaction fees, which are withdrawable to the FeesCollector on L1.
```

```diff
+   Status: CREATED
    contract SchemaRegistry (0x4200000000000000000000000000000000000020)
    +++ description: Contracts to register schemas for the Ethereum Attestation Service (EAS).
```

```diff
+   Status: CREATED
    contract EAS (0x4200000000000000000000000000000000000021)
    +++ description: Contract containing the main logic for the Ethereum Attestation Service (EAS).
```

```diff
+   Status: CREATED
    contract FeeSplitter (0x4300c0D3c0d3c0d3c0d3c0d3C0D3c0d3c0d30001)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1Splitter (0x4300C0D3C0D3C0D3C0d3C0d3c0d3C0d3C0d30002)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1Splitter (0x4300c0d3c0d3c0D3c0d3C0D3c0d3C0D3C0D30003)
    +++ description: None
```

```diff
+   Status: CREATED
    contract NetFeeSplitter (0x4300c0D3c0D3c0D3c0D3c0D3C0D3c0d3c0D30004)
    +++ description: None
```
