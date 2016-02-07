chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-73237610-1', 'auto');
			ga('send', 'pageview');

			(function($){
			    var myCurrency = 'GBP',
			        codersClanFee = 0.3;
			    
			    if($('.bid-text').length){
			        $.getJSON('https://openexchangerates.org/api/latest.json?app_id=0cb58aa6e948483ba7319aef485f93f0', function(json){
			            $('.bid-text').each(function(){
			                var t = $(this),
			                    amount = parseInt(t.text().replace('$', '')),
			                    newAmount = (amount - (amount * codersClanFee)) * json.rates[myCurrency],
			                    newAmountFormatted = newAmount.toLocaleString('en-GB', { style: 'currency', currency: myCurrency });
			                
			                t.attr('title', t.text())
			                 .text(newAmountFormatted);
			            });
			        });
			    }
			    
			    if($('.ticket.well').length){
			        $('.ticket.well').each(function(){
			            var t = $(this),
			                url = t.find('a').attr('href'),
			                testArea = $('<div />');
			                
			            testArea.load(url + ' .assigned-alert', function(html){
			               if(testArea.children().length){
			                   t.addClass('my-task');
			               }
			            });
			        })
			    }
			})(jQuery);
		}
	}, 10);
});