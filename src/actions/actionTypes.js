export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// action creator
export function increment(value) {
  return { type: INCREMENT, value }
}