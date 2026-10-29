class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let count1 = {};
        let count2 = {};

        for (let i = 0; i < s.length; i++) {
            let harf = s[i];
            if (count1[harf] === undefined) {
                count1[harf] = 1;
            } else {
                count1[harf]++;
            }
        }

        for (let i = 0; i < t.length; i++) {
            let harf = t[i];
            if (count2[harf] === undefined) {
                count2[harf] = 1;
            } else {
                count2[harf]++;
            }
        }

        for (let harf in count1) {
            if (count1[harf] !== count2[harf]) {
                return false;
            }
        }

        return true;
    }
}
