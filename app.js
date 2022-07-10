const d = new Date();
const day = d.getDay();
const hour = d.getHours();
const min = d.getMinutes();

console.log(hour);
console.log(min);

    if(day == 0 ){
        document.getElementById("day").innerHTML = "Sunday";
        document.getElementById("sub1").innerHTML = "HOLIDAY";
        document.getElementById("sub2").innerHTML = "HOLIDAY";
        document.getElementById("sub3").innerHTML = "HOLIDAY";
        document.getElementById("sub4").innerHTML = "HOLIDAY";
        document.getElementById("sub5").innerHTML = "HOLIDAY";
        document.getElementById("sub6").innerHTML = "HOLIDAY";
    }
    if(day == 1 ){
        document.getElementById("day").innerHTML = "Monday";
        document.getElementById("sub1").innerHTML = "ECOM[SSG]";
        document.getElementById("sub2").innerHTML = "ITP[KUA]";
        document.getElementById("sub3").innerHTML = "ITP[LAB]";
        document.getElementById("sub4").innerHTML = "ITP[LAB]";
        document.getElementById("sub5").innerHTML = "DCN[SSG]";
        document.getElementById("sub6").innerHTML = "AP[KMK]";

        if(hour == 8 && min == 30 && min <59)
        {
            document.getElementById("sub1").classList.add("blink_me");
        }   
    
    }
    if(day == 2 ){
        document.getElementById("day").innerHTML = "Tuesday";
        document.getElementById("sub1").innerHTML = "ECOM[SSG]";
        document.getElementById("sub2").innerHTML = "ITP[KUA]";
        document.getElementById("sub3").innerHTML = "ECOM[LAB]";
        document.getElementById("sub4").innerHTML = "ECOM[LAB]";
        document.getElementById("sub5").innerHTML = "ISVV[MMS]";
        document.getElementById("sub6").innerHTML = "AP[KMK]";
    }
    if(day == 3 ){
        document.getElementById("day").innerHTML = "Wednesday";
        document.getElementById("sub1").innerHTML = "ECOM[SSG]";
        document.getElementById("sub2").innerHTML = "AP[KMK]";
        document.getElementById("sub3").innerHTML = "DSN[SBA]";
        document.getElementById("sub4").innerHTML = "ISVV[MMS]";
        document.getElementById("sub5").innerHTML = "ITP[LAB]";
        document.getElementById("sub6").innerHTML = "ITP[LAB]";
    }
    if(day == 4 ){
        document.getElementById("day").innerHTML = "Thursday";
        document.getElementById("sub1").innerHTML = "ECOM[SSG]";
        document.getElementById("sub2").innerHTML = "ITP[KUA]";
        document.getElementById("sub3").innerHTML = "AP[LAB]";
        document.getElementById("sub4").innerHTML = "AP[LAB]";
        document.getElementById("sub5").innerHTML = "DSV[SBA]";
        document.getElementById("sub6").innerHTML = "ISVV[MMS]";
    }
    if(day == 5 ){
        document.getElementById("day").innerHTML = "Friday";
        document.getElementById("sub1").innerHTML = "DCN[SSG]";
        document.getElementById("sub2").innerHTML = "ITP[KUA]";
        document.getElementById("sub3").innerHTML = "ISVV[LAB]";
        document.getElementById("sub4").innerHTML = "IAP[KMK]B]";
        document.getElementById("sub5").innerHTML = "AISVV[MMS]";
        document.getElementById("sub6").innerHTML = "ISVV[MMS]";
    }
    if(day == 6 ){
        document.getElementById("day").innerHTML = "Saturday";
        document.getElementById("sub1").innerHTML = "AP[LAB]";
        document.getElementById("sub2").innerHTML = "AP[LAB]";
        document.getElementById("sub3").innerHTML = "OVER";
        document.getElementById("sub4").innerHTML = "OVER";
        document.getElementById("sub5").innerHTML = "OVER";
        document.getElementById("sub6").innerHTML = "OVER";
    }
