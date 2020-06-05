import React, { useState, ChangeEvent } from 'react';
import {
  Input,
  VisuallyHidden,
  FormLabel,
  Button,
  Flex,
  Box,
} from '@chakra-ui/core';
import { fromUrl } from 'capsize/metrics';

import { useAppState } from '../AppStateContext';
import { fontTypeFromUrl } from './fontTypeFromUrl';

export default function UrlFontSelector() {
  const { dispatch } = useAppState();

  const [fontUrl, setFontUrl] = useState('');

  return (
    <form
      onSubmit={async (ev) => {
        ev.preventDefault();
        const metrics = await fromUrl(fontUrl);
        dispatch({
          type: 'UPDATE_FONT',
          value: {
            metrics,
            font: {
              source: 'URL',
              url: fontUrl,
              type: fontTypeFromUrl(fontUrl),
            },
          },
        });
      }}
    >
      <VisuallyHidden>
        <FormLabel htmlFor="url">Font url</FormLabel>
      </VisuallyHidden>
      <Flex>
        <Box paddingRight={1} w="100%">
          <Input
            value={fontUrl}
            id="url"
            name="url"
            onChange={(ev: ChangeEvent<HTMLInputElement>) =>
              setFontUrl(ev.currentTarget.value)
            }
            placeholder="Enter a url"
          />
        </Box>

        <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
}