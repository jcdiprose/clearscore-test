### Comments

I had planned to snapshot test for UI regressions with cypress-visual-regression
but there's an issue with it, cypress, or vite that is stopping the tests from running
when including it as a plugin. Issues I've found point towards spaces in the pathname
but that is not the case for me.

I've used vertical slices to organise code into "features" or "slices" in the features directory

I don't think this is of production ready standard, the UI doesn't look like the designs because i'm missing a font. The architecture decisions on the otherhand I am happy with and think I've proved well in that regard.

Each new feature would have all related logic next to one another, this is better for scalability

components directory is a "mock" of wherever the design system components come from

I really like style props and styled-system is really powerful for me so I opted for that

There was no font provided in the test resources so design implementation isn't "pixel perfect"

I have usually worked with axios but opted for fetch on this test because I think it's starting to become the norm and is one less package to install. I wanted to wrap fetch because of the "boilerplate" stuff such as res.json(). I wanted something extensible but simple and github copilot recommended this so I made some changes to make support types with it also.
