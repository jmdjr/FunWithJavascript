import { UrlTree, DefaultUrlSerializer } from '@angular/router';

export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
  override serialize(tree: UrlTree): string {
    return this._withTrailingSlash(super.serialize(tree));
  }

  private _withTrailingSlash(url: string): string {
    const splitOn = url.indexOf('?') > - 1 ? '?' : '#';
    const pathArr = url.split(splitOn);

    if (!pathArr[0].endsWith('/')) {
      let fileName: string = url.substring(url.lastIndexOf('/') + 1);
      if (fileName.indexOf('.') === -1) {
        pathArr[0] += '/';
      }
    }
    return pathArr.join(splitOn);
  }
}