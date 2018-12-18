import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      metaTags: {
        title: 'Ember.js Consulting and Training - Ship Shape',
        description: 'Ember consulting is our specialty at Ship Shape. We have worked on several ambitious, ' +
          'full scale Ember apps for both large and small clients. We put a huge focus on leveling up your team\'s ' +
          'Ember skills, while also churning out bulletproof features for your Ember app.',
        type: 'website',
        url: 'https://shipshape.io/ember-consulting/',
        jsonld: {
          '@context': 'http://schema.org',
          '@type': 'Service',
          'name': 'Ember Consulting',
          'review': {
            '@type': 'Review',
            'reviewBody': 'Ship Shape knows what they’re doing. A thoughtful approach, pristine code and a 200% effort in everything they do, makes recommending them a no-brainer.',
            'author': {
              '@type': 'Person',
              'name': 'James Dixon',
              'jobTitle': 'Founder of Scout'
            }
          }
        }
      }
    };
  }
});
