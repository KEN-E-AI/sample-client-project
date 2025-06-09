const customEventParams = [
  {
    param: "my_param_1",
    type: "string",
  },
  {
    param: "my_param_2",
    type: "int",
  },
  {
    param: "my_param_3",
    type: "double",
  },
  {
    param: "my_param_4",
    type: "float",
  },
];

const customUserProps = [
  //   { param: 'member_id', type: 'string' },
  //   { param: 'member_level', type: 'string' }
];

const customQueryParams = [
  {
    param: "my_param_1",
    description: "Sample description for this column.",
    alias: "test1",
  },
];

const conversionEventNames = ["purchase", "file_download"];

/**
 * Sample custom conversion logic.
 * @returns {string}
 */
const isEventConversion = () => {
  return `
      case 
          when event_name in ('${conversionEventNames.join("', '")}')
              then struct(5 as event_value_in_usd, event_name as goal)
          -- when event_name = 'something_conversion' and form_name like '%newsletter%'
          --     then struct(5 as event_value_in_usd, "newsletter_signup" as goal)
          -- when event_name = 'scroll' and percent_scrolled in (25, 50, 75, 100)
          --     then struct(10 as event_value_in_usd, concat("scroll_", percent_scrolled) as goal)
      end
  `;
};

/**
 *  This is an example of how a custom content grouping might be applied.
 * @returns {string}
 */
const getContentGroup = () => {
  return `case 
          when regexp_contains(page_location, '/search') then 'search'
          when regexp_contains(page_location, '/shop') then "shopping"
          when regexp_contains(page_location, '/checkout') then 'checkout'
          when regexp_contains(page_location, '/account') then 'account'   
          else 'other'
      end`;
};

// Export project vars
module.exports = {
  customEventParams,
  customUserProps,
  conversionEventNames,
  customQueryParams,
  isEventConversion,
  getContentGroup,
};
