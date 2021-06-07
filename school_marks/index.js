window.addEventListener('DOMContentLoaded', () => {
    const countObj = document.querySelector('#current_marks_count');
    const countBtn = document.querySelector('.count_btn');
    const resBtn = document.querySelector('.res_btn');

    function cloneInput(count) {
        let parent = document.querySelector('.current_marks');
        let elem = parent.querySelector('.current_mark');
        for (let i=0; i<count-1; i++) {
            let clone = elem.cloneNode(true);
            parent.appendChild(clone);
        }
    }
 
    countBtn.addEventListener('click', () => {
        const count = document.getElementById("current_marks_count").value;
        cloneInput(count);
    });

    resBtn.addEventListener('click', () => {
        const count = document.getElementById("current_marks_count").value;
        let qmSum=0;
        let quarterMarks = document.querySelectorAll('.quarter_mark');
        for (let i = 0; i < 4; i++) {
            qmSum+=Number(quarterMarks[i].value);
        }
        qmSum=qmSum/4;
        document.getElementById("res1").value = qmSum;

        let cmSum=0;
        let currentMarks = document.querySelectorAll('.current_mark');

        let maxcount = 0;
        let k;
        for (let i = 0; i < count; i++) {
		    let count1=1;
		for (let j = i+1; j < count; j++) {
            let t=Number(currentMarks[i].value);
			if (t == Number(currentMarks[j].value)) {
                count1++;
            }
				
            if (maxcount < count1)
            {
                maxcount = count1;
                k = t;
            }
            else if (maxcount==count1) {
                if (k<t) {
                    k = t;
                }

            }
	    }   
    }
        document.getElementById("res2").value = k;

        document.getElementById("final_res").value = Math.round((qmSum*4 + k)/5);
    });
});