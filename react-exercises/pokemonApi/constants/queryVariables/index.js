export const queryVariables = {
  variables: {
    limit: 12,
    where: {
      name: {
        _iregex: '',
      },
    },
  },
};

export const getVariablesItem = (id) => {
  return {
    variables: {
      where: {
        id: {
          _eq: id,
        },
      },
    },
  };
};

export const getVariablesMove = (id) => {
  return {
    variables: {
      where: {
        language_id: {
          _eq: 9,
        },
      },
      pokemonV2MoveWhere2: {
        id: {
          _eq: id,
        },
      },
    },
  };
};

export const getVariablesPokemon = (id) => {
  return {
    variables: {
      where: {
        id: {
          _eq: id,
        },
      },
      limit: 1,
    },
  };
};
