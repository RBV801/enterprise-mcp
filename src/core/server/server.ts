import { Server, Transport } from '@modelcontextprotocol/sdk';
export class EnterpriseServer extends Server {
  async connect(transport: Transport): Promise<void> {
    await super.connect(transport);
  }
}