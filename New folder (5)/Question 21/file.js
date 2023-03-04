let countries = ['Argentina', 'Belize', 'Chile', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'India', 'Japan', 'Kenya']

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
  console.log(countries);
}
