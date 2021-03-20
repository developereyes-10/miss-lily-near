import { Volunteer, volunteers } from './model';

// --- contract code goes below

// The maximum number of latest messages the contract returns.
const MESSAGE_LIMIT = 10;

/**
 * Adds a new message under the name of the sender's account id.\
 * NOTE: This is a change method. Which means it will modify the state.\
 * But right now we don't distinguish them with annotations yet.
 */
export function addMessage(text: string, text1: string, text2: string, text3: string, text4: string, text5: string): void {
  // Creating a new message and populating fields with our data
  const volunteer = new Volunteer(text, text1, text2, text3, text4, text5);
  // Adding the message to end of the the persistent collection
  volunteers.push(volunteer);
}

/**
 * Returns an array of last N messages.\
 * NOTE: This is a view method. Which means it should NOT modify the state.
 */
export function getMessages(): Volunteer[] {
  const numMessages = min(MESSAGE_LIMIT, volunteers.length);
  const startIndex = volunteers.length - numMessages;
  const result = new Array<Volunteer>(numMessages);
  for(let i = 0; i < numMessages; i++) {
    result[i] = volunteers[i + startIndex];
  }
  return result;
}
