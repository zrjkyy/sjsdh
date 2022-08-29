function strReverse(s) {
	return s.split("").reverse().join("");
}

var doc={}
doc.cryear=function(){
	var s="&copy; 2008-"+(new Date().getFullYear())
	document.write(s)
}
doc.mba=function () {
    //document.write(strReverse("号28720060备PCI粤"))
}
doc.tel=function () {
    document.write(strReverse("5110-9991-771：话电系联"))
}
doc.qqt=function () {
	var s="QQ咨询：#"
	s=s.replace(/#/g,strReverse("0686504"))
    document.write(s)
}
doc.lawyer=function () {
	//document.write(strReverse("师律铮刘：问顾律法站本"))
}
doc.qqt=function () {
	var s="QQ咨询：#"
	s=s.replace(/#/g,strReverse("0686504"))
    document.write(s)
}
