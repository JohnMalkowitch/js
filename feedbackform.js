$(function(){
02
     
03
    $("#form").validate({   
04
        rules: {    
05
            name: {        
06
                required: true, 
07
                minlength: 3    
08
            },
09
            company: {
10
                required: true
11
            },
12
            phone: {
13
                required: true,
14
                number: true,   
15
                minlength: 6
16
            },
17
            email: {
18
                required: true,
19
                email: true 
20
            },
21
            message: {
22
                required: true
23
            }
24
        },
25
        messages: { 
26
            name: {
27
                required: 
28
                minlength: 
29
            },
30
            company: {
31
                required: 
32
            },
33
            phone: {
34
                required: 
35
                number: 
36
                minlength: 
37
            },
38
            email: 
            message: {
40
                required: 
41
            }
42
        },
43
        success: function(label) {
44
            
45
            label.html('OK').removeClass('error').addClass('ok');
46
            setTimeout(function(){
47
                label.fadeOut(500);
48
            }, 2000)
49
        }
50
    });
51
     
52
});
