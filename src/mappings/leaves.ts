import { store } from "@graphprotocol/graph-ts";

import {
    Token,
} from "../types/schema"

import {
    Transfer as TransferEvent,
} from "../types/templates/LostWorld/CurvedRandomLostWorld"

export function handleTransfer (event: TransferEvent): void {
    let id = event.address.toHexString() + "-" + event.params.tokenId.toString()
    let token = Token.load(id);
    if (!token) {    
      token = new Token(id);
    }

    token.tokenID = event.params.tokenId;
    token.lostWorld = event.address.toHexString();
    token.save();
}