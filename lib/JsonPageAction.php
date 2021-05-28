<?php

namespace Uniform\Actions;

class JsonPageAction extends Action {
  public function perform() {
    try {
      $page = page();
      $entries = $page->form_entries()->toData('json');
      array_push($entries, $this->form->data());
      kirby()->impersonate(
        'kirby',
        fn() => $page->update([
          'form_entries' => \Kirby\Data\Json::encode($entries),
        ]),
      );
    } catch (\Exception $error) {
      $this->fail($error->getMessage());
    }
  }
}