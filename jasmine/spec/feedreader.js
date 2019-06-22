/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */

  // This is the suite describe
  describe('RSS Feeds', function() {

    // In this test allfeeds variable has be defind and that it is not be
    //      empty
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });



    // In this test each feed in the allfeeds object and ensure
    // it that has a URL defind and that the URL is not Empty.

    it('URls not tobe zero', function() {
      allFeeds.map(i => {
        expect(i.url).toBeDefined();
        expect(i.url.length).not.toBe(0);
      });
    });

    // In this test each feed in the allfeed object and ensures it has
    // a name defind and that the name is not empty.
    it('All Name Checking', function() {
      for (i in allFeeds) {
        expect(allFeeds[i].name).toBeDefined();
        expect((allFeeds[i].name).length).not.toBe(0);
      }
    });
  });

  //This is the suite describe
  describe('The menu', function() {

    //In this test case the menu element is hidden by default.
    it('Mean hide the default', function() {
      expect($('.menu-hidden')).toBeDefined();
    });

    //In this test case the menu chnage visibility when the menu icon is clicked.
    // The tast is has two conditions the menu is display when menu icon is clicked,
    // and does it hide when clicked again.

    it("The menu hide and show", function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  // This is the suite describe for "Initial entries"
  describe('Initial Entries', function() {
    // This is the  loadFeed() is asynchronous
    beforeEach(function(done) {
      loadFeed(0, done);
    })
    // In this test case in a feed there is at least a single entry element.
    //
    it('single Entry Element', function() {

      expect($('.feed .entry').length).not.toBe(0)

    });
  });

  // This is the suite describe for " New Feed Selection"
  describe('New Feed Selection', function() {

    // we have to take two variables old and pre, The old feed are placed in old
    // variable, the pre variable are place the New Feeds and there well be check the
    // condition
    // This is the  loadFeed() is asynchronous
    var old, pre;
    beforeEach(function(done) {
      loadFeed(0, function() {
        old = $('.feed').html();
        loadFeed(1, function() {
          pre = $('.feed').html();
          done();
        });
      });
    })

    // In this test case there is feed are not to be zero.
    it('new feed is loaded', function() {
      expect(old).not.toEqual(pre);
    });
  });

}());
