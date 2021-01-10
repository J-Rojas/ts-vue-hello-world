import { Foo } from './lib/lib1'
import { Bar } from './lib/lib2'

function wonderbar() {
  let foo = Foo();
  return foo.bar();
}
 
wonderbar()

export {
  Bar,
  Foo
}