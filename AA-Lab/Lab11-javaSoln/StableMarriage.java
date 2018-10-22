import java.util.*;

/**
 * Class to implement Gale-Shapley algorithm for stable marriage.
 * 
 * @param jefcha
 */
public class StableMarriage
{
	
	/**
	 * Female proposing Gale-Shapley algorithm.
	 * 
	 * @param femalePrefs Array of female preferences.
	 * @param maleprefs Array of male prefernces.
	 * 
	 * @return Array of matches.  A[m] = f, indicates male 'm' is matched to female 'f'.
	 */
    public static int[] match(int[][] femalePrefs, int[][] malePrefs) {

        // matches of male to female.  Array indices map to males (id), while
        // array entries map to females (id).
        int[] matches = new int[femalePrefs.length];

        // index of next male in their preference lists to try
        int[] nextMale = new int[femalePrefs.length];

        // list of free females
        Queue<Integer> freeFemales = new LinkedList<Integer>();
        for (int f = 0; f < femalePrefs.length; f++) {
            freeFemales.add(f);
            nextMale[f] = 0;
        }

        for (int m = 0; m < malePrefs.length; m++) {
            // -1 means unmatched
            matches[m] = -1;
        }


        // loop until no more free/unallocated females
        while(!freeFemales.isEmpty()) {
            // remove female at front of free queue
            int currFemale = freeFemales.poll();

            // list of male preferences for current female
            int[] currFemalePrefs = femalePrefs[currFemale];

            // get next male to try for this female
            int nextMaleToTry = currFemalePrefs[nextMale[currFemale]];

            // test if this male has been matched
            // male is free
            if (matches[nextMaleToTry] < 0) {
                matches[nextMaleToTry] = currFemale;
            }
            // male is not free, see if can "upgrade" current match
            else {
                int otherFemale = matches[nextMaleToTry];
                // get nextMaleToTry's preferences
                int[] nextMalePrefs = malePrefs[nextMaleToTry];

                // if currFemale is more preferred by our male, then we replace
                // current match
                if (nextMalePrefs[currFemale] < nextMalePrefs[otherFemale]) {
                    matches[nextMaleToTry] = currFemale;
                    freeFemales.add(otherFemale);
                }
                // otherewise we add current female back to freeFemales for her to try her next preference
                else {
                	freeFemales.add(currFemale);
                }
            }

            // advance to her next preference
            nextMale[currFemale]++;
        }

        return matches;
    } // end of match()
} // end of class StableMariage
