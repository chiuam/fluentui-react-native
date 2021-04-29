import * as React from 'react';
import { Shimmer } from '@fluentui-react-native/experimental-shimmer'
import { SHIMMER_TESTPAGE } from './consts';
import { Test, TestSection, PlatformStatus } from '../Test';
import { Stack } from '@fluentui-react-native/stack';
import { ImageURISource } from 'react-native';
import { stackStyle } from '../Common/styles';
import { RectProps} from 'react-native-svg'

const icon: ImageURISource = {
  uri:
    'data:image/png;base64,/9j/4AAQSkZJRgABAQABLAEsAAD/4QCARXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAEsAAAAAQAAASwAAAABAAKgAgAEAAAAAQAAAMigAwAEAAAAAQAAAMgAAAAA/+EJ2Wh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphZjRmMjAyMy02MmIzLTQ5MDMtOTkyOS1kNTk1MDcyNzAwYjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnN0b2NrOjhhYzBiZjc1LTkzZTktNGUyOC05YzY5LTA2ZjFlNmNiYmIxOSIvPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz4A/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iEXhJQ0NfUFJPRklMRQABAQAAEWhhcHBsAgAAAG1udHJHUkFZWFlaIAfcAAgAFwAPAC4AD2Fjc3BBUFBMAAAAAG5vbmUAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWRlc2MAAADAAAAAeWRzY20AAAE8AAAH6GNwcnQAAAkkAAAAI3d0cHQAAAlIAAAAFGtUUkMAAAlcAAAIDGRlc2MAAAAAAAAAH0dlbmVyaWMgR3JheSBHYW1tYSAyLjIgUHJvZmlsZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtbHVjAAAAAAAAAB8AAAAMc2tTSwAAAC4AAAGEZGFESwAAADgAAAGyY2FFUwAAADgAAAHqdmlWTgAAAEAAAAIicHRCUgAAAEoAAAJidWtVQQAAACwAAAKsZnJGVQAAAD4AAALYaHVIVQAAADQAAAMWemhUVwAAAB4AAANKbmJOTwAAADoAAANoY3NDWgAAACgAAAOiaGVJTAAAACQAAAPKaXRJVAAAAE4AAAPucm9STwAAACoAAAQ8ZGVERQAAAE4AAARma29LUgAAACIAAAS0c3ZTRQAAADgAAAGyemhDTgAAAB4AAATWamFKUAAAACYAAAT0ZWxHUgAAACoAAAUacHRQTwAAAFIAAAVEbmxOTAAAAEAAAAWWZXNFUwAAAEwAAAXWdGhUSAAAADIAAAYidHJUUgAAACQAAAZUZmlGSQAAAEYAAAZ4aHJIUgAAAD4AAAa+cGxQTAAAAEoAAAb8cnVSVQAAADoAAAdGZW5VUwAAADwAAAeAYXJFRwAAACwAAAe8AFYBYQBlAG8AYgBlAGMAbgDhACAAcwBpAHYA4QAgAGcAYQBtAGEAIAAyACwAMgBHAGUAbgBlAHIAaQBzAGsAIABnAHIA5QAgADIALAAyACAAZwBhAG0AbQBhAHAAcgBvAGYAaQBsAEcAYQBtAG0AYQAgAGQAZQAgAGcAcgBpAHMAbwBzACAAZwBlAG4A6AByAGkAYwBhACAAMgAuADIAQx6lAHUAIABoAOwAbgBoACAATQDgAHUAIAB4AOEAbQAgAEMAaAB1AG4AZwAgAEcAYQBtAG0AYQAgADIALgAyAFAAZQByAGYAaQBsACAARwBlAG4A6QByAGkAYwBvACAAZABhACAARwBhAG0AYQAgAGQAZQAgAEMAaQBuAHoAYQBzACAAMgAsADIEFwQwBDMEMAQ7BEwEPQQwACAARwByAGEAeQAtBDMEMAQ8BDAAIAAyAC4AMgBQAHIAbwBmAGkAbAAgAGcA6QBuAOkAcgBpAHEAdQBlACAAZwByAGkAcwAgAGcAYQBtAG0AYQAgADIALAAyAMEAbAB0AGEAbADhAG4AbwBzACAAcwB6APwAcgBrAGUAIABnAGEAbQBtAGEAIAAyAC4AMpAadShwcJaOUUlepgAgADIALgAyACCCcl9pY8+P8ABHAGUAbgBlAHIAaQBzAGsAIABnAHIA5QAgAGcAYQBtAG0AYQAgADIALAAyAC0AcAByAG8AZgBpAGwATwBiAGUAYwBuAOEAIAFhAGUAZADhACAAZwBhAG0AYQAgADIALgAyBdIF0AXeBdQAIAXQBeQF1QXoACAF2wXcBdwF2QAgADIALgAyAFAAcgBvAGYAaQBsAG8AIABnAHIAaQBnAGkAbwAgAGcAZQBuAGUAcgBpAGMAbwAgAGQAZQBsAGwAYQAgAGcAYQBtAG0AYQAgADIALAAyAEcAYQBtAGEAIABnAHIAaQAgAGcAZQBuAGUAcgBpAGMBAwAgADIALAAyAEEAbABsAGcAZQBtAGUAaQBuAGUAcwAgAEcAcgBhAHUAcwB0AHUAZgBlAG4ALQBQAHIAbwBmAGkAbAAgAEcAYQBtAG0AYQAgADIALAAyx3y8GAAg1ozAyQAgrBC5yAAgADIALgAyACDVBLhc0wzHfGZukBpwcF6mfPtlcAAgADIALgAyACBjz4/wZYdO9k4AgiwwsDDsMKQwrDDzMN4AIAAyAC4AMgAgMNcw7TDVMKEwpDDrA5MDtQO9A7kDugPMACADkwO6A8EDuQAgA5MDrAO8A7wDsQAgADIALgAyAFAAZQByAGYAaQBsACAAZwBlAG4A6QByAGkAYwBvACAAZABlACAAYwBpAG4AegBlAG4AdABvAHMAIABkAGEAIABHAGEAbQBtAGEAIAAyACwAMgBBAGwAZwBlAG0AZQBlAG4AIABnAHIAaQBqAHMAIABnAGEAbQBtAGEAIAAyACwAMgAtAHAAcgBvAGYAaQBlAGwAUABlAHIAZgBpAGwAIABnAGUAbgDpAHIAaQBjAG8AIABkAGUAIABnAGEAbQBtAGEAIABkAGUAIABnAHIAaQBzAGUAcwAgADIALAAyDiMOMQ4HDioONQ5BDgEOIQ4hDjIOQA4BDiMOIg5MDhcOMQ5IDicORA4bACAAMgAuADIARwBlAG4AZQBsACAARwByAGkAIABHAGEAbQBhACAAMgAsADIAWQBsAGUAaQBuAGUAbgAgAGgAYQByAG0AYQBhAG4AIABnAGEAbQBtAGEAIAAyACwAMgAgAC0AcAByAG8AZgBpAGkAbABpAEcAZQBuAGUAcgBpAQ0AawBpACAARwByAGEAeQAgAEcAYQBtAG0AYQAgADIALgAyACAAcAByAG8AZgBpAGwAVQBuAGkAdwBlAHIAcwBhAGwAbgB5ACAAcAByAG8AZgBpAGwAIABzAHoAYQByAG8BWwBjAGkAIABnAGEAbQBtAGEAIAAyACwAMgQeBDEESQQwBE8AIARBBDUEQAQwBE8AIAQzBDAEPAQ8BDAAIAAyACwAMgAtBD8EQAQ+BEQEOAQ7BEwARwBlAG4AZQByAGkAYwAgAEcAcgBhAHkAIABHAGEAbQBtAGEAIAAyAC4AMgAgAFAAcgBvAGYAaQBsAGUGOgYnBkUGJwAgADIALgAyACAGRAZIBkYAIAYxBkUGJwYvBkoAIAY5BicGRXRleHQAAAAAQ29weXJpZ2h0IEFwcGxlIEluYy4sIDIwMTIAAFhZWiAAAAAAAADzUQABAAAAARbMY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08D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',
};

const shimmer: React.FunctionComponent<{}> = () => {
const rectProp: RectProps = {
  width:400,
  height: 500,
  rx: 3,
  ry: 3,
}
  return (
        <Stack style={stackStyle}>
          <Shimmer uri={icon} width={200} height={200}/>
          <Shimmer element='lines' width={200} height={200}/>
          <Shimmer element='lines' shape={rectProp} />
        </Stack>
  );
};

const shimmerSections: TestSection[] = [
  {
    name: 'Basic Shimmer',
    testID: SHIMMER_TESTPAGE,
    component: shimmer,
  },
];

export const ShimmerTest: React.FunctionComponent<{}> = () => {
  const status: PlatformStatus = {
    win32Status: 'Backlog',
    uwpStatus: 'Backlog',
    iosStatus: 'Beta',
    macosStatus: 'Backlog',
    androidStatus: 'Backlog',
  };

  const description =
    'Shimmer is a temporary animation placeholder for when a service call takes time to return data but the rest of the UI should continue rendering.';

  return <Test name="Shimmer Test" description={description} sections={shimmerSections} status={status}></Test>;
};
