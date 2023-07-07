var i = 0;
var txt1 = `
Hiii Annieeee, >>

Happy 18th birthday! Today marks a significant milestone in your life >
as you step into adulthood, and I wanted to take a moment to wish >
you a day filled with joy, laughter, and beautiful memories. >>

You are now legally entitled to choose your own government 🗳️,get a tatoo 💀, >
get a car 🚗, rent an apartment all by yourself, file a lawsuit(or get legally sued) >
a partner ❤️ (my offer is still on the table xD) and so many other freaking >
coool things. That said, with great power comes great responsibility! >>

As much as it's gonna be fun and exiciting, at times it can equally be overwhelming.>
You will come across soo many people/bonds with hidden agendas. The definition of >
'friends' will changee. Even with everyone around ya, you might still feel lonely.>
A weird sense of emptiness. But this letter right here, is a reminder that everythings>
gonna be okayyy. Always prioritize your own well being over everything, it's not>
being selfish, it's selfcare and selflove.>>

Enough sober talk. God sure would've taken his time creating ya only that explains your>
extreme prettyness 😍, I mean.. when god was creating me, he was like this should do >
for this idoit but when it was your turn, he spent almost 5 fking years to craft you.>
not fair! :( Also you shouldn't let any stranger hold your hand, yk.. what if they >
kidnap you and take you out for a dinner date, huh? 👉👈>>

Wish we could go for a walk at the beach holding hands, sharing an ice-cream,>
staring at the distant ships under the starry night while the cold breeze touches>
our faces, enjoying each other's presence. I wonder how much more beautiful your smile's>
gonna be under the moonlight.. I bet it's gonna be the prettiest thing any human>
would get to experience 😁. Uggh.. too much fantasies here.>>

Anyway back to reality, what I'm saying is that you should be pampared with all the>
love and care the world has to offer. You a queen (maybe still a princess for now)>
and you better be treated like one. Until someone does that for youuu, you'll have to>
do that for yourself. Love yourself the mosttt and always take care of yourself.>
A verrryyy verryyyy happpy birthdayyyy Annieeee!!

a random stranger,
(on the other side of the world)
Isshiki
`
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {        
        if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML += '</br>'
        else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
