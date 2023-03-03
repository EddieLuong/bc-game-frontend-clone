/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type CommonResponse = {
  __typename?: 'CommonResponse';
  error: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Game = {
  __typename?: 'Game';
  created_at?: Maybe<Scalars['Date']>;
  game_bank?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  init_game_bank?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  public_key?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
};

export type GamebankDepositInput = {
  amount?: InputMaybe<Scalars['Int']>;
  game?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type GamebankHistoryInput = {
  game?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
};

export type GamebankOverviewInput = {
  game?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type GamebankOverviewResponse = {
  __typename?: 'GamebankOverviewResponse';
  balance?: Maybe<Scalars['Float']>;
  game?: Maybe<Scalars['String']>;
  hostInvestAmount?: Maybe<Scalars['Float']>;
  hostShareRatio?: Maybe<Scalars['Float']>;
  hostUnrealizedProfit?: Maybe<Scalars['Float']>;
  investMax?: Maybe<Scalars['Float']>;
  jackpots?: Maybe<Array<Maybe<Scalars['Float']>>>;
  symbol?: Maybe<Scalars['String']>;
  userInvestAmount?: Maybe<Scalars['Float']>;
  userShareRatio?: Maybe<Scalars['Float']>;
  userUnrealizedProfit?: Maybe<Scalars['Float']>;
};

export type GamebankWithdrawInput = {
  amount?: InputMaybe<Scalars['Int']>;
  game?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type JoinInput = {
  message?: InputMaybe<Scalars['String']>;
  public_key?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  signature: Scalars['String'];
  wallet_address: Scalars['String'];
};

export type JoinResponse = {
  __typename?: 'JoinResponse';
  access_token?: Maybe<Scalars['String']>;
  error: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  user?: Maybe<Profile>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deposit?: Maybe<CommonResponse>;
  gamebank_deposit?: Maybe<GamebankOverviewResponse>;
  gamebank_withdraw?: Maybe<GamebankOverviewResponse>;
  join?: Maybe<JoinResponse>;
  join_init?: Maybe<Scalars['String']>;
  join_server_game?: Maybe<Scalars['String']>;
  transaction_bcr?: Maybe<TransactionBcrResponse>;
  transaction_mpok?: Maybe<TransactionMpokResponse>;
  wallet_bet?: Maybe<CommonResponse>;
  wallet_win?: Maybe<CommonResponse>;
};


export type MutationDepositArgs = {
  amount: Scalars['Int'];
  tx: Scalars['String'];
};


export type MutationGamebank_DepositArgs = {
  input: GamebankDepositInput;
};


export type MutationGamebank_WithdrawArgs = {
  input: GamebankWithdrawInput;
};


export type MutationJoinArgs = {
  input: JoinInput;
};


export type MutationJoin_InitArgs = {
  wallet_address: Scalars['String'];
};


export type MutationJoin_Server_GameArgs = {
  public_key: Scalars['String'];
};


export type MutationTransaction_BcrArgs = {
  input: TransactionBcrInput;
};


export type MutationTransaction_MpokArgs = {
  input: TransactionMpokInput;
};


export type MutationWallet_BetArgs = {
  input?: InputMaybe<WalletBetInput>;
};


export type MutationWallet_WinArgs = {
  input?: InputMaybe<WalletWinInput>;
};

export type Profile = {
  __typename?: 'Profile';
  auth_by?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  hoh?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  trans?: Maybe<Array<Maybe<Transaction>>>;
  updated_at?: Maybe<Scalars['Date']>;
  wallet_address?: Maybe<Scalars['String']>;
  wo?: Maybe<Scalars['Int']>;
};

export type ProfileResponse = {
  __typename?: 'ProfileResponse';
  accepted?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  messageCode?: Maybe<Scalars['Int']>;
  requestId?: Maybe<Scalars['String']>;
  responseId?: Maybe<Scalars['String']>;
  userProfile?: Maybe<UserProfile>;
};

export type PubUserBet = {
  __typename?: 'PubUserBet';
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  game?: Maybe<Game>;
  gamebank_history?: Maybe<Array<Maybe<UserGameBankHistory>>>;
  gamebank_overview?: Maybe<GamebankOverviewResponse>;
  hoh?: Maybe<Scalars['Int']>;
  me?: Maybe<Profile>;
  random: Scalars['String'];
  server_time?: Maybe<Scalars['String']>;
  user?: Maybe<Profile>;
  user_profile?: Maybe<ProfileResponse>;
  wallet_balance?: Maybe<WalletBalanceResponse>;
  wallet_history?: Maybe<Scalars['String']>;
};


export type QueryGameArgs = {
  addr: Scalars['String'];
};


export type QueryGamebank_HistoryArgs = {
  input: GamebankHistoryInput;
};


export type QueryGamebank_OverviewArgs = {
  input: GamebankOverviewInput;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUser_ProfileArgs = {
  input?: InputMaybe<Web3AuthProfile>;
};


export type QueryWallet_BalanceArgs = {
  walletId: Scalars['String'];
};


export type QueryWallet_HistoryArgs = {
  walletId: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  hello?: Maybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  created_at?: Maybe<Scalars['Date']>;
  game_id?: Maybe<Scalars['ID']>;
  hoh_after?: Maybe<Scalars['Int']>;
  hoh_amount?: Maybe<Scalars['Int']>;
  hoh_before?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  tran_scr?: Maybe<Scalars['String']>;
  tx_id?: Maybe<Scalars['ID']>;
};

export type TransactionBcrInput = {
  outcomeBanker?: InputMaybe<Scalars['Int']>;
  outcomeBankerPair?: InputMaybe<Scalars['Int']>;
  outcomePlayer?: InputMaybe<Scalars['Int']>;
  outcomePlayerPair?: InputMaybe<Scalars['Int']>;
  outcomeTie?: InputMaybe<Scalars['Int']>;
  playerWalletId?: InputMaybe<Scalars['ID']>;
};

export type TransactionBcrResponse = {
  __typename?: 'TransactionBcrResponse';
  bankerPoint?: Maybe<Scalars['Int']>;
  cards?: Maybe<Array<Maybe<Scalars['String']>>>;
  gb?: Maybe<Scalars['Float']>;
  playerPoint?: Maybe<Scalars['Int']>;
  profitAmount?: Maybe<Scalars['Float']>;
  winAmount?: Maybe<Scalars['Float']>;
  winModes?: Maybe<WinModesBcr>;
  winOutcome?: Maybe<Scalars['String']>;
};

export type TransactionMpokInput = {
  betAmount?: InputMaybe<Scalars['Float']>;
  playerWalletId?: InputMaybe<Scalars['ID']>;
};

export type TransactionMpokResponse = {
  __typename?: 'TransactionMpokResponse';
  cards?: Maybe<Array<Maybe<Scalars['String']>>>;
  gb?: Maybe<Scalars['Float']>;
  jp?: Maybe<Scalars['Float']>;
  profitAmount?: Maybe<Scalars['Float']>;
  winAmount?: Maybe<Scalars['Float']>;
  winMultiplier?: Maybe<Scalars['Float']>;
  winType?: Maybe<Scalars['Int']>;
};

export type UserGameBankHistory = {
  __typename?: 'UserGameBankHistory';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  direction?: Maybe<Scalars['Int']>;
  shareRatio?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  createDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  verifierId?: Maybe<Scalars['String']>;
  wallets?: Maybe<Array<Maybe<UserWallet>>>;
};

export type UserWallet = {
  __typename?: 'UserWallet';
  balance?: Maybe<Scalars['Int']>;
  currencyCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  walletId?: Maybe<Scalars['String']>;
};

export type WalletBalanceResponse = {
  __typename?: 'WalletBalanceResponse';
  accepted?: Maybe<Scalars['Boolean']>;
  currentBalance?: Maybe<Scalars['Float']>;
  message?: Maybe<Scalars['String']>;
  messageCode?: Maybe<Scalars['Int']>;
  requestId?: Maybe<Scalars['String']>;
  responseId?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type WalletBetInput = {
  betAmount?: InputMaybe<Scalars['Float']>;
  symbol?: InputMaybe<Scalars['String']>;
  walletId?: InputMaybe<Scalars['ID']>;
};

export type WalletWinInput = {
  prize?: InputMaybe<Scalars['Float']>;
  symbol?: InputMaybe<Scalars['String']>;
  walletId?: InputMaybe<Scalars['ID']>;
};

export type Web3AuthProfile = {
  aggregateVerifier?: InputMaybe<Scalars['String']>;
  dappShare?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  idToken?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  oAuthAccessToken?: InputMaybe<Scalars['String']>;
  oAuthIdToken?: InputMaybe<Scalars['String']>;
  profileImage?: InputMaybe<Scalars['String']>;
  typeOfLogin?: InputMaybe<Scalars['String']>;
  verifier?: InputMaybe<Scalars['String']>;
  verifierId?: InputMaybe<Scalars['String']>;
};

export type WinModesBcr = {
  __typename?: 'WinModesBcr';
  banker?: Maybe<Scalars['Float']>;
  bankerPair?: Maybe<Scalars['Float']>;
  player?: Maybe<Scalars['Float']>;
  playerPair?: Maybe<Scalars['Float']>;
  tie?: Maybe<Scalars['Float']>;
};

export type Gamebank_HistoryQueryVariables = Exact<{
  input: GamebankHistoryInput;
}>;


export type Gamebank_HistoryQuery = { __typename?: 'Query', gamebank_history?: Array<{ __typename?: 'UserGameBankHistory', amount?: number | null, direction?: number | null, createdAt?: string | null, shareRatio?: number | null } | null> | null };


export const Gamebank_HistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Gamebank_history"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GamebankHistoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamebank_history"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"direction"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"shareRatio"}}]}}]}}]} as unknown as DocumentNode<Gamebank_HistoryQuery, Gamebank_HistoryQueryVariables>;