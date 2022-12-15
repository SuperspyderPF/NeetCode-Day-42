function longestCommonSubsequence(t1, t2){
     z = t1.length, q = t2.length, jz = Array.from(Array(z+1), () => new Array(q+1).fill(0))
    for(let ni=1;ni<=z;ni++){
        for(let no=1;no<=q;no++){
            if(t1[ni-1]===t2[no-1]) jz[ni][no] = jz[ni-1][no-1] + 1
            else jz[ni][no] = Math.max(jz[ni-1][no], jz[ni][no-1])
        }
    }
    return jz[z][q]
}