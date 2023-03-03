import { gql } from 'src/typed_gql/gql';

export const QUERIES_GAMEBANK_HISTORY = gql(`
  query Gamebank_history($input: GamebankHistoryInput!) {
    gamebank_history(input: $input) {
      amount
      direction
      createdAt
      shareRatio
    }
  }
`);
