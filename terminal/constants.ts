
import { type CommandStep } from './types';

export const CISCO_COMMANDS: CommandStep[] = [
  {
    type: 'command',
    text: 'show ip interface brief',
    prompt: 'Router#',
  },
  {
    type: 'output',
    text: `Interface              IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0     unassigned      YES manual administratively down down
GigabitEthernet0/1     unassigned      YES manual administratively down down
Vlan1                  unassigned      YES manual administratively down down`,
  },
  {
    type: 'command',
    text: 'configure terminal',
    prompt: 'Router#',
  },
  {
    type: 'output',
    text: 'Enter configuration commands, one per line.  End with CNTL/Z.',
  },
  {
    type: 'command',
    text: 'interface GigabitEthernet0/1',
    prompt: 'Router(config)#',
  },
  {
    type: 'command',
    text: 'ip address 192.168.1.1 255.255.255.0',
    prompt: 'Router(config-if)#',
  },
  {
    type: 'command',
    text: 'no shutdown',
    prompt: 'Router(config-if)#',
  },
  {
    type: 'output',
    text: `%LINK-5-CHANGED: Interface GigabitEthernet0/1, changed state to up
%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/1, changed state to up`,
  },
  {
    type: 'command',
    text: 'end',
    prompt: 'Router(config-if)#',
  },
  {
    type: 'output',
    text: 'Router#',
  },
  {
    type: 'command',
    text: 'show ip interface brief',
    prompt: 'Router#',
  },
  {
    type: 'output',
    text: `Interface              IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0     unassigned      YES manual administratively down down
GigabitEthernet0/1     192.168.1.1     YES manual up                    up
Vlan1                  unassigned      YES manual administratively down down`,
  },
];
