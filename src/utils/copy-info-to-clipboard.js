import { getArtist } from './get-artist';
import { getTitle } from './get-title';

/**
 * Copy info to clipboard
 */
export async function copyInfoToClipboard () {
  const artist = getArtist ();
  const title = getTitle ();

  await navigator.clipboard.writeText (`${artist} ${title}`);
}